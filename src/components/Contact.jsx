"use client";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="section-title text-center mb-16 scroll-animate">
          <h2>Let's Discuss Your Project</h2>
          <p className="mt-2 text-lg">
            I'm available for freelance work. Drop me a line!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact info */}
          <div className="lg:w-1/3 scroll-animate">
            <div className="flex items-start space-x-4 mb-8">
              <i className="fas fa-map-marker-alt text-purple-400 text-2xl mt-1"></i>
              <div>
                <h4 className="text-white font-bold">Address:</h4>
                <p>Gazipur, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <i className="fas fa-envelope text-purple-400 text-2xl mt-1"></i>
              <div>
                <h4 className="text-white font-bold">My Email:</h4>
                <p>contact@pervezhasan.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <i className="fas fa-phone text-purple-400 text-2xl mt-1"></i>
              <div>
                <h4 className="text-white font-bold">Call Me Now:</h4>
                <p>+880 1304622164</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-start items-center space-x-6 social-icon-list">
              <a
                href="https://www.youtube.com/@thinkwithpervez"
                target="_blank"
                className="text-2xl"
              >
                <i className="fab fa-youtube icon-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/thinkwithpervez/"
                target="_blank"
                className="text-2xl"
              >
                <i className="fab fa-linkedin-in icon-linkedin"></i>
              </a>
              <a
                href="https://github.com/pervez72"
                target="_blank"
                className="text-2xl"
              >
                <i className="fab fa-github icon-github"></i>
              </a>
              <a
                href="https://leetcode.com/u/pervez25/"
                target="_blank"
                title="My LeetCode Profile"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-7 h-7 icon-leetcode"
                />
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-facebook-f icon-facebook"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-x-twitter icon-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <form
            className="lg:w-2/3 space-y-6 scroll-animate delay-100"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted (form backend not yet connected)");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject*"
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message*"
              rows="5"
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="btn-primary text-white font-bold py-3 px-8 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
