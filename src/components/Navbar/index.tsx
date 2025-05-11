import { auth, signIn, signOut } from "../../../auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Create
              </button>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Sign Out
                </button>
              </form>
              <div className="flex items-center gap-2">
                <Image
                  src={"/default-profile.jpg"}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
