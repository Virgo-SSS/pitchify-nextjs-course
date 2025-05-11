import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

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
      <section className="flex flex-col items-center justify-center h-screen text-black">
        <h2 className="text-4xl font-bold text-center">Featured Startups</h2>
        <p className="mt-4 text-lg text-center">
          Discover the latest startups and investment opportunities.
        </p>
        {/* Add your content here */}
      </section>
    </>
  );
}
