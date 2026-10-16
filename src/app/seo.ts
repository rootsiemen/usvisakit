import type { Metadata } from "next";

export const BASE = "https://visa.frinjo.me";
const OG_IMAGE = `${BASE}/og-image.png`;
export const SITE_NAME = "VisaKit";

/** og:image alt without doubled branding ("VisaKit — VisaKit — …"). */
function ogAlt(title: string): string {
  const clean = title.replace(/\s\|\sVisaKit$/, "").trim();
  return clean.startsWith(SITE_NAME) ? clean : `${SITE_NAME} — ${clean}`;
}

/** Full per-page SEO metadata: canonical + Open Graph + Twitter cards. */
export function pageSeo(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = `${BASE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogAlt(title) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

/** SoftwareApplication schema for interactive tool pages (free web tools). */
export function softwareLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${BASE}${path}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

/** BreadcrumbList schema. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
}
