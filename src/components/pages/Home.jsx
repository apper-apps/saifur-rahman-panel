import React from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/organisms/Hero";
import ServicesOverview from "@/components/organisms/ServicesOverview";
import FeaturedTestimonial from "@/components/organisms/FeaturedTestimonial";
import LatestResources from "@/components/organisms/LatestResources";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Saifur Rahman - Counselling Psychologist UK | Expert Therapy</title>
        <meta name="description" content="Dr. Saifur Rahman is a UK-trained Counselling Psychologist offering expert therapy, relationship coaching, and mental health services. Book your consultation today." />
        <meta name="keywords" content="Counselling Psychologist UK, Relationship Coaching, Mental Health Expert, Private Therapy UK, Dr Saifur Rahman, Psychologist for Professionals" />
        <meta property="og:title" content="Dr. Saifur Rahman - Expert Counselling Psychologist UK" />
        <meta property="og:description" content="UK-trained Counselling Psychologist offering expert therapy, relationship coaching, and mental health services for professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsaifurrahman.com" />
        <link rel="canonical" href="https://drsaifurrahman.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Dr. Saifur Rahman - Home",
            "description": "UK-trained Counselling Psychologist offering expert therapy, relationship coaching, and mental health services",
            "url": "https://drsaifurrahman.com",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Dr. Saifur Rahman Psychology Practice",
              "url": "https://drsaifurrahman.com"
            },
            "about": {
              "@type": "Person",
              "name": "Dr. Saifur Rahman",
              "jobTitle": "Counselling Psychologist",
              "description": "UK-trained Counselling Psychologist with international experience"
            }
          })}
        </script>
      </Helmet>
      
      <Hero />
      <ServicesOverview />
      <FeaturedTestimonial />
      <LatestResources />
    </>
  );
};

export default Home;