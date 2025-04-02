import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LampContainer } from "@/components/ui/lamp";



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/team1.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/team3.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/team2.jpeg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/team4.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/team2.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;

};





export function TimelineDemo() {
  const data = [
    {
      title: "Client Requirements & Discovery",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Before crafting any strategy, we take the time to deeply understand your business, goals, and audience. Our team conducts thorough market research to align our approach with your brand identity.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/latest1.png" alt="Discovery Phase" width={250} height={250} layout="intrinsic" />
            
          </div>
        </div>
      ),
    },
    {
      title: "Strategy & Planning",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Our experts map out a strategic plan that includes content, branding, and tech solutions. Every decision is backed by data to ensure maximum impact.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/latest1.png" alt="Strategy Session" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
    {
      title: "Execution & Implementation",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-4">
            Our team launches campaigns, develops websites, and executes branding strategies with precision, ensuring a seamless experience.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              ✅ Content Strategy & Branding
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              ✅ Website & Tech Development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              ✅ Social Media & Community Management
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              ✅ Paid Marketing & Ad Campaigns
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              ✅ Performance Analytics & Optimization
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Image src="/latest1.png" alt="Execution Process" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-gray-900 p-8 rounded-xl">
      <Timeline data={data} />
    </div>
  );
}

export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex text-9xl items-center justify-center relative">
    <div className="h-[40rem] text-4xl flex items-center justify-center absolute">
      <TextHoverEffect text="REVLIENT." />
    </div>
    <TextHoverEffect text="REVLIENT." />
  </div>


  );
}



const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">

      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">

      </p>
    </WavyBackground>
  );
};


export function LampDemoCraft() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        WORKS<br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoServ() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        SERVICES <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoTeam() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TEAM <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}








