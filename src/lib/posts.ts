export interface Post {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  description: string; // meta description
    keywords: string[];
  toolHref: string;
  toolName: string;
  toolCta: string;
  contentHtml: string;
}

export const posts: Post[] = [  {
    slug: "h1b-lottery-wage-weighted-selection-2027",
    title: "H-1B Lottery 2027: Wage-Weighted Selection Explained",
    date: "2026-10-15",
    excerpt:
      "FY2027 replaced the random H-1B lottery with wage-weighted selection. Here's exactly how the 1-4 entry system works, what the real odds were, and what it means for your chances.",
    description:
      "How the FY2027 wage-weighted H-1B lottery works: wage levels I–IV get 1–4 entries, real selection odds (15%–61%), and what it means for applicants.",
    keywords: [
      "h1b lottery 2027",
      "h1b weighted selection",
      "h1b lottery odds",
      "h1b wage level lottery",
    ],
    toolHref: "/h1b-lottery-calculator",
    toolName: "H-1B Lottery Calculator",
    toolCta:
      "Want your personal odds? Enter your wage level in our free H-1B Lottery Calculator — it uses the official FY2027 data explained in this article.",
    contentHtml: `
<h2>What changed in the FY2027 H-1B lottery</h2>
<p>For more than a decade, the H-1B cap lottery was purely random: one registration meant one entry, and every applicant had roughly the same chance. That changed for fiscal year 2027. USCIS now runs a <strong>wage-weighted selection</strong> system, where the prevailing wage level of your job offer decides how many entries you get in the selection pool.</p>
<p>The change was designed to favor higher-skilled, higher-paid positions. In practice, it means your odds are no longer equal to everyone else's — they depend directly on what your employer is offering to pay you.</p>

<h2>How wage-weighted selection works</h2>
<p>Every H-1B registration is tied to a Department of Labor (DOL) prevailing wage level for the job's occupation and location. Wage levels run from I (entry-level) to IV (fully competent/senior). Under the new system:</p>
<ul>
<li><strong>Wage Level I</strong> — 1 entry in the selection pool</li>
<li><strong>Wage Level II</strong> — 2 entries in the selection pool</li>
<li><strong>Wage Level III</strong> — 3 entries in the selection pool</li>
<li><strong>Wage Level IV</strong> — 4 entries in the selection pool</li>
</ul>
<p>USCIS then draws from this weighted pool. A Level IV registration is literally four times as likely to be selected as a Level I registration, all else equal. The master's cap exemption still exists — beneficiaries with a US advanced degree continue to get the additional consideration they had before.</p>

<h2>The FY2027 numbers, in plain English</h2>
<p>For the FY2027 cap, USCIS received <strong>211,600 eligible registrations</strong> — and this time, there was <strong>no second lottery</strong>. Everyone selected came out of the single initial drawing. The overall selection rate was about 40%, but that average hides enormous differences by wage level.</p>
<p>Based on Department of Homeland Security projections, estimated selection odds were roughly:</p>
<ul>
<li><strong>Level I:</strong> ~15%</li>
<li><strong>Level II:</strong> ~30%</li>
<li><strong>Level III:</strong> ~45%</li>
<li><strong>Level IV:</strong> ~61%</li>
</ul>
<p>Read that again: a Level IV applicant was about <strong>four times</strong> more likely to be selected than a Level I applicant. Under the old random system, both would have had the same ~40% shot.</p>
<p>One more striking statistic: <strong>71.5% of selected beneficiaries held a US advanced degree</strong>. The combination of wage weighting and the advanced-degree advantage means the new lottery heavily rewards education and experience.</p>

<h2>Why the wage level matters more than ever</h2>
<p>Under the old system, applicants mostly cared about getting <em>an</em> offer. Now, the <em>level</em> of the offer is a first-order factor in whether you get selected at all. Two applicants with identical qualifications can have wildly different odds based purely on the wage their employer files.</p>
<p>This creates a few practical realities:</p>
<ul>
<li><strong>Salary negotiation is now lottery strategy.</strong> If your employer can legitimately support a Level II or III wage instead of Level I, your selection odds roughly double or triple. This is worth discussing openly with your employer or immigration counsel.</li>
<li><strong>The wage level must be defensible.</strong> Employers can't just declare Level IV to game the system — the wage level has to match the actual job requirements and the DOL prevailing wage data for the role and location. Inflating it invites compliance problems.</li>
<li><strong>Entry-level roles got much harder.</strong> Level I applicants at ~15% odds face a genuinely tough lottery. If you're a recent graduate on an entry-level offer, your backup plans (day-1 CPT, O-1, cap-exempt employers, other countries) deserve serious attention.</li>
</ul>

<h2>The advanced-degree advantage, quantified</h2>
<p>The 71.5% figure deserves emphasis: nearly three in four selected beneficiaries in FY2027 held a US master's degree or higher. That reflects both the wage-weighting effect (advanced-degree holders tend to command higher wage levels) and the separate master's cap allocation.</p>
<p>If you're deciding whether a US master's program is worth it, the lottery math is now part of the ROI calculation — not just the salary premium, but a materially better shot at the visa itself.</p>

<h2>Timeline: what happens next</h2>
<p>There was <strong>no second lottery for FY2027</strong> — USCIS filled the cap in the initial selection. The next registration window opens in <strong>March 2027 for the FY2028 cap</strong>, and it will run under the same wage-weighted rules.</p>
<p>If you're planning for FY2028, the window between now and March is your preparation period: lock in your job offer, confirm the wage level your employer will file, and make sure your degree evaluation and documentation are ready well before registration opens.</p>

<h2>Common misconceptions</h2>
<p><strong>"Higher wage always means selection."</strong> No — Level IV odds were ~61%, not 100%. Weighting improves odds; it doesn't guarantee anything.</p>
<p><strong>"Multiple registrations still help."</strong> The old abuse of filing multiple registrations for the same person is gone — USCIS moved to a beneficiary-centric system, and duplicate gaming gets registrations invalidated.</p>
<p><strong>"The wage level is whatever the employer says."</strong> It must align with DOL prevailing wage determinations for the specific occupation and work location. Your employer's immigration attorney handles this.</p>

<h2>What employers should know</h2>
<p>The weighted system changed employer strategy too. Companies that historically filed large numbers of Level I registrations are seeing much lower selection rates per filing — the expected return on each registration dollar has shifted toward higher-wage roles. Smart employers are now auditing their planned filings by wage level <em>before</em> registration, focusing budget on the positions most likely to be selected, and having frank conversations with candidates about realistic odds.</p>
<p>Employers should also document the wage-level determination carefully. With odds now tied to wage levels, the incentive to inflate them exists — and so does USCIS scrutiny. A clean, well-documented prevailing wage determination protects both the company and the beneficiary.</p>

<h2>Estimate your own odds</h2>
<p>The percentages above are estimates — your actual chance depends on your wage level and whether you hold a US advanced degree. Run your numbers through the tool below; it applies the FY2027 weighted-selection data to your situation in seconds.</p>
`,
  },
{
    slug: "october-2026-visa-bulletin-analysis",
    title: "October 2026 Visa Bulletin: Priority Date Movement Analysis",
    date: "2026-10-15",
    excerpt:
      "The October 2026 bulletin opens FY2027. We break down every employment-based final action date — EB-1 through EB-5 — and what the movement means for India, China, and Rest of World applicants.",
    description:
      "October 2026 visa bulletin analysis: EB-1/EB-2/EB-3 final action dates for India, China, and ROW, plus what the movement means for your priority date.",
    keywords: [
      "visa bulletin october 2026",
      "october 2026 visa bulletin predictions",
      "eb2 india priority date",
      "visa bulletin analysis",
    ],
    toolHref: "/visa-bulletin",
    toolName: "Visa Bulletin Checker",
    toolCta:
      "Is your date current? Enter your priority date in our free Visa Bulletin Checker to see instantly whether your category is current under the October 2026 bulletin.",
    contentHtml: `
<h2>Why the October bulletin matters</h2>
<p>The October visa bulletin is the first bulletin of the US government's fiscal year — FY2027 in this case — which means it sets the tone for the year. New annual visa numbers become available, and the State Department adjusts final action dates based on demand patterns, unused numbers from the prior year, and expected usage. For employment-based applicants, this is the single most important bulletin to read carefully.</p>
<p>Below is our full analysis of the October 2026 employment-based final action dates: what moved, what stalled, and what it means for your priority date.</p>

<h2>The October 2026 final action dates</h2>
<p>Here are the employment-based final action dates from the October 2026 bulletin. "Current" means visa numbers are available with no cutoff — applicants can proceed regardless of priority date.</p>
<table>
<thead><tr><th>Category</th><th>Rest of World</th><th>China</th><th>India</th></tr></thead>
<tbody>
<tr><td><strong>EB-1</strong></td><td>Current</td><td>Jul 1, 2023</td><td>Feb 1, 2023</td></tr>
<tr><td><strong>EB-2</strong></td><td>Jan 1, 2025</td><td>Oct 1, 2021</td><td>Nov 1, 2013</td></tr>
<tr><td><strong>EB-3</strong></td><td>May 15, 2024</td><td>Jan 8, 2022</td><td>Jan 1, 2014</td></tr>
</tbody>
</table>
<p>For the other categories: EB-4 stands at December 15, 2022 for all countries. EB-5 unreserved is Current for Rest of World, December 1, 2016 for China, and December 1, 2023 for India.</p>

<h2>EB-1: still the fastest lane — for most</h2>
<p>EB-1 remains Current for Rest of World, which keeps it the fastest employment-based path for applicants not born in India or China. But the retrogression for India (February 1, 2023) and China (July 1, 2023) is a reminder that even the "priority workers" category is no longer immune to backlogs for high-demand countries.</p>
<p>If you're India- or China-born and qualifying for EB-1, the practical takeaway: file as early as you're eligible and keep your priority date locked. The gap between ROW and India in EB-1 has become one of the most consequential differences in the entire system.</p>

<h2>EB-2 India: the longest wait in the system</h2>
<p>At November 1, 2013, EB-2 India remains the most backlogged employment category by a wide margin — a wait measured in well over a decade. This is the category where "priority date" stops being a formality and becomes a life-planning variable: job changes, children's ages, and even retirement planning all orbit around it.</p>
<p>What can EB-2 India applicants actually do? The honest options are limited but real: EB-1 eligibility (for those who qualify through extraordinary ability, outstanding research, or multinational executive routes), EB-5 investment if the capital is available, or a downgrade to EB-3 — which, at January 1, 2014, is only marginally better. None of these are easy, which is why so many applicants in this category are watching legislative reform efforts.</p>

<h2>EB-2 and EB-3: the downgrade question</h2>
<p>For India, EB-3 (January 1, 2014) sits only about two months ahead of EB-2 (November 1, 2013). That narrow gap is exactly why the "EB-2 to EB-3 downgrade" strategy gets re-evaluated every month: when EB-3 moves ahead of EB-2, downgrading lets applicants file adjustment of status sooner, getting work authorization and travel documents while waiting for the final green card.</p>
<p>The decision depends on the monthly movement, your employer's willingness to file a second I-140, and where the dates-for-filing chart sits relative to final action dates. It's a month-by-month calculation — which is why checking the current bulletin, not last quarter's, matters.</p>

<h2>Rest of World: healthy but not instant</h2>
<p>ROW applicants are in comparatively good shape: EB-1 is Current, EB-2 sits at January 1, 2025, and EB-3 at May 15, 2024. These are waits of months to a couple of years, not decades. But note that ROW EB-2 and EB-3 both have real cutoffs now — the era when every ROW employment case was effectively current is over, and demand is high enough that even ROW dates can retrogress if filings surge.</p>

<h2>How to read the bulletin like a practitioner</h2>
<p>Three things most applicants miss:</p>
<ul>
<li><strong>Final action dates vs. dates for filing.</strong> The bulletin publishes two charts. Final action dates control when your green card can actually be approved; dates for filing control when you can <em>submit</em> your adjustment application. USCIS announces each month which chart to use for filing — always check that announcement, not just the bulletin.</li>
<li><strong>"Current" is not permanent.</strong> Categories go from Current to backlogged and back. If your category is Current, treat it as a window: file everything you can while it's open.</li>
<li><strong>Your chargeability country is usually your birth country</strong> — not your citizenship. This surprises many applicants, and it's the single most common reason people misread their own situation.</li>
</ul>

<h2>What to do this month</h2>
<p>If your priority date is earlier than the final action date for your category and country, you're current: make sure your applications are filed and your medical exam and documents are ready. If you're close but not current, prepare everything now so you can file the moment your date becomes current — backlogs reward the prepared. And if you're years away, focus on what you can control: maintaining valid status, keeping your job and employer relationship stable, and reviewing whether an upgrade, downgrade, or different category could shorten your wait.</p>
<p>Dates change every month. Bookmark the official bulletin at travel.state.gov — and check your own date below.</p>
`,
  },
  {
    slug: "f1-visa-interview-questions-2026",
    title: "F1 Visa Interview Questions 2026: How to Answer Them",
    date: "2026-10-15",
    excerpt:
      "The F1 interview lasts 2–4 minutes and tests three things. Here are the real question groups officers ask in 2026 — and exactly how to answer each one without raising red flags.",
    description:
      "F1 visa interview questions 2026: the real question groups consular officers ask, model answers, and the mistakes that get applicants refused.",
    keywords: [
      "f1 visa interview questions",
      "f1 visa interview 2026",
      "student visa interview tips",
      "f214b refusal reasons",
    ],
    toolHref: "/f1-visa-interview",
    toolName: "F1 Interview Guide",
    toolCta:
      "Want the full preparation checklist? Our free F1 Interview Guide has every question group with sample questions plus 10 practical tips — open it alongside this article.",
    contentHtml: `
<h2>The 3 things the officer is testing</h2>
<p>Your F1 interview will last roughly two to four minutes. In that time, the consular officer is trying to answer three questions: Are you a genuine student? Can you afford this without unauthorized work? Will you return home when your studies end? Every question they ask maps to one of these three pillars. Once you see the structure, the interview stops feeling random — and your answers get sharper.</p>
<p>Below are the question groups officers actually use in 2026, with guidance on how to answer each one well.</p>

<h2>1. Why this university?</h2>
<p>Typical questions: "Why did you choose this university over others?" "How many universities did you apply to?" "What is special about your program?"</p>
<p>The officer is checking that you picked the school for academic reasons — not because an agent handed you an admit, and not as a convenient visa route. Give a <strong>specific, academic answer</strong>: name the program's strengths, a lab or research area, or particular faculty whose work connects to your interests. "It is a good university" is the weakest possible answer. "I'm joining the robotics lab under Professor X because my undergraduate thesis was on autonomous navigation" is a strong one.</p>
<p>Know your basics cold: the university's location, your program's duration, and roughly what makes it different from the other schools you applied to. If you only applied to one university, have a honest reason ready — officers notice single-application cases.</p>

<h2>2. Study plans and academic background</h2>
<p>Typical questions: "Why study in the US instead of your home country?" "What will you major in?" "What is your GRE/TOEFL/IELTS score?" "How does this connect to your previous education?"</p>
<p>This group tests whether you're a <strong>credible student with a coherent path</strong>. Your story should connect: previous degree → this program → specific academic goal. If you studied mechanical engineering and now want a master's in data science, explain the bridge (a project, an internship, a certification) — don't leave the officer to guess.</p>
<p>Have your test scores memorized. Hesitating on your own GRE score suggests you didn't take your academics seriously — or worse, that someone else handled your application.</p>

<h2>3. Finances and sponsorship</h2>
<p>Typical questions: "Who is sponsoring you?" "What does your sponsor do?" "What is their annual income?" "How will you fund your second year?"</p>
<p>This is where many interviews are won or lost. The officer needs to believe you can pay for <strong>tuition plus living costs for the full program</strong> without working illegally. Vague answers here are fatal.</p>
<p>Know your numbers precisely: annual tuition, estimated living expenses, your sponsor's occupation and annual income, loan amounts and the bank. If your sponsor's income doesn't obviously cover the costs, explain the full picture — savings, property, the loan — calmly and specifically. And never, ever mention part-time jobs or off-campus work as part of your funding plan. That single sentence has sunk countless interviews because it signals both financial desperation and intent to violate visa terms.</p>

<h2>4. Ties to your home country</h2>
<p>Typical questions: "What will you do after your degree?" "Do you have family back home?" "Why should I believe you'll return?"</p>
<p>F1 is a non-immigrant visa, so immigrant intent is the legal basis for refusal under section 214(b) — the most common refusal reason. You must show <strong>concrete reasons to return</strong>: family, a family business, property, or a job offer waiting for you.</p>
<p>Be specific and home-oriented: "I'll return to join our family manufacturing business as a production engineer — my father is holding that role for me" beats "I want to gain experience" every time. Avoid saying you plan to settle in the US, apply for a green card, or "see how it goes." Even if you're unsure about the future, the interview is not the place for ambiguity.</p>

<h2>5. Post-graduation plans</h2>
<p>Typical questions: "What are your career plans after graduation?" "Will you apply for OPT?"</p>
<p>OPT (Optional Practical Training) is legal and expected — saying you'll use OPT for a year of training is fine. What's not fine is framing your entire plan around staying in America permanently. Keep the long-term story anchored at home: the US degree is a tool you're bringing back, not a one-way ticket.</p>

<h2>The 7 mistakes that get people refused</h2>
<ul>
<li><strong>Memorized speeches.</strong> Officers interview hundreds of applicants; they can smell a scripted answer instantly. Prepare bullet points, not paragraphs.</li>
<li><strong>Long, rambling answers.</strong> Aim for 20–30 seconds per answer. Short, direct, confident.</li>
<li><strong>Not knowing your own numbers.</strong> Tuition, sponsor income, test scores — hesitation here destroys credibility.</li>
<li><strong>Mentioning unauthorized work</strong> as a funding plan, as discussed above.</li>
<li><strong>Inconsistent documents.</strong> If your DS-160 says one thing and your mouth says another, the interview is over.</li>
<li><strong>Arguing or getting defensive.</strong> If refused, stay polite. Arguing never reverses a decision and can poison a future application.</li>
<li><strong>Overdressing the confidence.</strong> Calm beats cocky. Smile, make eye contact, and treat it as a conversation, not an interrogation.</li>
</ul>

<h2>Documents to carry</h2>
<p>Carry originals plus one photocopy set: passport, I-20, DS-160 confirmation page, SEVIS fee receipt, admission letter, financial documents (bank statements, loan approval, sponsor income proof, property papers), and academic records. Organize them in a clear folder in the order you might need them — fumbling through a messy bag while the officer waits is a bad look.</p>

<h2>Final week preparation plan</h2>
<p>Seven days out, do a full mock interview out loud with a friend playing the officer — not in your head, out loud. Record yourself once and count your filler words. Three days out, re-verify every number and date in your application. The night before, lay out your documents and your outfit, and stop studying — a calm, rested applicant outperforms a frazzled, over-prepared one every time.</p>
<p>Nervous is normal. Dishonest is fatal. Walk in prepared, answer directly, and let your genuine plans do the work.</p>
`,
  },
  {
    slug: "how-to-check-us-visa-status-on-ceac",
    title: "How to Check US Visa Status on CEAC After Your Interview",
    date: "2026-10-26",
    excerpt:
      "Your interview is over and now CEAC is the only place with answers. Here is how to check your US visa status on CEAC step by step, what Issued, Administrative Processing and Refused really mean, and what to do next.",
    description:
      "How to check US visa status on CEAC: step-by-step NIV and IV checks, what Issued, Administrative Processing and Refused mean, and what to do next.",
    keywords: [
      "how to check US visa status on CEAC",
      "CEAC visa status check",
      "US visa status after interview",
      "administrative processing CEAC",
      "CEAC case status issued refused",
    ],
    toolHref: "/f1-visa-interview",
    toolName: "F1 Interview Guide",
    toolCta:
      "Still preparing for the interview itself? Our free F1 Interview Guide covers every question group consular officers ask — open it alongside this status guide.",
    contentHtml: `
<h2>What CEAC is — and what it is not</h2>
<p>If you have just left the consulate wondering how to check US visa status on CEAC, you are not alone. CEAC — the Consular Electronic Application Center — is the US Department of State's official portal where visa applicants track what happens to their case after the interview. It is the same system that held your DS-160 form, and after your interview it becomes the place that tells you whether your visa has been issued, is still under review, or was refused.</p>
<p>Two things about CEAC surprise first-time applicants. First, CEAC does not update instantly. Your interview may have gone perfectly, but the status often takes a few days to change, because the consulate still has to process the decision, print the visa, and hand the passport to the courier. Checking the same evening and seeing the old status does not mean something went wrong. Second, CEAC shows your visa decision — not your passport's physical location. Once your passport leaves the consulate, a separate courier tracker follows the delivery. Confusing these two trackers is the most common reason applicants panic for no reason, and we untangle them below.</p>
<p>This guide is about the public CEAC tracker only. It is not legal advice, and for a complicated case — a prior refusal, a long security check, or a revoked visa — an immigration attorney is the right person to ask, not a status page.</p>

<h2>How to check US visa status on CEAC: the step-by-step process</h2>
<p>For most readers, this is a nonimmigrant visa case — a tourist, student, or work visa such as B-1/B-2, F-1, or H-1B. On CEAC, these are labelled NIV (Nonimmigrant Visa). Here is the exact process:</p>
<ol>
<li><strong>Go to the official CEAC site.</strong> The only genuine address is ceac.state.gov. Type it yourself rather than clicking a link in an email or an ad — fake "visa status" sites exist, and they harvest passport numbers. If a site asks you to pay to check your status, it is not CEAC; the official tracker is free.</li>
<li><strong>Choose the nonimmigrant section.</strong> On the CEAC homepage, look for the nonimmigrant visa area and select "Check My Visa Application Status." Do not reopen your DS-160 here — the status check is a separate function.</li>
<li><strong>Select the location of your interview.</strong> Pick the exact US embassy or consulate where you were interviewed, from the dropdown. This matters: your case lives at that post, and choosing a different city can return no record even when your case is fine.</li>
<li><strong>Enter your Application ID or Case Number.</strong> For a nonimmigrant case, this is the DS-160 confirmation number from your confirmation page — it starts with "AA" followed by letters and numbers. Copy it character by character from the confirmation page, not from memory: the most common "no record found" error is a single mistyped character.</li>
<li><strong>Enter the other details CEAC asks for.</strong> Depending on the post, CEAC asks for your passport number and the first five letters of your surname. If your surname is shorter than five letters, enter what you have. Use the passport you applied with, not a renewed one.</li>
<li><strong>Complete the captcha and submit.</strong> CEAC shows a captcha image to prove you are human. If it is unreadable, refresh it rather than guessing repeatedly — too many failed attempts can temporarily lock you out.</li>
<li><strong>Read the status and the date.</strong> CEAC shows a status word and a "last updated" date. That date is important: if it has not changed since your interview, the consulate simply has not posted an update yet. Bookmark the page and check once a day, not once an hour — the status will not change faster because you refresh it.</li>
</ol>
<p>Before you start, have three things in front of you: your DS-160 confirmation page, the passport you applied with, and the name of the consulate. If you prepared for the interview using our <a href="/blog/f1-visa-interview-questions-2026">F1 interview guide</a>, this is the natural next step after that interview — the same case number you carried into the consulate is the one you track here.</p>

<h2>Checking an immigrant visa case (IV) on CEAC</h2>
<p>Immigrant visa cases — family-based or employment-based green card cases processed at a consulate — work slightly differently. On CEAC these are labelled IV (Immigrant Visa), and the key number is not a DS-160 confirmation but the immigrant visa case number issued by the National Visa Center (NVC). It typically looks like three letters followed by ten digits, for example a post code plus a year and a serial number, with no dashes or spaces.</p>
<p>The steps are otherwise the same: go to ceac.state.gov, choose the immigrant visa status check, select your interview location, and enter the case number exactly as the NVC wrote it. Immigrant cases also have a second stage that nonimmigrant cases do not: before the interview, CEAC shows whether your documents are complete and your case is "documentarily qualified." After the interview, it shows the decision status in the same way.</p>
<p>If your immigrant case is employment-based, your place in line is governed by the visa bulletin, not by CEAC — CEAC tells you what happened to your case, while the bulletin tells you whether a visa number is available at all. Our <a href="/blog/october-2026-visa-bulletin-analysis">October 2026 visa bulletin analysis</a> explains how to read final action dates for your category and country, and our <a href="/visa-bulletin">Visa Bulletin Checker</a> lets you test your own priority date against the current bulletin.</p>

<h2>What each CEAC status actually means</h2>
<p>CEAC uses a small set of status words, and each one means something specific. Here is the full list you are likely to see:</p>
<table>
<thead><tr><th>Status</th><th>What it means</th><th>What to do</th></tr></thead>
<tbody>
<tr><td><strong>Application Received</strong></td><td>Your case is in the system but no decision has been posted yet. This is normal right after the interview.</td><td>Wait. Check again in a few days.</td></tr>
<tr><td><strong>Administrative Processing</strong></td><td>Your case needs additional review before a decision. This is routine in many cases and is not a refusal.</td><td>Respond promptly to any document request; otherwise wait.</td></tr>
<tr><td><strong>Issued</strong></td><td>Your visa has been approved and printed. Your passport is on its way to you through the courier or pickup point.</td><td>Track passport delivery separately; check the visa foil when it arrives.</td></tr>
<tr><td><strong>Refused</strong></td><td>Your visa was not approved. The consulate should have explained the reason at the interview or in a written notice.</td><td>Read the refusal notice carefully before deciding on a new application.</td></tr>
</tbody>
</table>
<p>A note on wording: some older guides say CEAC shows "Approved." In practice, the status that means success on CEAC is "Issued" — it appears once the visa has actually been printed. If a guide or a forum post says "approved," it almost always means this same "Issued" status. Also, do not confuse "Refused" under administrative processing rules with a final refusal: a case can sit in Administrative Processing and later change to Issued, and a case marked Refused after a 221(g) notice may still be resolved once the requested documents are provided. The status word alone is not the whole story — the letter or notice you received at the interview is.</p>

<h2>Administrative Processing: the status that worries everyone</h2>
<p>Administrative Processing is the status applicants fear most, and it is also the most misunderstood. It means the consulate needs more time — for additional background checks, to verify a document, or to review something that came up in the interview. It is a standard part of the process for a large number of cases, and many cases in Administrative Processing end up issued.</p>
<p>How long it lasts varies enormously: some cases clear in days, others take weeks, and a minority take months. There is no published deadline, and the consulate will not give you one if you call. That uncertainty is the hard part, but it is not a signal about the outcome. What you can do while waiting is limited but real: first, respond immediately and completely to any request for documents — a 221(g) letter tells you exactly what is missing, and the clock does not move until you send it. Second, do not book non-refundable travel until the status changes to Issued. Third, do not submit a second visa application for the same trip while the first case is still in processing, unless the consulate tells you to — a duplicate application does not speed anything up and can complicate the pending case.</p>
<p>If months pass with no change and no document request outstanding, you can contact the consulate that interviewed you through its official inquiry channel and ask for an update. Keep that message short: your case number, interview date, and a one-line request for a status update. Repeated messages do not move a security check faster, but a single polite inquiry after a long silence is reasonable. For H-1B applicants, note the split of responsibility: your employer's petition is tracked through USCIS, while the consulate stage is tracked here on CEAC. Our <a href="/blog/h1b-lottery-wage-weighted-selection-2027">H-1B lottery guide</a> explains the petition side; CEAC covers what happens after that petition reaches the consulate.</p>

<h2>CEAC vs USCIS vs passport tracking: three different trackers</h2>
<p>Applicants often check the wrong tracker and conclude something is wrong. There are three, and they answer three different questions:</p>
<ul>
<li><strong>CEAC (ceac.state.gov)</strong> answers: what did the consulate decide about my visa? Use it after your interview, for both nonimmigrant and immigrant cases.</li>
<li><strong>USCIS Case Status</strong> answers: what happened to my petition inside the United States — for example an I-129 work petition, an I-130 family petition, or an I-485 adjustment of status? You check it with a USCIS receipt number, not a DS-160 number. If you are adjusting status inside the US and never went to a consulate, CEAC is not your tracker at all.</li>
<li><strong>Courier / passport tracking</strong> answers: where is my passport physically, now that the visa is issued? This tracker only starts moving once the consulate hands the passport over. It is run by the delivery service for your country, and in many countries you reach it from the same appointment account you used to schedule the interview.</li>
</ul>
<p>The practical rule: before the interview, your case lives in the appointment system; at the interview, the consulate decides; after the interview, CEAC reports the decision; after "Issued," the courier reports the delivery. If CEAC says "Issued" but the courier shows nothing yet, that is normal for a day or two — the handover takes time. If the courier shows movement but CEAC still says "Administrative Processing," trust CEAC for the decision and the courier only for the parcel.</p>

<h2>CEAC errors and fixes</h2>
<p>Most CEAC problems are data-entry problems, not case problems. Work through this list before assuming the worst:</p>
<ul>
<li><strong>"No record found" or "invalid case number."</strong> First, check you selected the right visa type: NIV for tourist, student, and work visas; IV for immigrant cases. Then re-enter the number from the document itself, watching for zeros that look like the letter O, and ones that look like the letter I. For nonimmigrant cases, make sure you are using the DS-160 confirmation number for the application you actually interviewed with — if you filled out a new DS-160 after scheduling, the old number will not match the interview.</li>
<li><strong>Wrong location.</strong> The dropdown must be the post where you interviewed. Applicants who interviewed in one city and check another city's post will get no record. If you are unsure, the city is printed on your appointment confirmation.</li>
<li><strong>Status has not changed since the interview.</strong> This is expected for the first few days. Consulates update CEAC in batches, and weekends and local holidays pause updates. Only start worrying if weeks pass with no change and no document request.</li>
<li><strong>Captcha keeps failing.</strong> Refresh the image, type slowly, and try a different browser if it keeps rejecting you. Avoid rapid repeated attempts, which can trigger a temporary block.</li>
<li><strong>The page will not load at all.</strong> CEAC occasionally goes down for maintenance, usually outside US business hours. Try again later before concluding anything about your case — and never enter your passport number on a lookalike site that appears when the real one is down.</li>
<li><strong>Someone else filled out your DS-160.</strong> If an agent used their own email or kept your confirmation page, get the Application ID from them now. Without it you cannot check your own case, and you should not need an agent's permission to see your own status.</li>
</ul>

<h2>After your status changes to Issued</h2>
<p>"Issued" means the visa is printed and your passport is on its way. Switch to the courier tracker from your appointment account and watch for the delivery or pickup notice. When the passport arrives, check the visa foil immediately, before you travel: your name and date of birth, the visa class (for example B1/B2 or F1), the number of entries, and the validity dates. Errors on the foil are rare but much easier to fix before you fly than at the airport.</p>
<p>Also check the annotation line, if there is one: for students it may note your school and SEVIS number, and for workers it may note the petition. If anything on the foil does not match your passport or your approval, contact the consulate that issued it right away — do not travel on a visa with an error and hope nobody notices. And keep your DS-160 confirmation page and interview documents even after the visa arrives; if you ever apply again, consistency with your previous application is exactly what the next officer will check.</p>

<h2>Frequently asked questions</h2>
<p><strong>How long after the interview does CEAC update?</strong> Usually within a few days, but there is no fixed schedule. Some cases update the next working day; others take longer, especially if the decision needs a supervisor's sign-off or a document check. A status that has not moved a day after the interview is normal, not a bad sign.</p>
<p><strong>Can I check my US visa status with just my passport number?</strong> No — CEAC needs your case number as well. For a nonimmigrant visa that is the DS-160 confirmation number starting with "AA"; for an immigrant visa it is the NVC case number. The passport number alone is not enough to find your case.</p>
<p><strong>Does Administrative Processing mean my visa will be refused?</strong> Not necessarily. It means additional review is needed, and many cases in Administrative Processing are eventually issued. It only becomes a refusal if the review ends in a refusal decision, which CEAC will then show as "Refused" together with the notice explaining why.</p>
<p><strong>Why does CEAC say "Issued" but I still do not have my passport?</strong> Because "Issued" means the visa was printed, not that the passport was delivered. Delivery is a separate step handled by the courier, and it typically takes a few more days. Track the parcel through the courier link in your appointment account.</p>
<p><strong>What should I do if CEAC shows "Refused"?</strong> First, find the reason: the officer usually explains it at the interview, and you may also receive a written notice citing the section of law, such as 214(b) for nonimmigrant intent or 221(g) for missing documents. A 221(g) refusal can often be resolved by providing what was asked for, while a 214(b) refusal means you need a materially stronger application next time — new evidence, changed circumstances, and a clear answer to the concern that was raised. Do not reapply immediately with the same application and hope for a different officer.</p>
`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
