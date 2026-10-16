import type { Metadata } from "next";
import { pageSeo, BASE, SITE_NAME } from "../seo";

export const metadata: Metadata = pageSeo(
  "/about",
  "About VisaKit",
  "About VisaKit — free US visa tools and guides."
);

export default function About() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About VisaKit",
    url: `${BASE}/about`,
    about: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE,
      logo: `${BASE}/icon.png`,
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <h1 className="text-3xl font-extrabold tracking-tight">About VisaKit</h1>
      <p className="mt-4 text-zinc-600">
        VisaKit is a free toolkit for US visa applicants: an H-1B lottery odds
        calculator built on official FY2027 USCIS/DHS data, a visa bulletin
        priority-date checker using the Department of State&apos;s monthly
        bulletin, and a practical F1 interview preparation guide.
      </p>
      <p className="mt-4 text-zinc-600">
        Everything runs in your browser — no signup, and nothing you enter
        leaves your device. Content is general information for guidance only:
        VisaKit is not a law firm and this is not legal advice. For
        case-specific questions, consult a licensed immigration attorney.
      </p>
    </div>
  );
}
