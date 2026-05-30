// Publications, talks, and posters. Newest first.

export interface Pub {
  title: string;
  venue: string;
  date: string;
  status?: string; // e.g. "Under review"
  authorsNote?: string;
  description: string;
  links?: { label: string; href: string }[];
}

export const PUBLICATIONS: Pub[] = [
  {
    // Title kept generic on purpose: this paper is under ARR/EMNLP double-blind
    // review, so the real title is withheld until acceptance to avoid de-anonymizing
    // it via search. Swap in the real title once it's accepted.
    title: "Lexical frequency and grammatical generalization in LLMs",
    venue: "Under review (ARR 2026 / EMNLP 2026)",
    date: "2026",
    status: "Under review",
    description:
      "Investigates how lexical frequency affects grammatical preferences in LLMs, specifically whether models stay robust when minimal pairs involve rare or uncommon lexical items.",
    links: [],
  },
  {
    title: "Large Language Models Are Robust to Low-Frequency Words in Grammatical Evaluation",
    venue: "言語処理学会 (NLP) 2026, poster",
    date: "Feb 2026",
    description:
      "A smaller, earlier version of the grammatical-generalization work, presented as a poster.",
    links: [
      {
        label: "Paper (PDF)",
        href: "https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/B3-18.pdf",
      },
    ],
  },
];
