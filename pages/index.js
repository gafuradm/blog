import PostList from '../components/PostList.js';
import posts from '../data/posts.json';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}
