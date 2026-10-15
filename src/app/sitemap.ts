import type { MetadataRoute } from "next";
import { posts } from "../lib/posts";

const BASE = "https://visa.frinjo.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/h1b-lottery-calculator",
    "/visa-bulletin",
    "/f1-visa-interview",
    "/about",
    "/privacy",
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : p.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
