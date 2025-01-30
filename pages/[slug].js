import { useRouter } from 'next/router';
import posts from '../data/posts.json';
import Header from "../components/Header.js";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500 text-xl mt-10">Пост не найден</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <article>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">{post.date}</p>
          <div className="text-lg text-gray-800 leading-relaxed">{post.content}</div>
        </article>
      </main>
    </div>
  );
}
