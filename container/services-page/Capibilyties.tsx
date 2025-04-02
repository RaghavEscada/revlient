"use client"


import { useState } from "react";
import { TimelineDemo } from "@/data/data";

const serviceItems = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Strategic social media marketing to elevate your brand's digital presence",
    imageSrc: "/rev.jpg",
    services: [
      { id: 101, title: "Content Strategy" },
      { id: 102, title: "Community Management" },
      { id: 103, title: "Paid Social Campaigns"},
      { id: 104, title: "Social Analytics" }
    ]
  },
  {
    id: 2,
    title: "Branding",
    description: "Crafting distinctive brand identities that capture attention and create connections",
    services: [
      { id: 201, title: "Brand Identity"},
      { id: 202, title: "Logo Design" },
      { id: 203, title: "Brand Guidelines"},
      { id: 204, title: "Brand Strategy" }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    description: "Beautiful, functional websites that deliver exceptional user experiences",
    services: [
      { id: 301, title: "Website Design" },
      { id: 302, title: "Website Revamp" },
      { id: 303, title: "E-commerce" },
      { id: 304, title: "CMS Development"}
    ]
  },
  {
    id: 4,
    title: "Tech Solutions",
    description: "Innovative technical solutions tailored to your unique business challenges",
    services: [
      { id: 401, title: "System Integration"},
      { id: 402, title: "Workflow Automation"},
      { id: 403, title: "Custom Development" },
      { id: 404, title: "Technical Consultation" }
    ]
  }
];

export default function CreativeServicesGrid() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold text-white">Our Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Elevate your brand with expert solutions tailored to your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16 mt-16">
        {serviceItems.map((item) => (
          <div key={item.id} className="relative bg-white text-black border border-black rounded-2xl p-12 shadow-lg space-y-8">
            <h3 className="text-3xl font-semibold text-black">{item.title}</h3>
            <p className="text-gray-700 text-lg">{item.description}</p>
            <button
              onClick={() => setActiveService(item.id)}
              className="w-full py-3 px-6 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {activeService !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50">
          <div className="bg-white text-black border border-black p-12 rounded-lg max-w-lg w-full space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold text-black">
                {serviceItems.find(item => item.id === activeService)?.title}
              </h2>
              <button onClick={() => setActiveService(null)} className="text-gray-700 hover:text-black text-2xl">
                ✖
              </button>
            </div>
            <p className="text-gray-700 text-lg">
              {serviceItems.find(item => item.id === activeService)?.description}
            </p>
            <div className="grid grid-cols-1 gap-6">
              {serviceItems.find(item => item.id === activeService)?.services.map(service => (
                <a key={service.id} href={service.href} className="block bg-white border border-black p-6 rounded-lg hover:bg-gray-200 transition text-center">
                  <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                </a>
               ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-16">
        <TimelineDemo />
      </div>
    </div>
  );
}
