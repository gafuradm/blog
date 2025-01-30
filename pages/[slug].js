import { useRouter } from 'next/router';
import posts from '../data/posts.json';
import Header from "../components/Header.js";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <article className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <p className="text-gray-600 mb-6">{post.date}</p>
          <div className="text-left text-lg leading-relaxed text-gray-800">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
}
