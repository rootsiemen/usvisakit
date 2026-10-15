import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../lib/posts";
import { pageSeo } from "../seo";

export const metadata: Metadata = pageSeo(
  "/blog",
  "VisaKit Blog — US Visa Guides & Analysis",
  "In-depth US visa guides: H-1B lottery analysis, October 2026 visa bulletin breakdown, and F1 interview preparation. Free, updated for 2026."
);

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">VisaKit Blog</h1>
      <p className="mt-3 text-zinc-600">
        In-depth guides and analysis on US visas — H-1B lottery data, visa
        bulletin movement, and interview preparation.
      </p>

      <div className="mt-8 space-y-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            <p className="text-xs font-semibold text-zinc-400">{fmtDate(p.date)}</p>
            <h2 className="mt-1 text-xl font-bold text-zinc-900">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-blue-700">
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
