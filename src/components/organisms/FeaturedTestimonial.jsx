import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const FeaturedTestimonial = () => {
  const testimonial = {
    content: "Dr. Rahman's approach is both professional and deeply empathetic. His expertise in relationship coaching helped my partner and I navigate through challenging times and emerge stronger. The online sessions were convenient and effective. I highly recommend his services to anyone seeking meaningful psychological support.",
    author: "Sarah M.",
    profession: "Marketing Executive",
    rating: 5
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-surface-600">
              Real experiences from people who have transformed their lives
            </p>
          </div>

          <Card className="p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              <ApperIcon name="Quote" size={48} className="text-primary-500" />
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-surface-700 italic leading-relaxed mb-8">
              "{testimonial.content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {testimonial.author.split(" ").map(name => name[0]).join("")}
                </span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-surface-900 text-lg">{testimonial.author}</p>
                <p className="text-surface-600">{testimonial.profession}</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <ApperIcon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            
            <div className="flex justify-center">
              <a
                href="/testimonials"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Read More Testimonials
                <ApperIcon name="ArrowRight" size={16} className="ml-1" />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;