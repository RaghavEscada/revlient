"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle, ChevronRight } from "lucide-react";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={22} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={22} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={22} /> },
];

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Maximize your brand's reach with our tailored social media strategies.",
    color: "#FF4D4D",
  },
  {
    id: 2,
    title: "Tech Solutions",
    description: "Empower your business with innovative tech solutions tailored to your needs.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Software Development",
    description: "Build powerful software applications with our expert development team.",
    color: "#FF4D4D",
  },
  {
    id: 4,
    title: "Website Creation",
    description: "Create stunning websites that captivate audiences and drive engagement.",
    color: "#4ECDC4",
  }
];

export default function About() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 sm:px-8 relative">
      {/* Minimal background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-red-500/10 to-transparent blur-xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-teal-500/10 to-transparent blur-xl" />
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="px-4 py-1 bg-white/5 rounded-full text-sm font-medium text-teal-400 border border-white/5">
            CREATIVE SOLUTIONS
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Welcome to <span className="text-red-500">Revlient</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          We provide cutting-edge solutions in Social Media Marketing, tech innovations, software development, and website creation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="/contact" 
            className="px-6 py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition-all duration-300 flex items-center gap-2"
          >
            Start a Project <ChevronRight size={16} />
          </a>
          <a 
            href="/services" 
            className="px-6 py-3 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/5"
          >
            Explore Services 
          </a>
        </motion.div>
      </div>

      {/* Services Section - Clean 2x2 Grid */}
      <div id="services" className="w-full max-w-5xl mx-auto relative z-10 mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Row 1 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white/5 rounded-xl border border-white/5 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: services[0].color }}>
              {services[0].title}
            </h3>
            <p className="text-gray-300">
              {services[0].description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-white/5 rounded-xl border border-white/5 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: services[1].color }}>
              {services[1].title}
            </h3>
            <p className="text-gray-300">
              {services[1].description}
            </p>
          </motion.div>
          
          {/* Row 2 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-white/5 rounded-xl border border-white/5 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: services[2].color }}>
              {services[2].title}
            </h3>
            <p className="text-gray-300">
              {services[2].description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 bg-white/5 rounded-xl border border-white/5 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: services[3].color }}>
              {services[3].title}
            </h3>
            <p className="text-gray-300">
              {services[3].description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Social Links Section - Simplified */}
      <div className="pt-12 border-t border-white/5 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-8 text-center"
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((item) => (
            <motion.a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-lg border border-white/5 text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="text-teal-400">{item.icon}</div>
              <span className="font-medium">{item.title}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Explore More!</p>
        </div>
      </div>
    </section>
  );
}