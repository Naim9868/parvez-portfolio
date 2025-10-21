import React from 'react';
import Link from 'next/link';

const BlogHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="bg-purple-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3 font-extrabold">
              P
            </span>
            Pervez
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/blog" className="text-purple-600 font-semibold">Blog</Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;