import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  const credentials = [
    {
      title: "Doctorate in Counselling Psychology",
      institution: "University of Manchester",
      year: "2018",
      description: "Comprehensive training in psychological assessment, therapy, and research methods"
    },
    {
      title: "Master's in Clinical Psychology",
      institution: "King's College London",
      year: "2015",
      description: "Advanced study in clinical interventions and psychological disorders"
    },
    {
      title: "Bachelor's in Psychology",
      institution: "University of Cambridge",
      year: "2013",
      description: "Foundation in psychological theory, research methods, and human behavior"
    }
  ];

  const registrations = [
    {
      title: "HCPC Registration",
      description: "Health and Care Professions Council - Licensed Practitioner Psychologist",
      icon: "Shield"
    },
    {
      title: "BPS Membership",
      description: "British Psychological Society - Division of Counselling Psychology",
      icon: "Award"
    },
    {
      title: "BACP Accreditation",
      description: "British Association for Counselling and Psychotherapy",
      icon: "Certificate"
    }
  ];

  const experience = [
    {
      title: "NHS Clinical Psychologist",
      organization: "Manchester Mental Health Trust",
      duration: "2018 - 2022",
      description: "Provided psychological assessments and therapy for adults with complex mental health needs"
    },
    {
      title: "Private Practice Psychologist",
      organization: "London Psychology Clinic",
      duration: "2020 - Present",
      description: "Specialized in individual therapy and relationship coaching for professionals"
    },
    {
      title: "International Consultant",
      organization: "Various Organizations",
      duration: "2019 - Present",
      description: "Mental health training and consultancy across Europe and Asia"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Dr. Saifur Rahman - UK Counselling Psychologist</title>
        <meta name="description" content="Learn about Dr. Saifur Rahman's background, education, and experience as a UK-trained Counselling Psychologist with international expertise." />
        <meta name="keywords" content="Dr Saifur Rahman, Counselling Psychologist UK, Psychology Education, HCPC Registered, BPS Member, NHS Experience" />
        <meta property="og:title" content="About Dr. Saifur Rahman - UK Counselling Psychologist" />
        <meta property="og:description" content="Learn about Dr. Saifur Rahman's background, education, and experience as a UK-trained Counselling Psychologist." />
        <link rel="canonical" href="https://drsaifurrahman.com/about" />
      </Helmet>

      <div className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-display font-bold text-surface-900 mb-6"
            >
              About Dr. Saifur Rahman
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-surface-600 leading-relaxed"
            >
              A dedicated Counselling Psychologist with over 6 years of experience helping 
              individuals and couples navigate life's challenges and achieve meaningful growth.
            </motion.p>
          </div>

          {/* Professional Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="h-48 w-48 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name="UserCheck" size={96} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-surface-900 mb-2">
                  Dr. Saifur Rahman
                </h3>
                <p className="text-surface-600">Counselling Psychologist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Personal Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-surface-900 mb-8">
                My Journey & Philosophy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-surface-600 leading-relaxed mb-6">
                  My journey into psychology began with a deep fascination for understanding human behavior 
                  and the complex interplay between mind, emotion, and wellbeing. After completing my 
                  undergraduate studies at Cambridge, I pursued advanced training in clinical and 
                  counselling psychology, culminating in a doctorate from the University of Manchester.
                </p>
                <p className="text-surface-600 leading-relaxed mb-6">
                  What drives my work is the belief that everyone has the capacity for growth and healing. 
                  Through my years of practice in the NHS and private settings, I've witnessed 
                  remarkable transformations when people are provided with the right support, tools, 
                  and therapeutic environment.
                </p>
                <p className="text-surface-600 leading-relaxed mb-6">
                  My approach integrates evidence-based therapeutic modalities with a deep respect for 
                  each individual's unique story and cultural context. I believe in creating a safe, 
                  non-judgmental space where clients can explore their thoughts and feelings while 
                  developing practical strategies for positive change.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="section-padding bg-surface-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold text-surface-900 mb-12 text-center"
            >
              Education & Training
            </motion.h2>
            
            <div className="space-y-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6" hover>
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ApperIcon name="GraduationCap" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                          {credential.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">
                          {credential.institution} • {credential.year}
                        </p>
                        <p className="text-surface-600 leading-relaxed">
                          {credential.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Registrations */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold text-surface-900 mb-12 text-center"
            >
              Professional Registrations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {registrations.map((registration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full" hover>
                    <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ApperIcon name={registration.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-surface-900 mb-3">
                      {registration.title}
                    </h3>
                    <p className="text-surface-600 text-sm leading-relaxed">
                      {registration.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-surface-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold text-surface-900 mb-12 text-center"
            >
              Professional Experience
            </motion.h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6" hover>
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ApperIcon name="Briefcase" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-surface-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">
                          {exp.organization} • {exp.duration}
                        </p>
                        <p className="text-surface-600 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 opacity-90"
            >
              I'm here to support you on your path to mental wellness and personal growth. 
              Let's work together to help you thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/book'}
              >
                <ApperIcon name="Calendar" size={20} className="mr-2" />
                Book a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                <ApperIcon name="MessageCircle" size={20} className="mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;