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
    title:
      "FreqBLiMP: Frequency-Controlled Minimal Pairs Reveal Robustness and Fragility of LLMs Under Lexical Rarity",
    venue: "EMNLP 2026 (Main Conference)",
    date: "2026",
    status: "Accepted",
    authorsNote: "Tyrone White, Yuki Arase",
    description:
      "Introduces FreqBLiMP, a frequency-controlled extension of BLiMP that tests whether LLMs keep their grammatical preferences when minimal pairs use rare rather than common words. Models stay robust on morphosyntactic phenomena but degrade on phenomena that depend on specific lexical knowledge.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.07153" }],
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
