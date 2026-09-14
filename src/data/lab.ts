export interface Experiment {
  title: string;
  description: string;
  category: "Small Tool" | "Web Experiment" | "AI Experiment" | "Automation" | "Side Project" | "Open Source";
  link?: string;
  github?: string;
  year: string;
}

export const experiments: Experiment[] = [
  {
    title: "Minimal RSS Reader",
    description: "[Placeholder] A distraction-free RSS reader built with React and local storage, focusing purely on content consumption.",
    category: "Small Tool",
    github: "https://github.com",
    year: "2023"
  },
  {
    title: "AI-Powered SEO Analyzer",
    description: "[Placeholder] An experimental tool that uses AI to analyze webpage content and suggest SEO improvements based on current best practices.",
    category: "AI Experiment",
    year: "2023"
  },
  {
    title: "CSS Grid Generator",
    description: "[Placeholder] A visual tool to generate complex CSS grid layouts and export the corresponding code.",
    category: "Web Experiment",
    link: "https://example.com",
    github: "https://github.com",
    year: "2022"
  },
  {
    title: "Automated Social Scheduler",
    description: "[Placeholder] A script that automatically schedules and posts content across multiple platforms using their respective APIs.",
    category: "Automation",
    year: "2022"
  }
];
