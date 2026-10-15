import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VisaKit privacy policy — no data collection.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-zinc-600">
        VisaKit does not collect, store, or transmit any personal data. All
        calculations happen locally in your browser — anything you enter never
        leaves your device.
      </p>
      <p className="mt-4 text-zinc-600">
        We do not use accounts or tracking cookies that identify you. If this
        policy changes, the updated version will be posted on this page.
      </p>
      <p className="mt-4 text-sm text-zinc-500">Last updated: October 2026.</p>
    </div>
  );
}
