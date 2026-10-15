"use client";

import { useMemo, useState } from "react";

type Level = "I" | "II" | "III" | "IV";

const ODDS: Record<Level, { entries: number; chance: number }> = {
  I: { entries: 1, chance: 15 },
  II: { entries: 2, chance: 30 },
  III: { entries: 3, chance: 45 },
  IV: { entries: 4, chance: 61 },
};

const LEVELS: Level[] = ["I", "II", "III", "IV"];

export default function H1bForm() {
  const [level, setLevel] = useState<Level>("II");
  const [advancedDegree, setAdvancedDegree] = useState(true);

  const o = ODDS[level];

  const note = useMemo(() => {
    if (advancedDegree)
      return "In FY2027, 71.5% of selected beneficiaries held a US advanced degree — a strong positive signal under the weighted system.";
    return "Only 17.7% of FY2027 selections were wage Level I. A higher wage level improves odds far more than anything else.";
  }, [advancedDegree]);

  const segBtn = (active: boolean) =>
    `rounded-lg px-4 py-2.5 text-sm font-semibold ${active ? "bg-blue-700 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        H-1B Lottery Calculator (FY2027)
      </h1>
      <p className="mt-3 text-zinc-600">
        Estimate your H-1B selection chance under the new wage-weighted lottery.
        Pick your DOL prevailing wage level — odds are based on DHS FY2027
        projections and USCIS registration data.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          Prevailing wage level (OEWS)
        </label>
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button key={l} className={segBtn(level === l)} onClick={() => setLevel(l)}>
              Level {l}
            </button>
          ))}
        </div>

        <label className="block text-sm font-semibold text-zinc-700 mt-5 mb-2">
          US advanced degree (master&apos;s or higher)?
        </label>
        <div className="flex gap-2">
          <button className={segBtn(advancedDegree)} onClick={() => setAdvancedDegree(true)}>Yes</button>
          <button className={segBtn(!advancedDegree)} onClick={() => setAdvancedDegree(false)}>No</button>
        </div>

        <div className="mt-6 rounded-xl bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-800">Estimated selection chance</p>
          <p className="text-4xl font-extrabold text-blue-900">~{o.chance}%</p>
          <p className="mt-1 text-xs text-blue-700">
            Level {level} = {o.entries} {o.entries === 1 ? "entry" : "entries"} in the selection pool
          </p>
        </div>

        <p className="mt-3 text-xs text-zinc-500">{note}</p>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-bold">FY2027 lottery — official stats</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Registrations", "211,600"],
            ["Overall selection", "~40%"],
            ["Advanced degree selected", "71.5%"],
            ["Level I selected", "17.7%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-zinc-100 p-4">
              <p className="text-xs font-semibold text-zinc-600">{k}</p>
              <p className="text-xl font-extrabold">{v}</p>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>Registrations fell 38.5% vs FY2026 (343,981 → 211,600) after the weighted system discouraged low-wage filings.</li>
          <li>Cap: 85,000 (including 20,000 reserved for US master&apos;s+). No second lottery was held for FY2027.</li>
          <li>Next registration window: <strong>March 2027</strong> (FY2028 cap).</li>
        </ul>
        <p className="mt-4 text-xs text-zinc-500">
          Estimate based on DHS FY2027 projections — actual odds vary by year and
          registration volume. General information only, not legal advice.
        </p>
      </div>
    </div>
  );
}
