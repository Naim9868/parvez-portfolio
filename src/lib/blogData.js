export const blogPosts = [
  {
    id: 1,
    slug: "complete-react-nextjs-guide",
    title: "Complete React & Next.js Guide for 2024",
    excerpt: "Learn how to build modern web applications with React and Next.js with this comprehensive guide.",
    content: `
      <h2>Introduction to React and Next.js</h2>
      <p>React and Next.js have revolutionized web development. In this guide, we'll explore the latest features and best practices.</p>
      
      <h3>Why Choose Next.js?</h3>
      <p>Next.js provides server-side rendering, static site generation, and API routes out of the box.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Server-Side Rendering (SSR)</li>
        <li>Static Site Generation (SSG)</li>
        <li>API Routes</li>
        <li>Image Optimization</li>
        <li>Built-in CSS Support</li>
      </ul>
    `,
    author: "Pervez Hasan",
    authorAvatar: "/api/placeholder/100/100",
    publishDate: "2024-10-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "JavaScript", "Web Development"],
    featured: true,
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    slug: "ai-in-web-development",
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build and interact with websites.",
    content: `
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's here and transforming web development.</p>
      
      <h3>AI Tools for Developers</h3>
      <p>From code completion to automated testing, AI tools are becoming essential in every developer's toolkit.</p>
    `,
    author: "Pervez Hasan",
    authorAvatar: "/api/placeholder/100/100",
    publishDate: "2024-10-10",
    readTime: "6 min read",
    category: "AI & Technology",
    tags: ["AI", "Web Development", "Technology", "Future"],
    featured: true,
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for 2024",
    excerpt: "Learn the most effective ways to use Tailwind CSS in your projects with these best practices.",
    content: `
      <h2>Mastering Tailwind CSS</h2>
      <p>Tailwind CSS has become the go-to utility-first CSS framework. Here's how to use it effectively.</p>
    `,
    author: "Pervez Hasan",
    authorAvatar: "/api/placeholder/100/100",
    publishDate: "2024-10-05",
    readTime: "5 min read",
    category: "CSS & Design",
    tags: ["Tailwind", "CSS", "Design", "Frontend"],
    featured: false,
    image: "/api/placeholder/800/400"
  }
];

export const categories = [
  "All",
  "Web Development",
  "AI & Technology",
  "CSS & Design",
  "JavaScript",
  "React",
  "Next.js"
];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug, category, limit = 3) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};