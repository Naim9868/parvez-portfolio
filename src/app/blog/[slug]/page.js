import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPost, getRelatedPosts } from '@/lib/blogData';
import BlogLayout from '@/components/BlogLayout';
import ShareButtons from '@/components/ShareButtons';
import { AnimatedHeader } from '@/components/AnimatedHeader';
import { AnimatedImage } from '@/components/AnimatedImage';
import { AnimatedContent } from '@/components/AnimatedContent';

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Pervez's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
    },
  };
}

const BlogPostPage = ({ params }) => {
  const post = getBlogPost(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, post?.category);

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout>
      <article className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <AnimatedHeader className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <img 
                  src={post.authorAvatar} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </AnimatedHeader>

          {/* Featured Image */}
          <AnimatedImage 
            src={post.image} 
            alt={post.title}
            className="mb-12 rounded-xl overflow-hidden shadow-lg"
          />

          {/* Article Content */}
          <AnimatedContent className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </AnimatedContent>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="border-t border-b border-gray-200 py-8 mb-12">
            <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <a
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                      <span>{relatedPost.readTime}</span>
                      <span>
                        {new Date(relatedPost.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogPostPage;