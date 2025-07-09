import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import BlogCard from "@/components/molecules/BlogCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { getBlogPosts } from "@/services/api/blogService";

const Resources = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message || "Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const categories = ["All", "Mental Health", "Relationships", "Personal Growth", "Professional Development"];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <Loading type="card" rows={6} className="section-padding" />;
  }

  if (error) {
    return (
      <Error 
        title="Unable to Load Resources"
        message={error}
        onRetry={loadPosts}
        className="section-padding"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Mental Health Resources & Articles - Dr. Saifur Rahman</title>
        <meta name="description" content="Expert articles and resources on mental health, relationships, personal growth, and professional development from Dr. Saifur Rahman." />
        <meta name="keywords" content="Mental Health Articles, Psychology Resources, Relationship Advice, Personal Growth, Professional Development, Dr Saifur Rahman Blog" />
        <meta property="og:title" content="Mental Health Resources & Articles - Dr. Saifur Rahman" />
        <meta property="og:description" content="Expert articles and resources on mental health, relationships, and personal growth." />
        <link rel="canonical" href="https://drsaifurrahman.com/resources" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-6"
            >
              Mental Health Resources & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-surface-600 leading-relaxed mb-8"
            >
              Evidence-based articles, practical insights, and expert guidance on mental health, 
              relationships, and personal development. Explore resources to support your journey 
              toward wellbeing and growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <ApperIcon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" 
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white"
                        : "bg-surface-100 text-surface-700 hover:bg-surface-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredPosts.length === 0 ? (
            <Empty 
              title="No Articles Found"
              message="Try adjusting your search terms or category filter."
              icon="FileText"
              className="py-16"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-surface-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 lg:p-12"
            >
              <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ApperIcon name="Mail" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-surface-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-surface-600 mb-8">
                Subscribe to receive the latest articles and insights on mental health and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="btn-primary px-6 py-3 rounded-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-surface-500 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;