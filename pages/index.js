import PostList from '/components/PostList';
import posts from '../data/posts.json';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}
