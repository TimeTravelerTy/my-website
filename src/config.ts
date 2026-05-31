// Central site config. Edit these once; everything reads from here.

export const SITE = {
  name: "Tyrone White",
  // short handle / wordmark used in the header
  wordmark: "tyrone white",
  title: "Tyrone White",
  description:
    "Tyrone White: personal site, projects, and a blog on machine learning and interpretability.",
  url: "https://tyronewhite.dev",
  email: "whitetyrone14@gmail.com",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "CV", href: "/cv" },
  { label: "About", href: "/about" },
] as const;

export const SOCIALS = [
  { label: "Email", href: "mailto:whitetyrone14@gmail.com", handle: "whitetyrone14@gmail.com" },
  { label: "GitHub", href: "https://github.com/TimeTravelerTy", handle: "@TimeTravelerTy" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tyrone-white-b2690921a/",
    handle: "tyrone-white",
  },
  { label: "X", href: "https://x.com/TyroneWhite2", handle: "@TyroneWhite2" },
] as const;

export const YOUTUBE = "https://www.youtube.com/@tyronew5464";
