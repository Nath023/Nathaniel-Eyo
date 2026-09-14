export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "what-i-learned-building-my-first-digital-business",
    title: "What I Learned Building My First Digital Business",
    date: "September 14, 2026",
    category: "Lessons",
    readingTime: "2 min read",
    excerpt: "Lessons I learned while building and working on digital businesses.",
    content: `
# What I Learned Building My First Digital Business

Starting a digital business taught me...

![My first office setup](https://images.unsplash.com/photo-1497215728101-856f4ea42174)

## The first lesson

Your content goes here.

## The second lesson

More content goes here.

## Final thoughts

More content here.
    `,
  },
  {
    slug: "building-scalable-business-systems",
    title: "Building Scalable Business Systems for the Modern Web",
    date: "October 12, 2023",
    category: "Digital Strategy",
    readingTime: "5 min read",
    excerpt: "An exploration of how modern web technologies can be leveraged to create robust, automated business systems.",
    content: `
# Building Scalable Business Systems for the Modern Web

[Placeholder] This article discusses the intersection of web development and business strategy. It covers how choosing the right technology stack can streamline operations, automate repetitive tasks, and ultimately drive growth.

## The Need for Automation

[Placeholder] Many businesses struggle with manual processes that eat up valuable time. By building custom internal tools and integrating disparate systems, companies can achieve significant efficiency gains.

## Choosing the Right Tools

[Placeholder] A deep dive into why technologies like React, Node.js, and headless architectures are well-suited for building scalable business applications.

## Conclusion

[Placeholder] Investing in custom digital infrastructure is no longer just for tech giants. It's a strategic imperative for any modern business.
    `,
  },
  {
    slug: "the-future-of-digital-identity",
    title: "The Future of Digital Identity and Personal Branding",
    date: "August 28, 2023",
    category: "Thoughts",
    readingTime: "4 min read",
    excerpt: "Why owning your platform is more important than ever in the age of algorithmic feeds.",
    content: `
# The Future of Digital Identity

[Placeholder] In an era dominated by social media algorithms, having a personal website serves as the anchor for your digital identity.

## Owning Your Platform

[Placeholder] Relying solely on third-party platforms is risky. A personal website gives you complete control over your narrative, presentation, and audience connection.

## Design as Communication

[Placeholder] How minimalist, intentional design can communicate professionalism and expertise better than a generic template.
    `,
  },
  {
    slug: "seo-for-modern-web-apps",
    title: "SEO Strategies for Modern JavaScript Applications",
    date: "June 15, 2023",
    category: "Technical",
    readingTime: "6 min read",
    excerpt: "Practical tips for ensuring your React and SPA applications are easily discoverable by search engines.",
    content: `
# SEO Strategies for Modern Web Apps

[Placeholder] Single Page Applications (SPAs) often struggle with SEO out of the box. This article covers the essential techniques to ensure your web apps rank well.

## Server-Side Rendering (SSR) vs. Static Site Generation (SSG)

[Placeholder] An analysis of the trade-offs between SSR and SSG, and when to use which approach for optimal SEO performance.

## Metadata and Structured Data

[Placeholder] How to properly implement dynamic meta tags and structured data (JSON-LD) to provide search engines with rich context about your content.
    `,
  }
];
