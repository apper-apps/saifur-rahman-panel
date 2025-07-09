import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const subjects = [
    "General Inquiry",
    "Booking a Session",
    "Speaking Engagement",
    "Media Request",
    "Collaboration",
    "Other"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Dr. Saifur Rahman - Psychology Practice</title>
        <meta name="description" content="Get in touch with Dr. Saifur Rahman for counselling sessions, speaking engagements, or general inquiries about psychology services." />
        <meta name="keywords" content="Contact Dr Saifur Rahman, Psychology Contact, Counselling Inquiry, Therapy Contact, Mental Health Contact" />
        <meta property="og:title" content="Contact Dr. Saifur Rahman - Psychology Practice" />
        <meta property="og:description" content="Get in touch with Dr. Saifur Rahman for counselling sessions, speaking engagements, or general inquiries." />
        <link rel="canonical" href="https://drsaifurrahman.com/contact" />
      </Helmet>

      <div className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-6"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-surface-600 leading-relaxed max-w-3xl mx-auto"
              >
                Ready to start your journey toward mental wellness? Have questions about my services 
                or need professional consultation? I'm here to help and look forward to hearing from you.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="p-8">
                    <h2 className="text-2xl font-display font-semibold text-surface-900 mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <FormField
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="form-label" htmlFor="subject">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-field"
                          required
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="form-label" htmlFor="message">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="form-field"
                          placeholder="Please describe your inquiry or how I can help you..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full"
                        size="lg"
                      >
                        {loading ? (
                          <>
                            <ApperIcon name="Loader2" size={20} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <ApperIcon name="Send" size={20} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-display font-semibold text-surface-900 mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="Mail" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Email</p>
                          <p className="text-surface-600">hello@drsaifurrahman.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="MapPin" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Location</p>
                          <p className="text-surface-600">Online Consultations Available Worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="Clock" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Response Time</p>
                          <p className="text-surface-600">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-display font-semibold text-surface-900 mb-6">
                      Consultation Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-surface-700">Monday - Friday</span>
                        <span className="text-surface-900 font-medium">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-surface-700">Saturday</span>
                        <span className="text-surface-900 font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-surface-700">Sunday</span>
                        <span className="text-surface-900 font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-surface-200">
                      <p className="text-xs text-surface-500">
                        Times shown are GMT. Emergency support available 24/7.
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-display font-semibold text-surface-900 mb-6">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => window.location.href = '/book'}
                        className="w-full flex items-center space-x-3 p-3 text-left bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
                      >
                        <ApperIcon name="Calendar" size={20} className="text-primary-600" />
                        <span className="text-primary-700 font-medium">Book a Session</span>
                      </button>
                      <button
                        onClick={() => window.location.href = 'mailto:hello@drsaifurrahman.com'}
                        className="w-full flex items-center space-x-3 p-3 text-left bg-surface-50 hover:bg-surface-100 rounded-lg transition-colors"
                      >
                        <ApperIcon name="Mail" size={20} className="text-surface-600" />
                        <span className="text-surface-700 font-medium">Email Directly</span>
                      </button>
                      <button
                        onClick={() => window.location.href = '/resources'}
                        className="w-full flex items-center space-x-3 p-3 text-left bg-surface-50 hover:bg-surface-100 rounded-lg transition-colors"
                      >
                        <ApperIcon name="BookOpen" size={20} className="text-surface-600" />
                        <span className="text-surface-700 font-medium">Browse Resources</span>
                      </button>
                    </div>
                  </Card>
                </motion.div>

                {/* Professional Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50">
                    <div className="text-center">
                      <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ApperIcon name="Shield" size={32} className="text-white" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-surface-900 mb-2">
                        Professional & Confidential
                      </h3>
                      <p className="text-sm text-surface-600">
                        All communications are handled with the utmost confidentiality 
                        and in accordance with professional ethical guidelines.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;