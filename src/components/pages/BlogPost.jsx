import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import { getBlogPostBySlug } from "@/services/api/blogService";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogPostBySlug(slug);
      setPost(data);
    } catch (err) {
      setError(err.message || "Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, [slug]);

  if (loading) {
    return <Loading type="default" rows={8} className="section-padding" />;
  }

  if (error) {
    return (
      <Error 
        title="Article Not Found"
        message={error}
        onRetry={loadPost}
        className="section-padding"
      />
    );
  }

  if (!post) {
    return (
      <Error 
        title="Article Not Found"
        message="The article you're looking for doesn't exist or has been removed."
        className="section-padding"
      />
    );
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://drsaifurrahman.com/resources/${slug}`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content="Dr. Saifur Rahman" />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://drsaifurrahman.com/resources/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": "Dr. Saifur Rahman",
              "jobTitle": "Counselling Psychologist"
            },
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "publisher": {
              "@type": "Organization",
              "name": "Dr. Saifur Rahman Psychology Practice"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://drsaifurrahman.com/resources/${slug}`
            },
            "articleSection": post.category,
            "keywords": post.tags.join(", ")
          })}
        </script>
      </Helmet>

      <article className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-surface-600 mb-8">
              <Link to="/resources" className="hover:text-primary-600 transition-colors">
                Resources
              </Link>
              <ApperIcon name="ChevronRight" size={16} />
              <span>{post.category}</span>
              <ApperIcon name="ChevronRight" size={16} />
              <span className="text-surface-900">{post.title}</span>
            </nav>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
                  {post.category}
                </span>
                <span className="text-surface-500">{formatDate(post.publishDate)}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-surface-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <ApperIcon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-surface-900">Dr. Saifur Rahman</p>
                    <p className="text-sm text-surface-600">Counselling Psychologist</p>
                  </div>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mb-8"
            >
              <div className="text-surface-700 leading-relaxed">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-surface-200 pt-8 mb-8"
            >
              <h3 className="text-lg font-display font-semibold text-surface-900 mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm text-surface-600 bg-surface-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-surface-200 pt-8 mb-8"
            >
              <h3 className="text-lg font-display font-semibold text-surface-900 mb-4">
                Share this article
              </h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-surface-700 bg-surface-100 rounded-lg hover:bg-surface-200 transition-colors">
                  <ApperIcon name="Twitter" size={16} />
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-surface-700 bg-surface-100 rounded-lg hover:bg-surface-200 transition-colors">
                  <ApperIcon name="Facebook" size={16} />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-surface-700 bg-surface-100 rounded-lg hover:bg-surface-200 transition-colors">
                  <ApperIcon name="Linkedin" size={16} />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-surface-700 bg-surface-100 rounded-lg hover:bg-surface-200 transition-colors">
                  <ApperIcon name="Copy" size={16} />
                  <span>Copy Link</span>
                </button>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-display font-semibold text-surface-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-surface-600 mb-6">
                If you found this article helpful and would like to explore how therapy 
                can support your mental health and wellbeing, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book" className="btn-primary">
                  <ApperIcon name="Calendar" size={16} className="mr-2" />
                  Book a Consultation
                </Link>
                <Link to="/resources" className="btn-secondary">
                  <ApperIcon name="BookOpen" size={16} className="mr-2" />
                  More Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;