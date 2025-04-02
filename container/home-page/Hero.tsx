import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

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
      {/* Minimalist Full Page Loading Scene */}
      {loading && (
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Centered Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/revlogo.png"
              alt="Rev Logo"
              className="h-32 w-32 object-contain" 
            />
          </motion.div>
          
          {/* Minimal Loading Indicator */}
          <motion.div 
            className="mt-8 w-24 h-0.5 bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
      
      {/* Spline Scene */}
      <Spline
        scene="https://prod.spline.design/qspgYwptxDY4ANel/scene.splinecode"
        className="w-full h-full"
      />
      
      {/* Bottom Rectangle with Logo */}
      <div className="absolute w-full bottom-0 right-0 h-30 rounded-3xl bg-black border border-[#DBDBDB] flex items-center justify-center">
        <img
          src="/revlogo.png"
          alt="Logo"
          className="h-[70px] w-[70px]"
        />
      </div>
    </main>
  );
}