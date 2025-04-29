import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

interface PostParams {
  params: { slug: string };
}

// Required for dynamic routing in Next.js App Router
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'blog-posts');
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', ''),
    }));
}

export default async function BlogPost({ params }: PostParams) {
  const postPath = path.join(process.cwd(), 'blog-posts', params.slug + '.md');
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto p-8">
      <Link href="/blog" className="text-green-600 text-sm mb-2 inline-block">&larr; Back to blog</Link>
      <h1 className="text-2xl font-bold text-blue-900 mb-2">{data.title}</h1>
      <div className="text-xs text-gray-500 mb-6">{data.date}</div>
      <article className="prose prose-blue" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}