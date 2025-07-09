import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Legal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.hash.replace("#", "") || "privacy"
  );

  const tabs = [
    { id: "privacy", label: "Privacy Policy", icon: "Shield" },
    { id: "terms", label: "Terms of Service", icon: "FileText" },
    { id: "cookies", label: "Cookie Policy", icon: "Cookie" }
  ];

  const renderPrivacyPolicy = () => (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-display font-semibold text-surface-900 mb-6">
        Privacy Policy
      </h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            1. Information We Collect
          </h3>
          <p className="text-surface-600 leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc list-inside text-surface-600 space-y-2 ml-4">
            <li>Book a consultation or therapy session</li>
            <li>Contact us through our website forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in our services</li>
          </ul>
          <p className="text-surface-600 leading-relaxed mt-4">
            This may include your name, email address, phone number, and any information 
            you choose to share about your mental health concerns or goals.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            2. How We Use Your Information
          </h3>
          <p className="text-surface-600 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-surface-600 space-y-2 ml-4">
            <li>Provide psychological services and support</li>
            <li>Communicate with you about your sessions and our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations and professional standards</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            3. Information Sharing and Disclosure
          </h3>
          <p className="text-surface-600 leading-relaxed mb-4">
            We maintain strict confidentiality in accordance with professional ethical guidelines. 
            We do not sell, trade, or otherwise transfer your personal information to third parties except:
          </p>
          <ul className="list-disc list-inside text-surface-600 space-y-2 ml-4">
            <li>With your explicit consent</li>
            <li>When required by law or professional obligation</li>
            <li>In cases of immediate risk to safety</li>
            <li>To trusted service providers who assist in our operations</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            4. Data Security
          </h3>
          <p className="text-surface-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. This 
            includes secure servers, encryption, and regular security assessments.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            5. Your Rights
          </h3>
          <p className="text-surface-600 leading-relaxed mb-4">
            Under GDPR and UK data protection laws, you have the right to:
          </p>
          <ul className="list-disc list-inside text-surface-600 space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your information (subject to legal requirements)</li>
            <li>Restrict processing of your information</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            6. Contact Information
          </h3>
          <p className="text-surface-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us at hello@drsaifurrahman.com or through our contact form.
          </p>
        </section>
      </div>
    </div>
  );

  const renderTermsOfService = () => (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-display font-semibold text-surface-900 mb-6">
        Terms of Service
      </h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            1. Professional Services
          </h3>
          <p className="text-surface-600 leading-relaxed">
            Dr. Saifur Rahman provides professional psychological services including counselling, 
            therapy, and coaching. All services are provided in accordance with HCPC and BPS 
            ethical guidelines and professional standards.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            2. Client Responsibilities
          </h3>
          <p className="text-surface-600 leading-relaxed mb-4">
            As a client, you agree to:
          </p>
          <ul className="list-disc list-inside text-surface-600 space-y-2 ml-4">
            <li>Provide accurate and honest information</li>
            <li>Attend scheduled sessions or provide reasonable notice of cancellation</li>
            <li>Pay fees as agreed upon</li>
            <li>Respect the therapeutic process and professional boundaries</li>
            <li>Follow safety guidelines and recommendations</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            3. Confidentiality
          </h3>
          <p className="text-surface-600 leading-relaxed">
            All sessions and communications are confidential and will not be disclosed 
            without your written consent, except in specific circumstances required by 
            law or professional duty (such as risk of harm to self or others).
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            4. Cancellation and Refund Policy
          </h3>
          <p className="text-surface-600 leading-relaxed">
            Sessions cancelled with less than 24 hours notice may be charged in full. 
            Refunds for prepaid sessions will be considered on a case-by-case basis 
            and in accordance with professional guidelines.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            5. Limitation of Liability
          </h3>
          <p className="text-surface-600 leading-relaxed">
            While we strive to provide the highest quality care, therapy outcomes cannot 
            be guaranteed. Our liability is limited to the cost of services provided.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            6. Governing Law
          </h3>
          <p className="text-surface-600 leading-relaxed">
            These terms are governed by the laws of England and Wales. Any disputes 
            will be resolved through the appropriate professional regulatory bodies 
            or UK courts.
          </p>
        </section>
      </div>
    </div>
  );

  const renderCookiePolicy = () => (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-display font-semibold text-surface-900 mb-6">
        Cookie Policy
      </h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            1. What Are Cookies?
          </h3>
          <p className="text-surface-600 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit 
            our website. They help us provide you with a better experience by remembering 
            your preferences and analyzing how you use our site.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            2. Types of Cookies We Use
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-surface-900 mb-2">Essential Cookies</h4>
              <p className="text-surface-600">
                These cookies are necessary for the website to function properly and 
                cannot be disabled. They enable core functionality such as security and accessibility.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-surface-900 mb-2">Analytics Cookies</h4>
              <p className="text-surface-600">
                These cookies help us understand how visitors interact with our website 
                by collecting and reporting information anonymously.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-surface-900 mb-2">Preference Cookies</h4>
              <p className="text-surface-600">
                These cookies remember your preferences and settings to provide you with 
                a personalized experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            3. Managing Cookies
          </h3>
          <p className="text-surface-600 leading-relaxed">
            You can control and manage cookies through your browser settings. Please note 
            that disabling certain cookies may affect the functionality of our website.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            4. Third-Party Cookies
          </h3>
          <p className="text-surface-600 leading-relaxed">
            Our website may contain links to third-party services that may set their own 
            cookies. We are not responsible for these cookies and recommend reviewing 
            their privacy policies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-display font-semibold text-surface-900 mb-4">
            5. Updates to This Policy
          </h3>
          <p className="text-surface-600 leading-relaxed">
            We may update this Cookie Policy from time to time. Any changes will be 
            posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "privacy":
        return renderPrivacyPolicy();
      case "terms":
        return renderTermsOfService();
      case "cookies":
        return renderCookiePolicy();
      default:
        return renderPrivacyPolicy();
    }
  };

  return (
    <>
      <Helmet>
        <title>Legal - Privacy Policy & Terms - Dr. Saifur Rahman</title>
        <meta name="description" content="Read our privacy policy, terms of service, and cookie policy. Learn how we protect your data and provide professional psychological services." />
        <meta name="keywords" content="Privacy Policy, Terms of Service, Cookie Policy, Data Protection, GDPR, Professional Ethics" />
        <meta property="og:title" content="Legal - Privacy Policy & Terms - Dr. Saifur Rahman" />
        <meta property="og:description" content="Read our privacy policy, terms of service, and cookie policy for professional psychological services." />
        <link rel="canonical" href="https://drsaifurrahman.com/legal" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="section-padding bg-surface-50">
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
                Legal Information
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-surface-600 leading-relaxed"
              >
                Our commitment to privacy, professional ethics, and transparent service delivery.
              </motion.p>
            </div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary-600 text-white"
                        : "bg-white text-surface-700 hover:bg-surface-100"
                    }`}
                  >
                    <ApperIcon name={tab.icon} size={20} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 lg:p-12">
                {renderContent()}
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 text-center">
                <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-surface-900 mb-4">
                  Questions About Our Policies?
                </h3>
                <p className="text-surface-600 mb-6">
                  If you have any questions about our privacy policy, terms of service, 
                  or how we handle your data, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="btn-primary"
                  >
                    <ApperIcon name="Mail" size={20} className="mr-2" />
                    Contact Us
                  </button>
                  <button
                    onClick={() => window.location.href = 'mailto:hello@drsaifurrahman.com'}
                    className="btn-secondary"
                  >
                    <ApperIcon name="Send" size={20} className="mr-2" />
                    Email Directly
                  </button>
                </div>
              </Card>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-surface-500">
                Last updated: January 2024 | This document is reviewed regularly to ensure compliance with current regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;