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
    return <p>Empty results</p>;
  }
  const data = await getData({ query });

  return (
    <ul className="w-full">
      {data.items?.map((book: any) => {
        return (
          <li key={book.id} className="w-full border p-2">
            <Link href={`/book/${book.id}`}>
              <p>{book.volumeInfo.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
