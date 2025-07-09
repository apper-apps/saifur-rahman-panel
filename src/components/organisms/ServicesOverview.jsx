import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions to address anxiety, depression, trauma, and personal growth.",
      icon: "User",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Relationship Coaching",
      description: "Expert guidance for couples and individuals to improve communication and strengthen relationships.",
      icon: "Heart",
      color: "bg-red-500"
    },
    {
      id: 3,
      title: "Online Consultations",
      description: "Convenient and secure virtual sessions accessible from anywhere in the world.",
      icon: "Video",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "High-Performance Mental Fitness",
      description: "Specialized coaching for professionals to optimize performance and manage stress effectively.",
      icon: "Zap",
      color: "bg-yellow-500"
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
            Professional Mental Health Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-surface-600 max-w-3xl mx-auto"
          >
            Comprehensive psychological support tailored to your unique needs and goals.
            Whether you're seeking therapy, coaching, or mental wellness support, 
            I'm here to help you thrive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full" hover>
                <div className={`h-16 w-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-surface-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/services">
            <Button size="lg">
              <ApperIcon name="ArrowRight" size={20} className="mr-2" />
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;