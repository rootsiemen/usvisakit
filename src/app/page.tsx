import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisaKit — Free US Visa Tools (H-1B, Visa Bulletin, F1)",
  description:
    "Free US visa tools: H-1B lottery odds calculator (FY2027 weighted system), October 2026 visa bulletin checker, and F1 visa interview guide. No signup.",
};

const tools = [
  {
    href: "/h1b-lottery-calculator",
    title: "H-1B Lottery Calculator",
    desc: "Estimate your selection chance under the new wage-weighted system. FY2027 data: 211,600 registrations, ~40% overall selection.",
    tag: "FY2027 weighted",
  },
  {
    href: "/visa-bulletin",
    title: "Visa Bulletin Checker",
    desc: "October 2026 final action dates for EB-1/EB-2/EB-3. Enter your priority date to see if your category is current.",
    tag: "Oct 2026",
  },
  {
    href: "/f1-visa-interview",
    title: "F1 Interview Guide",
    desc: "Common question groups with sample questions plus practical tips to prepare for your student visa interview.",
    tag: "Interview prep",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Free <span className="text-blue-700">US Visa</span> Tools
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          H-1B lottery odds, visa bulletin dates, and F1 interview prep —
          updated for FY2027. No signup, instant answers.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tools.map((t) => (
          <a
            key={t.href}
            href={t.href}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-3 py-1">
              {t.tag}
            </span>
            <h2 className="mt-3 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{t.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Open tool →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-white border border-zinc-200 p-6">
        <h2 className="text-xl font-bold">Why VisaKit?</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>H-1B odds use the official FY2027 weighted-selection data from USCIS/DHS.</li>
          <li>Visa bulletin dates taken from the October 2026 Department of State bulletin.</li>
          <li>Everything runs in your browser — no account, no data collected.</li>
          <li>General information only — not legal advice.</li>
        </ul>
      </div>
    </div>
  );
}
