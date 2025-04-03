import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { HeroParallaxDemo } from '@/data/data';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  
  // Fixed 5-second loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="w-full h-screen overflow-hidden relative bg-black">
     <HeroParallaxDemo/>
    </main>
  );
}