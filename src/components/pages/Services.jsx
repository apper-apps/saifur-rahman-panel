import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getServices } from "@/services/api/servicesService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setError(err.message || "Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) {
    return <Loading type="card" rows={4} className="section-padding" />;
  }

  if (error) {
    return (
      <Error 
        title="Unable to Load Services"
        message={error}
        onRetry={loadServices}
        className="section-padding"
      />
    );
  }

  if (services.length === 0) {
    return (
      <Empty 
        title="No Services Available"
        message="We're currently updating our services. Please check back soon."
        icon="Heart"
        className="section-padding"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Counselling & Therapy Services - Dr. Saifur Rahman</title>
        <meta name="description" content="Expert counselling and therapy services including individual therapy, relationship coaching, online consultations, and mental fitness coaching." />
        <meta name="keywords" content="Individual Therapy, Relationship Coaching, Online Consultations, Mental Health Expert, Private Therapy UK, Counselling Services" />
        <meta property="og:title" content="Counselling & Therapy Services - Dr. Saifur Rahman" />
        <meta property="og:description" content="Expert counselling and therapy services including individual therapy, relationship coaching, and online consultations." />
        <link rel="canonical" href="https://drsaifurrahman.com/services" />
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
              Professional Mental Health Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-surface-600 leading-relaxed mb-8"
            >
              Comprehensive psychological support tailored to your unique needs. 
              Whether you're seeking therapy, coaching, or specialized mental health services, 
              I'm here to help you navigate life's challenges and achieve your goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-surface-600">
                Common questions about my services and approach
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border border-surface-200"
              >
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  How do I know which service is right for me?
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  During our initial consultation, we'll discuss your specific needs, goals, and circumstances 
                  to determine the most appropriate approach. I'll help you understand the different options 
                  and recommend the service that best fits your situation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 border border-surface-200"
              >
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  Are online sessions as effective as in-person meetings?
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  Research shows that online therapy can be just as effective as in-person sessions for many 
                  concerns. Online sessions offer convenience, accessibility, and comfort while maintaining 
                  the same level of professional care and confidentiality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 border border-surface-200"
              >
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  What can I expect from the first session?
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  The first session focuses on understanding your background, current concerns, and goals. 
                  We'll discuss your history, explore what brings you to therapy, and begin to develop 
                  a collaborative treatment plan tailored to your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6 border border-surface-200"
              >
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  How long does therapy typically take?
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  The duration varies depending on individual needs and goals. Some people benefit from 
                  short-term focused work (8-12 sessions), while others prefer longer-term therapy. 
                  We'll regularly review progress and adjust the treatment plan as needed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 border border-surface-200"
              >
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  Is everything I share confidential?
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  Yes, confidentiality is fundamental to therapeutic work. Everything you share is kept 
                  strictly confidential, except in rare circumstances where there might be a risk of 
                  harm to yourself or others, as outlined in professional ethical guidelines.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;