"use client";
import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-100 rounded-lg shadow p-5 hover:shadow-md transition">
          <Link href={`/${post.slug}`} className="text-2xl font-semibold text-blue-600 hover:text-blue-800">
            {post.title}
          </Link>
          <p className="text-gray-600 mt-2">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
