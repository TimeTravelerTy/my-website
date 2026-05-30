// Projects shown on the home page and /projects. Featured ones appear on home.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  year?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Twenty Questions, Interpreted",
    description:
      "A mechanistic-interpretability study of whether an LLM truly commits to a secret in 20 Questions, using linear probes, activation patching, steering, and sparse autoencoders on Gemma-3.",
    tags: ["interpretability", "LLMs", "research"],
    links: [{ label: "Read the writeup", href: "/blog/summoned-by-the-question" }],
    year: "2026",
    featured: true,
  },
  {
    title: "Two Heads or One? Multi-Agent LLM Reasoning",
    description:
      "Bachelor's thesis (UZH). Tests whether gains in multi-agent LLM reasoning come from genuinely separate model instances or just role-based perspective diversity. It compares two DeepSeek-V3 instances against a single model alternating roles, across Debate / Cooperative / Teacher-Student strategies on AIME, GPQA Diamond, and LiveBench Reasoning. Model separation helped most in critique-oriented dialogue; cooperative settings didn't require true independence.",
    tags: ["LLMs", "multi-agent", "reasoning", "thesis"],
    links: [{ label: "Thesis (PDF)", href: "/papers/two-heads-or-one-thesis.pdf" }],
    year: "2025",
    featured: true,
  },
  {
    title: "Lexicon Meets Prosody",
    description:
      "Classifies overlapping speech in spontaneous multi-party conversation (AMI Meeting Corpus) as cooperative (e.g. backchannels) or competitive (e.g. interruptions). Combines Wav2Vec audio embeddings with lexical sentence embeddings from noisy ASR, trained via a weakly-supervised labeling pipeline (heuristics + LLM-assisted annotation). Adding lexical features improved performance, though competitive overlaps stayed hard.",
    tags: ["speech", "ASR", "classification"],
    links: [{ label: "Paper (PDF)", href: "/papers/lexicon-meets-prosody.pdf" }],
    year: "2025",
    featured: true,
  },
  {
    title: "Logistic Platonic Space",
    description:
      "A creative-coding passion project: an interactive simulation of 25,600 coupled chaotic agents based on the logistic map, exploring how locally simple systems produce globally coherent behavior. Inspired by Michael Levin's work on collective intelligence and biological agency, built to make the transition from local chaos to collective order visible and interactive.",
    tags: ["creative coding", "simulation", "complexity"],
    links: [{ label: "Live", href: "https://logisticplatonic.space/" }],
    year: "2024",
  },
];
