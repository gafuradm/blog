import PostItem from './PostItem.js';

export default function PostList({ posts }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
