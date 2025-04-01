"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";

const serviceItems = [
  {
    id: 1,
    title: "SMMA",
    description: "Strategic social media marketing to elevate your brand's digital presence",
    imageSrc: "/rev.jpg",
    services: [
      { id: 101, title: "Content Strategy", href: "/services/content-strategy" },
      { id: 102, title: "Community Management", href: "/services/community-management" },
      { id: 103, title: "Paid Social Campaigns", href: "/services/paid-social" },
      { id: 104, title: "Social Analytics", href: "/services/social-analytics" }
    ]
  },
  {
    id: 2,
    title: "Branding",
    description: "Crafting distinctive brand identities that capture attention and create connections",
    imageSrc: "/images/branding-service.jpg",
    services: [
      { id: 201, title: "Brand Identity", href: "/services/brand-identity" },
      { id: 202, title: "Logo Design", href: "/services/logo-design" },
      { id: 203, title: "Brand Guidelines", href: "/services/brand-guidelines" },
      { id: 204, title: "Brand Strategy", href: "/services/brand-strategy" }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    description: "Beautiful, functional websites that deliver exceptional user experiences",
    imageSrc: "/images/web-dev-service.jpg",
    services: [
      { id: 301, title: "Website Design", href: "/services/website-design" },
      { id: 302, title: "Website Revamp", href: "/services/website-revamp" },
      { id: 303, title: "E-commerce", href: "/services/ecommerce" },
      { id: 304, title: "CMS Development", href: "/services/cms-development" }
    ]
  },
  {
    id: 4,
    title: "Tech Solutions",
    description: "Innovative technical solutions tailored to your unique business challenges",
    imageSrc: "/images/tech-service.jpg",
    services: [
      { id: 401, title: "System Integration", href: "/services/system-integration" },
      { id: 402, title: "Workflow Automation", href: "/services/workflow-automation" },
      { id: 403, title: "Custom Development", href: "/services/custom-development" },
      { id: 404, title: "Technical Consultation", href: "/services/technical-consultation" }
    ]
  }
];

export default function CreativeServicesGrid() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-400">
          Elevate your brand with expert solutions tailored to your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {serviceItems.map((item) => (
          <div key={item.id} className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
            <Image src={item.imageSrc} alt={item.title} width={600} height={400} className="w-full h-64 object-cover group-hover:opacity-75 transition" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-lg">{item.description}</p>
              <button
                onClick={() => toggleService(item.id)}
                className="mt-4 w-full py-2 px-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-300 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeService !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{serviceItems.find(item => item.id === activeService)?.title}</h2>
              <button
                onClick={() => setActiveService(null)}
                className="text-gray-400 hover:text-white"
              >
                ✖
              </button>
            </div>
            <p className="text-gray-300 mb-4">{serviceItems.find(item => item.id === activeService)?.description}</p>
            <div className="grid grid-cols-1 gap-4">
              {serviceItems.find(item => item.id === activeService)?.services.map(service => (
                <a key={service.id} href={service.href} className="block bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
