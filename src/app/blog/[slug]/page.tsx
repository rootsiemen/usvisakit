import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../../lib/posts";
import { pageSeo, breadcrumbLd, BASE, SITE_NAME } from "../../seo";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    ...pageSeo(`/blog/${post.slug}`, post.title, post.description),
    keywords: post.keywords,
  };
}

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${BASE}/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: BASE },
    publisher: { "@type": "Organization", name: SITE_NAME, url: BASE },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const crumbs = breadcrumbLd([
    { name: "Home", path: "" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <nav className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
        </nav>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          {fmtDate(post.date)} · {SITE_NAME}
        </p>

        <div
          className="article-body mt-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-200 p-6">
          <h2 className="text-lg font-bold text-blue-900">Try it yourself</h2>
          <p className="mt-2 text-sm text-zinc-700">{post.toolCta}</p>
          <Link
            href={post.toolHref}
            className="mt-4 inline-block rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800"
          >
            Open the {post.toolName} →
          </Link>
        </div>

        <p className="mt-8 text-sm">
          <Link href="/blog" className="font-semibold text-blue-700 hover:underline">
            ← Back to all articles
          </Link>
        </p>
      </article>
    </>
  );
}
