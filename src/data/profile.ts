// Central profile content. Edit here; the pages read from this.

export const INTRO =
  "Swiss-Rwandan master's student in AI at the Institute of Science Tokyo. I work on mechanistic interpretability of large language models from a linguistics-oriented perspective: grammatical generalization, syntactic structure, lexical frequency effects, and how linguistic knowledge is represented inside neural networks.";

export const BIO: string[] = [
  "I'm a master's student in AI at the Institute of Science Tokyo. My current research focuses on the mechanistic interpretability of large language models, especially from a linguistics-oriented angle: grammatical generalization, syntactic structure, lexical frequency effects, and how linguistic knowledge is represented internally in neural networks.",
  "Before Tokyo I studied at the University of Zurich, completing a Bachelor of Arts with a major in Computational Linguistics and a minor in Comparative Linguistics. My background sits at the intersection of natural language processing, machine learning, linguistics, and language-oriented AI research.",
];

// Shown in the "Now" block. Keep it short and current.
export const NOW = {
  updated: "May 2026",
  items: [
    "Researching grammatical generalization in LLMs: how lexical frequency shapes grammatical preferences, and whether models stay robust when minimal pairs use rare words. Manuscript under review for EMNLP 2026.",
    "Studying for the JLPT N1 (sitting it this summer).",
    "Reading The Three-Body Problem.",
  ],
};

export const RESEARCH_INTERESTS = [
  "mechanistic interpretability",
  "large language models",
  "linguistic representations in neural networks",
  "grammatical generalization",
  "syntax",
  "lexical frequency",
  "multilinguality",
  "sparse autoencoders",
  "representation analysis",
  "NLP evaluation",
];

export interface EducationEntry {
  org: string;
  degree: string;
  detail?: string;
  thesis?: string;
  period?: string; // TODO: add real years
}

export const EDUCATION: EducationEntry[] = [
  {
    org: "Institute of Science Tokyo",
    degree: "M.Sc. in Artificial Intelligence",
    detail:
      "Research focus: mechanistic interpretability of large language models, linguistic generalization, syntactic structure, and internal representations.",
    period: "2025–present (expected 2027)",
  },
  {
    org: "University of Zurich",
    degree: "Bachelor of Arts",
    detail: "Major in Computational Linguistics, minor in Comparative Linguistics.",
    thesis: "Two Heads or One? Mechanisms Driving Performance in Multi-Agent LLM Reasoning",
    period: "2022–2025",
  },
];

export const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "ML / Interpretability",
    items: [
      "mechanistic interpretability",
      "representation analysis",
      "sparse autoencoders",
      "logit-lens analysis",
      "LLM evaluation",
    ],
  },
  {
    label: "NLP / Speech",
    items: ["NLP", "speech processing", "ASR", "sentence embeddings", "Wav2Vec2"],
  },
  {
    label: "General",
    items: [
      "Python",
      "machine learning",
      "experimental design",
      "statistical analysis",
      "computational linguistics",
    ],
  },
];

export const LANGUAGES = {
  working: [
    { lang: "English", note: "" },
    { lang: "French", note: "" },
    { lang: "German", note: "" },
    { lang: "Japanese", note: "JLPT N1 — summer 2026" },
  ],
  learning: ["Spanish", "Mandarin", "Korean", "Kinyarwanda"],
};

export const HOBBIES = {
  paragraphs: [
    "Piano and music — I post some playing on my YouTube channel. Outside of that: language learning, creative coding, and the broader question of how intelligence shows up across humans, animals, biological systems, and machines. Also history.",
  ],
  currentlyReading: "The Three-Body Problem",
};
