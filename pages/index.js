import PostList from '/components/PostList';
import posts from '../data/posts.json';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <p className="text-xl text-gray-800">
            Это личный блог Дамирулы Гафура, которому 15 лет. Он интересуется программированием, ИИ, наукой, языками и образованием.
          </p>
        </div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
