import Link from "next/link";

const PostList = () => {
  const posts = [
    { id: 1, title: "Первый пост", slug: "first-post" },
    { id: 2, title: "Второй пост", slug: "second-post" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <Link
          href={`/${post.slug}`}
          key={post.id}
          className="block bg-white rounded-lg shadow hover:shadow-lg p-4 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Это описание поста "{post.title}".
          </p>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
