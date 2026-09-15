export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  role: string;
  approach: string;
  technologies: string[];
  outcome: string;
  lessonsLearned: string;
  link?: string;
  year: string;
  image?: string;
  secondaryImage?: string;
}

export const projects: Project[] = [
  {
    slug: "merryhap",
    title: "Merryhap.com",
    category: "Marine Procurement & Logistics",
    shortDescription: "Complete digital transformation for a marine procurement company, featuring a custom logistics management system.",
    overview: "A complete digital transformation for a marine procurement company, ensuring that complex logistics operations could be managed seamlessly through a responsive interface.",
    problem: "The client needed a professional web presence capable of handling complex marine logistics operations while ensuring mobile optimization for field workers.",
    role: "Lead Web Developer",
    approach: "Designed a responsive, offline-capable digital environment combining WordPress and Custom PHP, tailored specifically to the workflow of the maritime industry.",
    technologies: ["WordPress", "Custom PHP", "Responsive Design", "SEO"],
    outcome: "Delivered a purpose-driven web platform that elevated the business's operational efficiency and field-worker accessibility.",
    lessonsLearned: "Gained deep insights into maritime industry requirements and the critical importance of offline-capable design for mobile users in remote environments.",
    year: "Recent",
    image: "https://i.postimg.cc/8PW1Q35T/merryhap.png",
    secondaryImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "renewme",
    title: "RenewMe",
    category: "Productivity Application",
    shortDescription: "A web application that helps users track their subscriptions and sends WhatsApp notifications when renewals are due.",
    overview: "RenewMe is a productivity tool designed to solve the common issue of forgotten subscription renewals by integrating directly with users' daily communication tools.",
    problem: "Users were constantly losing money on forgotten subscription renewals and needed a proactive, automated notification system.",
    role: "Full-Stack Developer",
    approach: "Built a modern JavaScript stack integrating the WhatsApp Business API for direct, real-time alerts alongside a clean, accessible user interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "Node.js"],
    outcome: "Successfully launched an application that guarantees users never miss a subscription payment again.",
    lessonsLearned: "Mastered the integration of real-time messaging APIs within a React/Node.js architecture while maintaining strict UI performance.",
    year: "Recent",
    image: "https://i.postimg.cc/RZtjxYxw/renewme.png",
    secondaryImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "sqz-comms",
    title: "SQZcomms.com",
    category: "Renewable Energy & Tech",
    shortDescription: "Modern website for a tech company specializing in renewable energy solutions and surveillance technology.",
    overview: "Developed a robust digital presence for a forward-thinking technology and renewable energy company to assert their industry authority.",
    problem: "The challenge was to communicate complex technical services while maintaining professional credibility and high search engine visibility.",
    role: "Web Developer & SEO Consultant",
    approach: "Utilized foundational web technologies optimized for speed and accessibility, paired with a comprehensive technical SEO strategy.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    outcome: "Established a professional, highly visible platform that clearly articulates the company's complex technical service offerings.",
    lessonsLearned: "Learned how to present dense technical services accessibly while maintaining industry authority and user trust.",
    year: "Recent",
    image: "https://i.postimg.cc/zvrw7fbQ/sqzcomm.png",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "kalaku-vibes",
    title: "Kalaku Vibes",
    category: "Music & Talent Management",
    shortDescription: "Dynamic platform for music and talent management, featuring artist portfolios and event capabilities.",
    overview: "Designed an engaging, multimedia-rich platform dedicated to showcasing creative musical talent and managing industry events.",
    problem: "Needed to create a highly visual, media-heavy portfolio environment without sacrificing fast loading times or user experience.",
    role: "Web Developer",
    approach: "Implemented aggressive media optimization techniques alongside a tailored WordPress architecture and custom styling.",
    technologies: ["WordPress", "Custom CSS", "Media Optimization"],
    outcome: "Delivered a vibrant, fast-loading platform that serves as a central hub for artists and event management.",
    lessonsLearned: "Discovered the critical balance of visual appeal and performance, particularly for media-heavy creative industry websites.",
    year: "Recent",
    image: "https://i.postimg.cc/MHS05GM4/kalakuvibe.png",
    secondaryImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "hubone-consult",
    title: "HubOne-Consult.com",
    category: "Security Consulting",
    shortDescription: "Professional website for a security consulting firm, emphasizing trust, authority, and clear service communication.",
    overview: "Built a high-trust digital environment for a security consulting firm, ensuring the platform itself reflected the highest standards of digital security.",
    problem: "The firm needed to build immediate credibility with visitors while ensuring the website demonstrated strict security best practices.",
    role: "Web Developer",
    approach: "Focused on secure infrastructure and professional design language to communicate authority and reliability.",
    technologies: ["Secure WordPress", "SSL Implementation", "Professional Design"],
    outcome: "Launched a secure, authoritative platform that effectively communicates the firm's elite consulting services.",
    lessonsLearned: "Understood how website design choices and security implementations directly impact trust perception in security-sensitive industries.",
    year: "Recent",
    image: "https://i.postimg.cc/PqWBKCNy/Hubone.png",
    secondaryImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000",
  }
];
