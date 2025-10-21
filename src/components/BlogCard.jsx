import React from 'react';
import Link from 'next/link';

const BlogCard = ({ post, featured = false }) => {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={post.authorAvatar} 
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-700">{post.author}</span>
              </div>
              <time className="text-sm text-gray-500">
                {new Date(post.publishDate).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <img 
                src={post.authorAvatar} 
                alt={post.author}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-xs text-gray-700">{post.author}</span>
            </div>
            <time className="text-xs text-gray-500">
              {new Date(post.publishDate).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;