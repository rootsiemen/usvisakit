import type { MetadataRoute } from "next";

const BASE = "https://usvisakit.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/h1b-lottery-calculator",
    "/visa-bulletin",
    "/f1-visa-interview",
    "/about",
    "/privacy",
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
