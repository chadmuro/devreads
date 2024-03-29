import React, { Suspense } from "react";
import { Search } from "../components/search";
import SearchResults from "../components/search-results";
import { Icons } from "@/components/icons";

async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <main className="flex flex-1 flex-col items-center w-full max-w-screen-md p-8">
      <Search />
      <Suspense
        key={query}
        fallback={
          <div className="pt-4">
            <Icons.spinner />
          </div>
        }
      >
        <SearchResults query={query} />
      </Suspense>
    </main>
  );
}

export default Dashboard;
