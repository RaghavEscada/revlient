import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";

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

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      <LampDemoTeam />
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-white text-black pt-24 px-4 md:px-0">
        <h1 className="absolute top-10 md:top-20 italic text-3xl md:text-5xl tracking-tighter font-light text-gray-700 text-center max-w-xs md:max-w-none">
          &quot;Alone, we shine. Together, we set the world ablaze with greatness&quot;
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl space-y-6 md:space-y-0 md:space-x-8"
          >
            <motion.img
              src={teamMembers[index].image}
              alt={teamMembers[index].name}
              className="w-60 h-60 md:w-80 md:h-80 rounded-3xl object-cover shadow-lg border border-gray-300"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex flex-col items-center md:items-start max-w-xs md:max-w-md">
              <h2 className="text-3xl md:text-4xl font-semibold">{teamMembers[index].name}</h2>
              <p className="text-base md:text-lg text-gray-600 mt-2 uppercase tracking-wide">
                {teamMembers[index].role}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
                {teamMembers[index].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 md:bottom-10 flex gap-2 md:gap-4 flex-wrap justify-center px-4">
          {teamMembers.map((member, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`px-3 py-1 text-xs md:px-4 md:py-2 rounded-lg font-semibold transition ${
                index === i ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {member.name}
            </button>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 p-3 md:p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
        >
          <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 p-3 md:p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
        >
          <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-gray-700" />
        </button>
      </section>
    </Curve>
  );
}