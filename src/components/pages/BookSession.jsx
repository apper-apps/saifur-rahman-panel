import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const BookSession = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    preferredTime: "",
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
      
      toast.success("Booking request submitted successfully! We'll contact you within 24 hours to confirm your session.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        sessionType: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to submit booking request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sessionTypes = [
    { value: "free-consultation", label: "Free Consultation Call (15 min)" },
    { value: "individual-therapy", label: "Individual Therapy Session" },
    { value: "relationship-coaching", label: "Relationship Coaching" },
    { value: "online-consultation", label: "Online Consultation" },
    { value: "performance-coaching", label: "High-Performance Mental Fitness" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  return (
    <>
      <Helmet>
        <title>Book a Session - Dr. Saifur Rahman Psychology</title>
        <meta name="description" content="Book your counselling session with Dr. Saifur Rahman. Choose from individual therapy, relationship coaching, or online consultations." />
        <meta name="keywords" content="Book Therapy Session, Schedule Counselling, Dr Saifur Rahman Booking, Psychology Appointment, Mental Health Session" />
        <meta property="og:title" content="Book a Session - Dr. Saifur Rahman Psychology" />
        <meta property="og:description" content="Book your counselling session with Dr. Saifur Rahman. Professional therapy and coaching services available." />
        <link rel="canonical" href="https://drsaifurrahman.com/book" />
      </Helmet>

      <div className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-6"
              >
                Book Your Session
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-surface-600 leading-relaxed"
              >
                Take the first step toward mental wellness and personal growth. 
                Schedule your consultation with Dr. Saifur Rahman today.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          label="First Name"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                        <FormField
                          label="Last Name"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

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
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="form-label" htmlFor="sessionType">
                          Session Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="sessionType"
                          name="sessionType"
                          value={formData.sessionType}
                          onChange={handleInputChange}
                          className="form-field"
                          required
                        >
                          <option value="">Select a session type</option>
                          {sessionTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          label="Preferred Date"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="space-y-1">
                          <label className="form-label" htmlFor="preferredTime">
                            Preferred Time <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="form-field"
                            required
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="form-label" htmlFor="message">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="form-field"
                          placeholder="Tell me briefly about what you'd like to discuss or any specific concerns..."
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            <ApperIcon name="Calendar" size={20} className="mr-2" />
                            Submit Booking Request
                          </>
                        )}
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Session Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
                      Session Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="Clock" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Duration</p>
                          <p className="text-sm text-surface-600">50 minutes (therapy) / 15 minutes (consultation)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="Video" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Format</p>
                          <p className="text-sm text-surface-600">Online via secure video platform</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <ApperIcon name="Calendar" size={20} className="text-primary-500 mt-1" />
                        <div>
                          <p className="font-medium text-surface-900">Response Time</p>
                          <p className="text-sm text-surface-600">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
                      Need Help?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <ApperIcon name="Mail" size={16} className="text-primary-500" />
                        <span className="text-sm text-surface-600">hello@drsaifurrahman.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ApperIcon name="MessageCircle" size={16} className="text-primary-500" />
                        <span className="text-sm text-surface-600">Live chat available</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-surface-200">
                      <p className="text-xs text-surface-500">
                        All sessions are conducted in accordance with HCPC and BPS ethical guidelines.
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50">
                    <div className="flex items-start space-x-3">
                      <ApperIcon name="Quote" size={20} className="text-primary-500 mt-1" />
                      <div>
                        <p className="text-sm text-surface-700 italic mb-3">
                          "Dr. Rahman's professional approach and genuine care made all the difference. 
                          The online sessions were convenient and just as effective as in-person meetings."
                        </p>
                        <p className="text-xs font-medium text-surface-900">- Sarah M.</p>
                      </div>
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

export default BookSession;