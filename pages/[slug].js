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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="max-w-3xl mx-auto p-5">
        <article className="text-center">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.date}</p>
          <div className="text-left text-lg leading-relaxed">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
}