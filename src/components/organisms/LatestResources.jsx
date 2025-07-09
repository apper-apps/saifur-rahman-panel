import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlogCard from "@/components/molecules/BlogCard";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const LatestResources = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Understanding Anxiety in High-Performing Professionals",
      excerpt: "Explore how anxiety manifests in successful professionals and evidence-based strategies to manage it effectively while maintaining peak performance.",
      category: "Mental Health",
      tags: ["anxiety", "professionals", "performance"],
      publishDate: "2024-01-15",
      metaTitle: "Understanding Anxiety in High-Performing Professionals",
      metaDescription: "Learn about anxiety in successful professionals and effective management strategies."
    },
    {
      id: 2,
      title: "The Psychology of Healthy Relationships",
      excerpt: "Discover the key psychological principles that underpin healthy relationships and practical tools for improving communication and emotional connection.",
      category: "Relationships",
      tags: ["relationships", "communication", "emotional intelligence"],
      publishDate: "2024-01-10",
      metaTitle: "The Psychology of Healthy Relationships",
      metaDescription: "Discover key psychological principles for healthy relationships and better communication."
    },
    {
      id: 3,
      title: "Building Resilience: A Psychological Approach",
      excerpt: "Learn evidence-based techniques for developing psychological resilience and bouncing back from life's challenges with greater strength and wisdom.",
      category: "Personal Growth",
      tags: ["resilience", "mental health", "coping strategies"],
      publishDate: "2024-01-05",
      metaTitle: "Building Resilience: A Psychological Approach",
      metaDescription: "Learn evidence-based techniques for developing psychological resilience and mental strength."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold text-surface-900 mb-4"
          >
            Latest Insights & Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-surface-600 max-w-3xl mx-auto"
          >
            Evidence-based articles and insights on mental health, relationships, 
            and personal development to support your journey toward wellbeing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/resources">
            <Button size="lg">
              <ApperIcon name="BookOpen" size={20} className="mr-2" />
              Explore All Resources
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestResources;