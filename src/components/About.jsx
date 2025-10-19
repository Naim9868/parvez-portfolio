"use client";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side */}
          <div className="lg:w-1/2 scroll-animate">
            <div className="section-title text-center lg:text-left">
              <h2>What I do?</h2>
            </div>
            <p className="mt-4 text-lg">
              My approach combines creativity and technical expertise to deliver
              solutions that are both visually appealing and highly functional for
              users.
            </p>
            <a
              href="#contact"
              className="btn-primary text-white font-bold py-3 px-8 rounded-full mt-8 inline-block"
            >
              Say Hello!
            </a>
          </div>

          {/* Right side */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:mt-0">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 scroll-animate delay-100">
              <h3 className="text-xl font-bold text-white">AI Engineering</h3>
              <p className="mt-2">
                I design and deploy robust machine learning models, creating
                intelligent systems that solve complex problems.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 scroll-animate delay-200">
              <h3 className="text-xl font-bold text-white">Technical Writing</h3>
              <p className="mt-2">
                I craft clear and concise technical books and articles that make
                complex topics accessible and engaging.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 md:col-span-2 scroll-animate delay-300">
              <h3 className="text-xl font-bold text-white">Content Creation</h3>
              <p className="mt-2">
                I produce high-quality tech videos for YouTube, teaching
                programming, AI, and software development to a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
