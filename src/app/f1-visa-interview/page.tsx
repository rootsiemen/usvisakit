import type { Metadata } from "next";
import { pageSeo, breadcrumbLd } from "../seo";

export const metadata: Metadata = pageSeo(
  "/f1-visa-interview",
  "F1 Visa Interview Guide — Questions & Tips (2026)",
  "Prepare for your F1 student visa interview: common question groups with sample questions and 10 practical tips on finances, ties to home, and confidence."
);

const groups: { title: string; why: string; questions: string[] }[] = [
  {
    title: "Why this university?",
    why: "The officer checks you chose the school for academics, not as a visa route.",
    questions: [
      "Why did you choose this university over others?",
      "How many universities did you apply to, and which admitted you?",
      "What is special about your program at this university?",
      "Who is your program advisor or which professors interest you?",
    ],
  },
  {
    title: "Study plans",
    why: "They want a genuine student with a clear academic path.",
    questions: [
      "Why do you want to study in the US instead of your home country?",
      "What will you study, and why this major?",
      "How does this degree connect to your previous education?",
      "What is your GRE/TOEFL/IELTS score?",
      "How long is your program?",
    ],
  },
  {
    title: "Finances & sponsor",
    why: "You must show you can pay tuition and living costs without illegal work.",
    questions: [
      "Who is sponsoring your education?",
      "What does your sponsor do for a living?",
      "What is your sponsor's annual income?",
      "How will you fund your second year?",
      "Do you have an education loan? From which bank?",
    ],
  },
  {
    title: "Ties to your home country",
    why: "F1 is a non-immigrant visa — you must show intent to return.",
    questions: [
      "Do you have family back home?",
      "What will you do after completing your degree?",
      "Do you own property or have a job offer waiting at home?",
      "Why should I believe you will return after your studies?",
    ],
  },
  {
    title: "Post-graduation plans",
    why: "Vague 'I'll see' answers raise red flags — be specific and home-oriented.",
    questions: [
      "What are your career plans after graduation?",
      "Will you apply for OPT?",
      "How will this US degree help your career back home?",
      "Do you plan to settle in the US permanently?",
    ],
  },
];

const tips = [
  "Answer in 20–30 seconds per question — short, direct, confident. Long stories sound rehearsed or evasive.",
  "Know your numbers cold: tuition per year, living costs, sponsor income, loan amount, test scores.",
  "Carry originals plus one photocopy set: I-20, passport, DS-160 confirmation, SEVIS fee receipt, financial documents, admission letter.",
  "Dress neatly — formals or smart casual. First impressions form in seconds.",
  "Speak in English throughout, even if the officer switches to your language. It demonstrates you can handle US coursework.",
  "Never mention part-time jobs or working off-campus as a funding plan — it suggests immigrant intent and unauthorized work.",
  "If you don't know an answer, say so honestly. Guessing or bluffing is far worse.",
  "Show ties, don't just claim them: family business, property papers, a return job offer — concrete beats promises.",
  "Practice out loud with a friend, not just in your head. Record yourself once and fix filler words.",
  "Arrive early, stay calm, make eye contact, and smile. Nervous is normal — dishonest is fatal.",
];

export default function F1Guide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "" },
              { name: "F1 Visa Interview Guide", path: "/f1-visa-interview" },
            ])
          ),
        }}
      />
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        F1 Visa Interview Guide
      </h1>
      <p className="mt-3 text-zinc-600">
        The F1 interview usually lasts 2–4 minutes. The officer is testing three
        things: you are a genuine student, you can afford it, and you will
        return home. Prepare around those three pillars.
      </p>

      {groups.map((g) => (
        <div key={g.title} className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-bold">{g.title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{g.why}</p>
          <ul className="mt-3 space-y-2">
            {g.questions.map((q) => (
              <li key={q} className="text-sm text-zinc-700 bg-zinc-50 rounded-lg px-4 py-2.5">
                “{q}”
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">
        <h2 className="text-lg font-bold text-blue-900">10 practical tips</h2>
        <ol className="mt-3 space-y-2.5 list-decimal pl-5 text-sm text-zinc-700">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </div>

      <p className="mt-6 text-xs text-zinc-500">
        General preparation guidance based on commonly reported interview
        experiences — not legal advice. Requirements vary by consulate.
      </p>
    </div>
    </>
  );
}
