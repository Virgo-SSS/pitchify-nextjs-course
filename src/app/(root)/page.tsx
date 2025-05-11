import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  const posts: Post[] = [
    {
      id: 1,
      title: "Startup 1",
      description: "Description for startup 1",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      createdAt: new Date().toISOString(),
      author: {
        id: 1,
        name: "John Doe",
      },
      tags: ["Tech", "AI"],
    },
    {
      id: 2,
      title: "Startup 2",
      description: "Description for startup 2",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      createdAt: new Date().toISOString(),
      author: {
        id: 2,
        name: "Jane Smith",
      },
    },
    {
      id: 3,
      title: "Startup 3",
      description: "Description for startup 3",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      createdAt: new Date().toISOString(),
      author: {
        id: 3,
        name: "Alice Johnson",
      },
    },
    {
      id: 4,
      title: "Startup 4",
      description: "Description for startup 3",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      createdAt: new Date().toISOString(),
      author: {
        id: 4,
        name: "Bob Brown",
      },
    },
  ];

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
              <li key={post.id}>
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
