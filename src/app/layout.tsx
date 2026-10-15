import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visa.frinjo.me"),
  title: {
    default: "VisaKit — Free US Visa Tools",
    template: "%s | VisaKit",
  },
  description:
    "Free US visa tools: H-1B lottery odds calculator, October 2026 visa bulletin priority-date checker, and F1 visa interview guide. Updated, no signup.",
  keywords: [
    "h1b lottery calculator",
    "visa bulletin october 2026",
    "f1 visa interview questions",
    "h1b lottery chances",
  ],
  alternates: {
    canonical: "https://visa.frinjo.me",
  },
  openGraph: {
    title: "VisaKit — Free US Visa Tools",
    description:
      "H-1B lottery calculator, visa bulletin checker, F1 interview guide. Free, updated for FY2027.",
    url: "https://visa.frinjo.me",
    siteName: "VisaKit",
    type: "website",
    images: [
      {
        url: "https://visa.frinjo.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "VisaKit — Free US Visa Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaKit — Free US Visa Tools",
    description:
      "H-1B lottery calculator, visa bulletin checker, F1 interview guide. Free, updated for FY2027.",
    images: ["https://visa.frinjo.me/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VisaKit",
  url: "https://visa.frinjo.me",
  description:
    "Free US visa tools: H-1B lottery odds calculator, visa bulletin priority-date checker, F1 visa interview guide.",
};

function Header() {
  const links = [
    { href: "/h1b-lottery-calculator", label: "H-1B Calculator" },
    { href: "/visa-bulletin", label: "Visa Bulletin" },
    { href: "/f1-visa-interview", label: "F1 Interview" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-blue-700">Visa</span>
          <span className="text-zinc-900">Kit</span>
        </a>
        <nav className="flex gap-4 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
        <p className="font-semibold text-zinc-700 mb-2">VisaKit</p>
        <p className="max-w-2xl">
          VisaKit provides free estimates and general information for guidance
          only. It is not legal advice and not affiliated with USCIS or the US
          Department of State. For case-specific questions, consult a licensed
          immigration attorney.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/about" className="hover:text-blue-700">About</a>
          <a href="/privacy" className="hover:text-blue-700">Privacy</a>
          <a href="/h1b-lottery-calculator" className="hover:text-blue-700">H-1B Calculator</a>
          <a href="/visa-bulletin" className="hover:text-blue-700">Visa Bulletin</a>
          <a href="/f1-visa-interview" className="hover:text-blue-700">F1 Interview</a>
        </div>
        <p className="mt-4 text-xs">© 2026 VisaKit. Data last verified: October 2026.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
