import Link from 'next/link';

export default function PostItem({ post }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-700">{post.excerpt}</p>
      <Link href={`/${post.slug}`}>
        <a className="text-blue-500">Read more</a>
      </Link>
    </div>
  );
}
