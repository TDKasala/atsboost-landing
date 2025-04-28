import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  title: string;
  description?: string;
  date?: string;
  slug: string;
}

function getAllPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'blog-posts');
  const files = fs.readdirSync(postsDir);
  return files
    .filter(file => file.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return {
        title: data.title || filename.replace('.md', ''),
        description: data.description || '',
        date: data.date || '',
        slug: filename.replace('.md', ''),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">ATSBoost Blog/Resources</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="bg-white shadow rounded p-4 border hover:border-green-600 transition">
            <Link href={`/blog/${post.slug}`} className="text-xl text-blue-900 font-semibold">{post.title}</Link>
            <div className="text-xs text-gray-500 mb-2">{post.date}</div>
            <div className="text-gray-600">{post.description}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}