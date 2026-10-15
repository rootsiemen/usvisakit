import type { Metadata } from "next";
import H1bForm from "./calculator";

export const metadata: Metadata = {
  title: "H-1B Lottery Calculator — Your Selection Odds (FY2027)",
  description:
    "Estimate your H-1B lottery selection chance under the new wage-weighted system. Based on official FY2027 USCIS data: 211,600 registrations, ~40% overall odds.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the new H-1B weighted lottery work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since FY2027, USCIS weights H-1B registrations by the DOL prevailing wage level: Level I gets 1 entry, Level II gets 2, Level III gets 3, and Level IV gets 4 entries in the selection pool. Higher wage offers get proportionally better odds.",
      },
    },
    {
      "@type": "Question",
      name: "What were the H-1B lottery odds for FY2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "USCIS received 211,600 eligible registrations for FY2027 and the overall selection rate was about 40%. DHS projected roughly 15% odds for wage Level I and about 61% for Level IV. 71.5% of selected beneficiaries held a US advanced degree.",
      },
    },
    {
      "@type": "Question",
      name: "When is the next H-1B registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The next H-1B cap registration window opens in March 2027 for the FY2028 cap. There was no second lottery for FY2027.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <H1bForm />
    </>
  );
}
