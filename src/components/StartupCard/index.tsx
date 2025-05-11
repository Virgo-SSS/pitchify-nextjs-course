import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StartupCard({ post }: StartupCardProps) {
  return (
    <>
      <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        {/* CREATE AT DATE SECTION AND ADD BACKGROUND COLOR TO DATE */}
        <div className="flex flex-wrap items-center justify-between mb-2 gap-4 text-sm">
          <span className="font-bold bg-cyan-100 px-5 py-1 rounded-full">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Link
            href={`/user/${post.author.id}`}
            className="flex items-center space-x-2 text-gray-700 hover:text-cyan-500"
          >
            {post.author.name}
          </Link>
        </div>

        <div className="flex flex-col mt-5">
          <Link href={`/post/${post.id}`} className="mb-1">
            <h2 className="text-lg font-bold text-gray-800 hover:text-gray-400">
              {post.title}
            </h2>
          </Link>

          <p className="text-gray-600 mb-4">{post.description}</p>
        </div>

        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-50"
          />
        )}

        <div className="flex flex-wrap gap-2 mt-4 justify-between">
          <div className="flex flex-wrap gap-3">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-black text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/post/${post.id}`}
            className="text-black text-sm font-semibold hover:text-cyan-500"
            target="_blank"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}
