import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getTestimonials } from "@/services/api/testimonialsService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (err) {
      setError(err.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  if (loading) {
    return <Loading type="card" rows={6} className="section-padding" />;
  }

  if (error) {
    return (
      <Error 
        title="Unable to Load Testimonials"
        message={error}
        onRetry={loadTestimonials}
        className="section-padding"
      />
    );
  }

  if (testimonials.length === 0) {
    return (
      <Empty 
        title="No Testimonials Available"
        message="We're currently collecting client testimonials. Please check back soon."
        icon="MessageCircle"
        className="section-padding"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Dr. Saifur Rahman Psychology</title>
        <meta name="description" content="Read testimonials from clients who have experienced positive outcomes through Dr. Saifur Rahman's counselling and therapy services." />
        <meta name="keywords" content="Client Testimonials, Therapy Reviews, Counselling Reviews, Dr Saifur Rahman Reviews, Psychology Testimonials" />
        <meta property="og:title" content="Client Testimonials - Dr. Saifur Rahman Psychology" />
        <meta property="og:description" content="Read testimonials from clients who have experienced positive outcomes through counselling and therapy services." />
        <link rel="canonical" href="https://drsaifurrahman.com/testimonials" />
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
              What Clients Say
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-surface-600 leading-relaxed mb-8"
            >
              Real stories from people who have transformed their lives through professional 
              psychological support. Their experiences reflect the positive impact of dedicated 
              therapy and counselling work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-surface-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-surface-900 mb-4">
                Trusted by Professionals
              </h2>
              <p className="text-xl text-surface-600">
                Confidential, ethical, and professional psychological support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">100%</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                  Confidential
                </h3>
                <p className="text-surface-600">
                  All sessions are completely confidential and follow strict ethical guidelines
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">6+</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                  Years Experience
                </h3>
                <p className="text-surface-600">
                  Extensive experience in NHS, private practice, and international settings
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">24/7</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                  Support Available
                </h3>
                <p className="text-surface-600">
                  Flexible scheduling and online consultations available worldwide
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;