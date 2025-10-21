"use client";
import React, { useEffect } from "react";
// import SocialIcons from "./SocialIcons";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';


const Hero = () => {
  // Animate counters when visible
  useEffect(() => {
    const animateCounter = (element, end, duration, suffix = "") => {
      let start = 0;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const container = document.querySelector("#hero-counters");
    const exp = document.getElementById("experience-count");
    const proj = document.getElementById("projects-count");
    const subs = document.getElementById("youtube-count");

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(exp, 5, 2000, "+");
            animateCounter(proj, 100, 2000, "+");
            animateCounter(subs, 50, 2000, "K+");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen hero-gradient-bg flex items-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row tems-center justify-between gap-12">
          {/* Left */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight scroll-animate">
              Hello, I'm <br /> Pervez Hasan
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 scroll-animate delay-100">
              AI Engineer, Author & Content Creator
            </p>
            <p className="mt-6 max-w-xl mx-auto font-semibold lg:mx-0 scroll-animate delay-200">
              I strive to build immersive and beautiful AI applications through
              carefully crafted code and user-centric design.
            </p>

            <a
              href="#contact"
              className="btn-primary text-white font-bold py-3 px-8 rounded-full mt-8 inline-block scroll-animate delay-300"
            >
              Say Hello!
            </a>

            {/* Counters */}
                <div
                  id="hero-counters"
                  className="mt-12 flex justify-center lg:justify-start space-x-12 scroll-animate delay-400"
                >
                  <div>
                    <p id="experience-count" className="text-4xl font-bold text-white">
                      0+
                    </p>
                    <p className="text-gray-400">Years Experience</p>
                  </div>
                  <div>
                    <p id="projects-count" className="text-4xl font-bold text-white">
                      0+
                    </p>
                    <p className="text-gray-400">Projects Completed</p>
                  </div>
                  <div>
                    <p id="youtube-count" className="text-4xl font-bold text-white">
                      0K+
                    </p>
                    <p className="text-gray-400">YouTube Subscribers</p>
                  </div>
                </div>

            {/* Social Icons */}
           <div className="mt-8 mb-4 flex justify-center lg:justify-start items-center space-x-6 scroll-animate delay-400">
                                 <a
                                   href="https://www.youtube.com/@thinkwithpervez"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-300"
                                 >
                                   <FaYoutube />
                                 </a>
                                 <a
                                   href="https://www.linkedin.com/in/thinkwithpervez/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration-300"
                                 >
                                   <FaLinkedinIn />
                                 </a>
                                 <a
                                   href="https://github.com/pervez72"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-2xl text-gray-200 hover:text-white transition-colors duration-300"
                                 >
                                   <FaGithub />
                                 </a>
                                 <a
                                   href="https://leetcode.com/u/pervez25/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   title="My LeetCode Profile"
                                   className="text-gray-400 hover:opacity-80 transition-opacity duration-300"
                                 >
                                   <img
                                     src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                     alt="LeetCode"
                                     className="w-7 h-7 filter invert"
                                   />
                                 </a>
                                 <a 
                                   href="#" 
                                   className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration-300"
                                 >
                                   <FaFacebookF />
                                 </a>
                                 <a 
                                   href="#" 
                                   className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                 >
                                   <FaTwitter />
                                 </a>
                               </div>
           </div>

          {/* Right */}
              <div className="lg:w-1/2 mt-10 lg:mt-0 scroll-animate delay-200">
                <div className="bg-gray-800 rounded-3xl p-4">
                  <img
                    src="images/pdemo.png"
                    alt="Pervez Hasan"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
        </div>
    </div>
    
    </section>
  );
};

export default Hero;
