import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  const posts: Post[] = await client.fetch(STARTUP_QUERY);

  return (
    <>
      {/* 
        Section for CTA and search form
       */}
      <section className="flex flex-col items-center justify-center h-screen text-black border-b-2 border-black  bg-gradient-to-t from-gray-300 to-gray-100">
        <h1 className="text-6xl font-bold text-center">
          Pitch Your Startup <br />
          Get Funded, Get Hired
        </h1>
        <p className="mt-4 text-lg text-center">
          Join our community of entrepreneurs and investors.
        </p>
        <div className="mt-8">
          <SearchForm search={search} />
        </div>
      </section>

      {/* Section for Content */}
      <section className="bg-gray-100 p-10">
        <p className="text-2xl font-bold">
          {search
            ? `Search results for "${search}"`
            : "Explore Startups and Investors"}
        </p>
        <ul className="mt-4 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts ? (
            posts.map((post) => (
              <li key={post._id}>
                <StartupCard post={post} />
              </li>
            ))
          ) : (
            <li className="col-span-3 text-center text-gray-500">
              No results found.
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
