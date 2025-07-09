import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Services from "@/components/pages/Services";
import Testimonials from "@/components/pages/Testimonials";
import Resources from "@/components/pages/Resources";
import BlogPost from "@/components/pages/BlogPost";
import Media from "@/components/pages/Media";
import BookSession from "@/components/pages/BookSession";
import Contact from "@/components/pages/Contact";
import Legal from "@/components/pages/Legal";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
          <Route path="/media" element={<Media />} />
          <Route path="/book" element={<BookSession />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;