import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";
import Spline from "@splinetool/react-spline";

const teamMembers = [
  {
    name: "DEVJITH ANOOP",
    role: "CEO",
    image: "/dev.jpeg",
    description: "Visionary leader driving innovation & strategy.",
  },
  {
    name: "ADITHYAN",
    role: "Co-Founder",
    image: "/adi.jpeg",
    description: "Strategist & problem solver shaping the future.",
  },
  {
    name: "RAGHAV KRISHNA",
    role: "Tech & Software Developer",
    image: "/rag.jpeg",
    description: "Building seamless digital experiences & products.",
  },
  {
    name: "JITHU FRANCIS",
    role: "Tech & Software Developer",
    image: "/jithu.png",
    description: "Building seamless digital experiences & products.",
  },
  {
    name: "DEEPSHIKHA", 
    role: "Web Experience Designer",
    image: "/nsg.jpeg",
    description: "Crafting smooth and intuitive user interfaces for seamless digital experiences.",
  },
];

export default function MeetOurTeam() {
  const [index, setIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      {/* Spline container - made responsive */}
      <div className="relative w-full h-screen">
        <Spline
          scene="https://prod.spline.design/qspgYwptxDY4ANel/scene.splinecode"
          className="w-full h-full"
        />
        
        {/* Full-width black footer with centered logo */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black z-10 flex justify-center items-center rounded-t-3xl">
          <img 
            src="/revlogo.png" 
            alt="RevLogo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        {/* Centered scroll indicator for all screen sizes */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div 
              className="absolute bottom-10 text-red-500 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-lg font-medium mb-2">Scroll Down</p>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <LampDemoTeam />
      
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-white text-black pt-24 px-4">
        {/* Quote - centered and responsive on all devices */}
        <h1 className="absolute top-10 md:top-20 italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-light text-gray-700 text-center w-full max-w-lg mx-auto px-4">
          &quot;Alone, we shine. Together, we set the world ablaze with greatness&quot;
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center text-center max-w-4xl w-full px-4 sm:px-6 md:px-8"
          >
            <motion.img
              src={teamMembers[index].image}
              alt={teamMembers[index].name}
              className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-lg border border-gray-300 mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex flex-col items-center max-w-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{teamMembers[index].name}</h2>
              <p className="text-base md:text-lg text-gray-600 mt-2 uppercase tracking-wide">
                {teamMembers[index].role}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
                {teamMembers[index].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons - responsive spacing and sizing */}
        <div className="absolute bottom-24 sm:bottom-20 md:bottom-16 w-full flex justify-center gap-2 px-4">
          <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto py-2">
            {teamMembers.map((member, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`px-2 py-1 text-xs sm:px-3 sm:py-1 rounded-lg font-semibold transition whitespace-nowrap ${
                  index === i ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>
        </div>

        {/* Arrow navigation - better placement for mobile */}
        <div className="absolute bottom-6 w-full flex justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-64">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>
      </section>
    </Curve>
  );
}