"use client";
import React from "react";

const Courses = () => {
  const courses = [
    {
      type: "MACHINE LEARNING",
      title: "Machine Learning A-Z",
      desc: "A comprehensive journey from beginner to advanced concepts.",
      link: "#",
      image: "https://placehold.co/600x400/111/8338ec?text=ML",
      delay: "",
    },
    {
      type: "DEEP LEARNING",
      title: "Deep Learning Mastery",
      desc: "Master neural networks, CNNs, RNNs, and Transformers.",
      link: "#",
      image: "https://placehold.co/600x400/111/8338ec?text=DL",
      delay: "delay-100",
    },
    {
      type: "DATA SCIENCE",
      title: "Data Science Bootcamp",
      desc: "A complete bootcamp covering all aspects of the data science lifecycle.",
      link: "#",
      image: "https://placehold.co/600x400/111/8338ec?text=Data",
      delay: "delay-200",
    },
  ];

  return (
    <section id="courses" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>My Courses</h2>
          <p className="mt-2 text-lg">
            Enroll in my courses to master AI and Data Science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, idx) => (
            <div
              key={idx}
              className={`bg-gray-800/50 rounded-2xl overflow-hidden group scroll-animate ${c.delay}`}
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className="text-purple-400 text-sm">{c.type}</p>
                <h3 className="text-xl font-bold text-white mt-2">
                  {c.title}
                </h3>
                <p className="mt-2 text-gray-400">{c.desc}</p>
                <a
                  href={c.link}
                  className="inline-block mt-4 font-semibold text-white group-hover:text-purple-400 transition-colors"
                >
                  Enroll Now <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
