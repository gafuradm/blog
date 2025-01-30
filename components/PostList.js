import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/post/${post.slug}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
