import Link from "next/link";

const posts = [
  { slug: "getting-started", title: "Getting Started With ATSBoost", summary: "How to use the platform" },
  // Add more blog posts as needed!
];

export default function Blog() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold">{post.title}</Link>
            <p className="text-gray-500">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}