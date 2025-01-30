import PostList from '../components/PostList';
import posts from '../data/posts.json';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold">Добро пожаловать в Gafur's Blog</h1>
          <p className="text-lg text-gray-300 mt-3">
            Блог о программировании, ИИ, науке, языках и образовании.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PostList posts={posts} />
        </div>
      </main>
    </div>
  );
}