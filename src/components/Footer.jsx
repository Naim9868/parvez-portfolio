"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        {/* Social icons */}
        <div className="flex justify-center items-center space-x-6 mb-4 social-icon-list">
          <a
            href="https://www.youtube.com/@thinkwithpervez"
            target="_blank"
            className="text-xl"
          >
            <i className="fab fa-youtube icon-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thinkwithpervez/"
            target="_blank"
            className="text-xl"
          >
            <i className="fab fa-linkedin-in icon-linkedin"></i>
          </a>
          <a
            href="https://github.com/pervez72"
            target="_blank"
            className="text-xl"
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
              className="w-6 h-6 icon-leetcode"
            />
          </a>
          <a href="#" className="text-xl">
            <i className="fab fa-facebook-f icon-facebook"></i>
          </a>
          <a href="#" className="text-xl">
            <i className="fab fa-x-twitter icon-twitter"></i>
          </a>
        </div>

        <p>&copy; 2025 Pervez Hasan. All Rights Reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://asuxai.com"
            className="text-purple-400 hover:underline"
          >
            AsuX AI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
