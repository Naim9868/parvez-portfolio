"use client";
import React from "react";

const Youtube = () => {
  const videos = [
    {
      title: "Linear Regression Explained in 30 Seconds",
      desc: "A quick, visual explanation of Linear Regression for ML beginners.",
      link: "https://www.youtube.com/embed/fzRtOm4GZzU",
      delay: "",
    },
    {
      title: "Recursive Thinking #1 | Mastering the Basics",
      desc: "A short introduction to the concept of recursive thinking in programming.",
      link: "https://www.youtube.com/embed/15r1S4N0tic",
      delay: "delay-100",
    },
    {
      title: "Linear Regression Explained in 30 Seconds",
      desc: "A quick, visual explanation of Linear Regression for ML beginners.",
      link: "https://www.youtube.com/embed/fzRtOm4GZzU",
      delay: "delay-200",
    },
  ];

  return (
    <section id="youtube" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>Latest YouTube Videos</h2>
          <p className="mt-2 text-lg">
            Tutorials, insights, and tech deep dives from my channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, idx) => (
            <div
              key={idx}
              className={`bg-gray-800/50 rounded-2xl overflow-hidden group scroll-animate-left ${v.delay}`}
            >
              <div className="aspect-video">
                <iframe
                  src={v.link}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mt-2">
                  {v.title}
                </h3>
                <p className="mt-2 text-gray-400">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youtube;
