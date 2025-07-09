import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import MediaCard from "@/components/molecules/MediaCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { getMediaItems } from "@/services/api/mediaService";

const Media = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("all");

  const loadMediaItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMediaItems();
      setMediaItems(data);
    } catch (err) {
      setError(err.message || "Failed to load media items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMediaItems();
  }, []);

  const mediaTypes = [
    { value: "all", label: "All Media" },
    { value: "podcast", label: "Podcasts" },
    { value: "video", label: "Videos" },
    { value: "interview", label: "Interviews" },
    { value: "speaking", label: "Speaking Events" }
  ];

  const filteredItems = selectedType === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.type === selectedType);

  if (loading) {
    return <Loading type="card" rows={6} className="section-padding" />;
  }

  if (error) {
    return (
      <Error 
        title="Unable to Load Media"
        message={error}
        onRetry={loadMediaItems}
        className="section-padding"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Media & Speaking - Dr. Saifur Rahman Psychology</title>
        <meta name="description" content="Explore Dr. Saifur Rahman's media appearances, podcasts, interviews, and speaking engagements on mental health and psychology topics." />
        <meta name="keywords" content="Dr Saifur Rahman Media, Psychology Podcasts, Mental Health Speaking, Psychology Interviews, Speaking Engagements" />
        <meta property="og:title" content="Media & Speaking - Dr. Saifur Rahman Psychology" />
        <meta property="og:description" content="Explore media appearances, podcasts, interviews, and speaking engagements on mental health topics." />
        <link rel="canonical" href="https://drsaifurrahman.com/media" />
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
              Media & Speaking Engagements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-surface-600 leading-relaxed mb-8"
            >
              Sharing insights on mental health, psychology, and wellbeing through various media platforms. 
              Explore my appearances on podcasts, interviews, and speaking events where I discuss 
              evidence-based approaches to mental health.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {mediaTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type.value
                      ? "bg-primary-600 text-white"
                      : "bg-surface-100 text-surface-700 hover:bg-surface-200"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Media Grid */}
          {filteredItems.length === 0 ? (
            <Empty 
              title="No Media Found"
              message="No media items match your current filter. Try selecting a different category."
              icon="Play"
              className="py-16"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MediaCard media={item} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ApperIcon name="Mic" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Invite Dr. Rahman to Speak
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Looking for an expert speaker on mental health, psychology, or wellbeing? 
                I'm available for conferences, workshops, podcasts, and other speaking opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <ApperIcon name="MessageCircle" size={20} className="mr-2" />
                  Book Speaking Engagement
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:hello@drsaifurrahman.com'}
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <ApperIcon name="Mail" size={20} className="mr-2" />
                  Email Directly
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-surface-900 mb-4">
                Speaking Topics
              </h2>
              <p className="text-xl text-surface-600">
                Areas of expertise I frequently discuss in media and speaking engagements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mental Health in the Workplace",
                  description: "Strategies for maintaining mental wellness in professional environments",
                  icon: "Briefcase"
                },
                {
                  title: "Relationship Psychology",
                  description: "Understanding relationship dynamics and improving communication",
                  icon: "Heart"
                },
                {
                  title: "Anxiety & Stress Management",
                  description: "Evidence-based approaches to managing anxiety and stress",
                  icon: "Shield"
                },
                {
                  title: "Resilience Building",
                  description: "Developing psychological resilience and coping strategies",
                  icon: "Mountain"
                },
                {
                  title: "Performance Psychology",
                  description: "Optimizing mental performance for professionals and athletes",
                  icon: "Zap"
                },
                {
                  title: "Mental Health Stigma",
                  description: "Addressing stigma and promoting mental health awareness",
                  icon: "Users"
                }
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-surface-50 rounded-lg p-6 text-center"
                >
                  <div className="h-12 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={topic.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-surface-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-surface-600 text-sm">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;