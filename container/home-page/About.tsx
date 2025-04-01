"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle, ChevronRight, Sparkles, Palette, Code, Globe } from "lucide-react";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={22} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={22} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={22} /> },
];

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Maximize your brand's reach with our tailored social media strategies. From content creation to analytics-driven campaigns, we ensure your online presence stands out.",
    icon: <Sparkles size={24} />,
    color: "#FF4D4D",
    gradient: "from-red-500/20 to-red-600/5"
  },
  {
    id: 2,
    title: "Tech Solutions",
    description: "Empower your business with innovative tech solutions tailored to your needs. From automation to AI integration, we bring the future to your doorstep.",
    icon: <Palette size={24} />,
    color: "#4ECDC4",
    gradient: "from-teal-500/20 to-teal-600/5"
  },
  {
    id: 3,
    title: "Software Development",
    description: "Build powerful software applications with our expert development team. We specialize in scalable and secure solutions for businesses of all sizes.",
    icon: <Code size={24} />,
    color: "#FF4D4D",
    gradient: "from-red-500/20 to-red-600/5"
  },
  {
    id: 4,
    title: "Website Creation",
    description: "Create stunning websites that captivate audiences and drive engagement. Our designs are responsive, user-friendly, and optimized for success.",
    icon: <Globe size={24} />,
    color: "#4ECDC4",
    gradient: "from-teal-500/20 to-teal-600/5"
  }
];

export default function About() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 px-6 sm:px-8 relative overflow-hidden">
      {/* Creative geometric shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF4D4D]/20 to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#4ECDC4]/20 to-transparent blur-3xl" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Header Section */}
      <div className="text-center max-w-5xl mx-auto relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium tracking-wider text-[#4ECDC4] backdrop-blur-sm border border-white/10">
            CREATIVE SOLUTIONS
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-black leading-tight tracking-tighter mb-8"
        >
          Welcome to <span className="text-[#FF4D4D] relative">
            Revlient
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF4D4D]/30 rounded-full"></span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
        >
          We provide cutting-edge solutions in Social Media Marketing, tech innovations, software development, and website creation. Let us transform your ideas into impactful results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="/contact" 
            className="px-6 py-3 bg-[#FF4D4D] text-white font-medium rounded-full hover:bg-[#FF4D4D]/90 transition-all duration-300 flex items-center gap-2"
          >
            Start a Project <ChevronRight size={16} href="/contact" />
          </a>
          <a 
            href="/services" 
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            Explore Services 
          </a>
        </motion.div>
      </div>

      {/* Services Section */}
      <div id="services" className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Discover how we can elevate your brand with our comprehensive creative solutions</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF4D4D] to-[#4ECDC4] mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg group`}
            >
              <div className="mb-6 inline-block p-3 rounded-xl bg-black/30 border border-white/10" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: service.color }}>{service.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {service.description}
              </p>
             
            </motion.div>
          ))}
        </div>
      </div>

      {/* Creative Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-28 relative z-10 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Creativity is our DNA</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                At Revlient, we believe that exceptional design and strategic thinking are the foundations of successful brands. Our creative process combines innovation, research, and a deep understanding of your audience.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1 bg-white/10 rounded-full text-sm">Branding</span>
                <span className="px-4 py-1 bg-white/10 rounded-full text-sm">Digital</span>
                <span className="px-4 py-1 bg-white/10 rounded-full text-sm">Strategy</span>
                <span className="px-4 py-1 bg-white/10 rounded-full text-sm">Innovation</span>
              </div>
            </div>
           
              {/* This would be your showcase image */}
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
          </div>
        
      </motion.div>

      {/* Social Links Section */}
      <div className="pt-20 border-t border-white/10 mt-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
          <p className="text-gray-400">Follow our journey and reach out to start a conversation</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((item, index) => (
            <motion.a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-[#4ECDC4]">{item.icon}</div>
              <span className="font-medium">{item.title}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Explore More!</p>
        </div>
      </div>
    </section>
  );
}