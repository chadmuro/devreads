import Image from "next/image";
import Link from "next/link";

async function getData({ query }: { query: string }) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:technology%20education`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function SearchResults({ query }: { query: string }) {
  if (!query) {
    return null;
  }
  const data = await getData({ query });

  return (
    <ul className="w-full max-h-[500px] overflow-scroll mt-2 rounded-md">
      {data.items?.map((book: any) => {
        return (
          <li key={book.id} className="w-full border p-2">
            <Link href={`/book/${book.id}`}>
              <div className="flex gap-2">
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src={book.volumeInfo.imageLinks?.smallThumbnail}
                    alt={book.volumeInfo.title}
                    fill
                    objectFit="contain"
                  />
                </div>
                <p>{book.volumeInfo.title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
