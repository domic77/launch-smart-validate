export interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
}

export const posts: Post[] = [
  {
    id: 1,
    title: "How iValidate Helps You Spot a Bad Idea Fast",
    href: "/blogs/how-ivalidate-helps-you-spot-a-bad-idea-fast",
    description:
      "Learn how iValidate uses real-time data and trend signals to instantly flag ideas that are unlikely to succeed — saving you time, energy, and money.",
    date: "July 22, 2025",
    datetime: "2025-07-22",
    category: { title: "Validation", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "From Doubt to Data: Using iValidate to Get Real Market Feedback",
    href: "/blogs/from-doubt-to-data",
    description:
      "See how founders are using iValidate to back their ideas with actual user sentiment, keyword demand, and competitor signals before building.",
    date: "July 23, 2025",
    datetime: "2025-07-23",
    category: { title: "Startups", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "How I Found My First Validated Idea in 3 Minutes with iValidate",
    href: "/blogs/how-i-found-my-first-validated-idea",
    description:
      "A walkthrough of how a first-time founder used iValidate’s free tool to turn a hunch into a validated business opportunity, step by step.",
    date: "July 24, 2025",
    datetime: "2025-07-24",
    category: { title: "Free Tools", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readTime: "3 min read",
  },
];