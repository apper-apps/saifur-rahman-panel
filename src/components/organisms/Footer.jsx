import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Book Session", href: "/book" },
  ];

  const resources = [
    { name: "Resources", href: "/resources" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/legal#privacy" },
    { name: "Terms of Service", href: "/legal#terms" },
    { name: "Cookie Policy", href: "/legal#cookies" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Brain" size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xl font-display font-semibold">
                  Dr. Saifur Rahman
                </span>
                <p className="text-xs text-surface-300 -mt-1">Counselling Psychologist</p>
              </div>
            </Link>
            
            <p className="text-surface-300 mb-4 max-w-md">
              UK-trained Counselling Psychologist offering expert therapy, relationship coaching, 
              and mental health services. Helping you thrive through professional psychological support.
            </p>
            
            <div className="flex items-center space-x-2 text-surface-300">
              <ApperIcon name="Mail" size={16} />
              <span>hello@drsaifurrahman.com</span>
            </div>
            
            <div className="flex items-center space-x-2 text-surface-300 mt-2">
              <ApperIcon name="MapPin" size={16} />
              <span>Online Consultations Available Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-surface-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-surface-400 text-sm">
                © {currentYear} Dr. Saifur Rahman. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-surface-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Shield" size={16} className="text-green-400" />
                  <span className="text-surface-400 text-sm">HCPC Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Award" size={16} className="text-blue-400" />
                  <span className="text-surface-400 text-sm">BPS Member</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href="https://linkedin.com/in/saifurrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-400 hover:text-white transition-colors"
                >
                  <ApperIcon name="Linkedin" size={20} />
                </a>
                <a
                  href="mailto:hello@drsaifurrahman.com"
                  className="text-surface-400 hover:text-white transition-colors"
                >
                  <ApperIcon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;