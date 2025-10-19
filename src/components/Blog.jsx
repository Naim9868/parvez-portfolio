"use client";
import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Edge AI",
      date: "Oct 17, 2025",
      image: "https://placehold.co/600x400/111/FFFFFF?text=Blog+1",
      delay: "",
    },
    {
      title: "Writing a Technical Book: My Journey",
      date: "Oct 12, 2025",
      image: "https://placehold.co/600x400/111/FFFFFF?text=Blog+2",
      delay: "delay-100",
    },
    {
      title: "5 Tips for Better Tech YouTube Videos",
      date: "Oct 5, 2025",
      image: "https://placehold.co/600x400/111/FFFFFF?text=Blog+3",
      delay: "delay-200",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>Blog</h2>
          <p className="mt-2 text-lg">
            Check out my recent blog posts where I share insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <div
              key={idx}
              className={`bg-gray-800/50 rounded-2xl overflow-hidden group scroll-animate ${p.delay}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400">{p.date}</p>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">
                  {p.title}
                </h3>
                <a
                  href="#"
                  className="inline-block mt-4 font-semibold text-purple-400"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
