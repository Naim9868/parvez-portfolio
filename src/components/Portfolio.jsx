"use client";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Object Detection",
      type: "AI PROJECT",
      desc: "An efficient model built with PyTorch and deployed on edge devices.",
      linkText: "Case Study",
      image: "https://placehold.co/600x400/111/8338ec?text=Project",
      delay: "",
    },
    {
      title: "The Art of Machine Learning",
      type: "BOOK",
      desc: "A comprehensive guide to building production-ready ML systems.",
      linkText: "View on Amazon",
      image: "https://placehold.co/600x400/111/8338ec?text=Book",
      delay: "delay-100",
    },
    {
      title: "Advanced ML Mastery",
      type: "COURSE",
      desc: "An online course covering deep learning theory to model deployment.",
      linkText: "Learn More",
      image: "https://placehold.co/600x400/111/8338ec?text=Course",
      delay: "delay-200",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>Portfolio</h2>
          <p className="mt-2 text-lg">
            Here's a selection of my recent work, showcasing my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className={`bg-gray-800/50 rounded-2xl overflow-hidden group scroll-animate ${p.delay}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className="text-purple-400 text-sm">{p.type}</p>
                <h3 className="text-xl font-bold text-white mt-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-400">{p.desc}</p>
                <a
                  href="#"
                  className="inline-block mt-4 font-semibold text-white group-hover:text-purple-400 transition-colors"
                >
                  {p.linkText} <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
