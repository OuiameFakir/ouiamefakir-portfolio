export type ExperienceItem = {
  id: number;
  role: { en: string; fr: string };
  company: string;
  start: string; // YYYY-MM
  end: string | "present"; // YYYY-MM or present
  summary: { en: string; fr: string };
  tools: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: { en: "Web Developer", fr: "Développeuse Web" },
    company: "Billy Network Services",
    start: "2024-11",
    end: "present",
    summary: {
      en: "Web developer building and maintaining web features with Next.js, React, TypeScript, Material UI, and Python.",
      fr: "Développement et maintenance de fonctionnalités web avec Next.js, React, TypeScript, Material UI et Python.",
    },
    tools: ["Next.js", "React", "TypeScript", "Material UI", "Python"],
  },
  {
    id: 2,
    role: { en: "Freelance Frontend Developer", fr: "Développeuse Frontend Freelance" },
    company: "LinkedIn Services",
    start: "2024-06",
    end: "2024-08",
    summary: {
      en: "Built Quiz4Deutsch, an interactive quiz platform for learning German.",
      fr: "Développement de Quiz4Deutsch, une plateforme de quiz interactifs pour apprendre l’allemand.",
    },
    tools: ["Next.js", "React", "TypeScript", "Material UI"],
  },
  {
    id: 3,
    role: { en: "Freelance Frontend Developer", fr: "Développeuse Frontend Freelance" },
    company: "Trust4Finance",
    start: "2024-05",
    end: "2024-06",
    summary: {
      en: "Integrated a forecasting module in Amana Pilot and implemented interactive charts and data visualizations.",
      fr: "Intégration d’un module de prévision sur Amana Pilot et mise en place de graphiques interactifs et visualisations de données.",
    },
    tools: ["Next.js", "React", "Material UI", "Chart.js", "ESLint", "TypeScript"],
  },
  {
    id: 4,
    role: { en: "Web Development Intern", fr: "Stagiaire Développement Web" },
    company: "INWI",
    start: "2023-12",
    end: "2024-03",
    summary: {
      en: "Developed a B2B e‑shop platform and worked on displaying INWI agency locations on Google Maps.",
      fr: "Développement d’une plateforme e‑shop B2B et affichage des agences INWI sur Google Maps.",
    },
    tools: [
      "Next.js",
      "React",
      "Material UI",
      "i18next",
      "google-map-react",
      "Emotion",
      "Bootstrap",
      "TypeScript",
      "Sass",
      "Yup",
    ],
  },
];

