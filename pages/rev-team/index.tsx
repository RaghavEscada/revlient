import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "rag.jpeg",
    description: "Building seamless digital experiences & products.",
  },
  {
    name: "JITHU FRANCIS",
    role: "Tech & Software Developer",
    image: "jithu.png",
    description: "Building seamless digital experiences & products.",
  },
];

export default function MeetOurTeam() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center bg-white text-black pt-24">
      <h1 className="absolute top-20 text-5xl font-bold tracking-wide text-gray-800">Meet Our Team</h1>

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
            className="w-80 h-80 rounded-3xl object-cover shadow-lg border border-gray-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex flex-col items-center md:items-start max-w-md">
            <h2 className="text-4xl font-semibold">{teamMembers[index].name}</h2>
            <p className="text-lg text-gray-600 mt-2 uppercase tracking-wide">{teamMembers[index].role}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{teamMembers[index].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Name Track */}
      <div className="absolute bottom-10 flex gap-4">
        {teamMembers.map((member, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              index === i ? "bg-black text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {member.name}
          </button>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-10 p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
      >
        <ChevronLeft className="w-10 h-10 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-10 p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
      >
        <ChevronRight className="w-10 h-10 text-gray-700" />
      </button>
    </section>
  );
}
