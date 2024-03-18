import Image from "next/image";

async function getData({ query }: { query: string }) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${query}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BookDetails({ params }: { params: { id: string } }) {
  const data = await getData({ query: params.id });
  console.log(data);
  if (!data) return <p>Loading...</p>;

  return (
    <main className="flex flex-1 flex-col items-center w-full p-8">
      <h1>{data.volumeInfo.title}</h1>
      <h2>{data.volumeInfo.subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: data.volumeInfo.description }}
      ></div>

      <Image
        src={data.volumeInfo.imageLinks?.medium}
        width={500}
        height={500}
        alt="Picture of the book"
      />
    </main>
  );
}

export default BookDetails;
