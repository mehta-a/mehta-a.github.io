import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://public-api.wordpress.com/wp/v2/sites/ankitamehta28.wordpress.com/posts?per_page=3'
        );
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to strip HTML tags from content
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <section id="blog" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Blog</h2>
        <p className="text-gray-600 text-center mb-12">
          Latest thoughts and articles from my blog
        </p>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {post.featured_media && (
                <img 
                  src={post.jetpack_featured_media_url} 
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {post.title.rendered}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="text-gray-600 mb-4 line-clamp-3">
                  {stripHtml(post.excerpt.rendered)}
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://ankitamehta28.wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit My Blog
            <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;