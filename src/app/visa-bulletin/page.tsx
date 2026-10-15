import type { Metadata } from "next";
import BulletinChecker from "./calculator";
import { pageSeo, softwareLd, breadcrumbLd } from "../seo";

export const metadata: Metadata = pageSeo(
  "/visa-bulletin",
  "Visa Bulletin Oct 2026 — Priority Date Checker (EB-1/EB-2/EB-3)",
  "October 2026 visa bulletin final action dates for EB-1, EB-2, EB-3 (India, China, ROW). Enter your priority date to check if your category is current."
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a final action date in the visa bulletin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The final action date is the cutoff in the monthly visa bulletin. Your priority date must be earlier than the listed date for your category and country before USCIS can approve your green card.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'Current' mean in the visa bulletin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Current means immigrant visa numbers are available with no cutoff date — applicants in that category and country can move forward regardless of priority date.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareLd("Visa Bulletin Checker", "/visa-bulletin")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "" },
              { name: "Visa Bulletin Checker", path: "/visa-bulletin" },
            ])
          ),
        }}
      />
      <BulletinChecker />
    </>
  );
}
