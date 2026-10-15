"use client";

import { useMemo, useState } from "react";

type Cat = "EB-1" | "EB-2" | "EB-3";
type Country = "ROW" | "China" | "India";

// October 2026 Visa Bulletin — Final Action Dates. null = Current.
const DATES: Record<Cat, Record<Country, string | null>> = {
  "EB-1": { ROW: null, China: "2023-07-01", India: "2023-02-01" },
  "EB-2": { ROW: "2025-01-01", China: "2021-10-01", India: "2013-11-01" },
  "EB-3": { ROW: "2024-05-15", China: "2022-01-08", India: "2014-01-01" },
};

const CATS: Cat[] = ["EB-1", "EB-2", "EB-3"];
const COUNTRIES: Country[] = ["ROW", "China", "India"];

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function BulletinChecker() {
  const [cat, setCat] = useState<Cat>("EB-2");
  const [country, setCountry] = useState<Country>("India");
  const [pd, setPd] = useState("2014-06-01");

  const cutoff = DATES[cat][country];

  const result = useMemo(() => {
    if (!cutoff) return { current: true, label: "CURRENT", detail: "No cutoff date — visa numbers are available for this category and country." };
    if (!pd) return { current: false, label: "—", detail: "Enter your priority date to check." };
    const ok = pd < cutoff;
    return ok
      ? { current: true, label: "CURRENT", detail: `Your priority date (${fmtDate(pd)}) is earlier than the cutoff (${fmtDate(cutoff)}).` }
      : { current: false, label: "NOT YET CURRENT", detail: `Your priority date (${fmtDate(pd)}) is not earlier than the cutoff (${fmtDate(cutoff)}).` };
  }, [cutoff, pd]);

  const segBtn = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-blue-700 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Visa Bulletin — October 2026
      </h1>
      <p className="mt-3 text-zinc-600">
        Employment-based final action dates from the October 2026 bulletin
        (FY2027). Check whether your priority date is current below. Official
        source:{" "}
        <a
          href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          travel.state.gov
        </a>
        .
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold">Priority Date Checker</h2>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Category</label>
          <div className="flex gap-2">
            {CATS.map((c) => (
              <button key={c} className={segBtn(cat === c)} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Country of chargeability</label>
          <div className="flex gap-2">
            {COUNTRIES.map((c) => (
              <button key={c} className={segBtn(country === c)} onClick={() => setCountry(c)}>
                {c === "ROW" ? "Rest of World" : c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Your priority date</label>
          <input
            type="date"
            value={pd}
            onChange={(e) => setPd(e.target.value)}
            className="rounded-xl border border-zinc-300 px-4 py-2.5 font-semibold focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className={`mt-6 rounded-xl p-5 ${result.current ? "bg-emerald-50" : "bg-amber-50"}`}>
          <p className={`text-2xl font-extrabold ${result.current ? "text-emerald-900" : "text-amber-900"}`}>
            {result.label}
          </p>
          <p className="mt-1 text-sm text-zinc-600">{result.detail}</p>
          {cutoff && (
            <p className="mt-1 text-xs text-zinc-500">
              Cutoff for {cat} / {country === "ROW" ? "Rest of World" : country}: {fmtDate(cutoff)}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-bold">October 2026 — Final Action Dates</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-500 border-b">
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Rest of World</th>
                <th className="py-2 pr-4">China</th>
                <th className="py-2">India</th>
              </tr>
            </thead>
            <tbody>
              {(Object.keys(DATES) as Cat[]).map((c) => (
                <tr key={c} className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-semibold">{c}</td>
                  {(Object.keys(DATES[c]) as Country[]).map((k) => (
                    <td key={k} className="py-2 pr-4">
                      {DATES[c][k] ? fmtDate(DATES[c][k]!) : <span className="text-emerald-700 font-semibold">Current</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          EB-4: Dec 15, 2022 (all countries). EB-5 unreserved: ROW Current, China Dec 1, 2016, India Dec 1, 2023.
          Dates change monthly — always confirm with the official bulletin. Not legal advice.
        </p>
      </div>
    </div>
  );
}
