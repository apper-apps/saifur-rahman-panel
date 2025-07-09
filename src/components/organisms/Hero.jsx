import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-6">
              Helping You Thrive –{" "}
              <span className="text-gradient">Expert Counselling & Coaching</span>{" "}
              by Dr. Saifur Rahman
            </h1>
            
            <p className="text-xl text-surface-600 mb-8 leading-relaxed">
              UK-trained Counselling Psychologist with international experience. 
              Specializing in individual therapy, relationship coaching, and mental health 
              support for professionals seeking to unlock their potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="Calendar" size={20} className="mr-2" />
                  Book a Free Intro Call
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="User" size={20} className="mr-2" />
                  Learn About Dr. Rahman
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-surface-200">
              <div className="flex items-center space-x-2">
                <ApperIcon name="Shield" size={20} className="text-green-600" />
                <span className="text-sm font-medium text-surface-700">HCPC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Award" size={20} className="text-blue-600" />
                <span className="text-sm font-medium text-surface-700">BPS Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="GraduationCap" size={20} className="text-purple-600" />
                <span className="text-sm font-medium text-surface-700">UK Doctorate</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Globe" size={20} className="text-primary-600" />
                <span className="text-sm font-medium text-surface-700">International Experience</span>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="h-32 w-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="UserCheck" size={64} className="text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                    Dr. Saifur Rahman
                  </h3>
                  <p className="text-surface-600">Counselling Psychologist</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-16 w-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;