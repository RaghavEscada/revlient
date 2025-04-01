import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [revLevel, setRevLevel] = useState(0);
  
  // Optional: Add a timeout to ensure loader displays for at least 3 seconds
  // even if Spline loads quickly
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    // Simulate revving engine for preloader with more dynamic pattern
    const revInterval = setInterval(() => {
      setRevLevel(prev => {
        // Create a more dynamic revving pattern
        if (prev >= 100) return 20;
        if (prev >= 85) return prev + 15; // Quick rev at the end
        if (prev >= 70) return prev + 3;  // Slow down near the top
        if (prev >= 50) return prev + 5;  // Medium speed in middle range
        return prev + 8;                  // Faster at the beginning
      });
    }, 120);
    
    return () => {
      clearTimeout(timer);
      clearInterval(revInterval);
    };
  }, []);

  const handleSplineLoad = () => {
    setLoading(false);
  };

  return (
    <main className="w-full h-screen overflow-hidden relative bg-black">
      {/* Revving Engine Preloader */}
      {loading && (
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <motion.div 
            className="relative mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, revLevel > 80 ? 5 : revLevel > 50 ? 2 : 0, 0]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <motion.img
              src="/revlogo.png"
              alt="Rev Logo"
              className="h-24 w-24 object-contain" 
              animate={{ 
                filter: [
                  "drop-shadow(0 0 0px #ff0000)",
                  `drop-shadow(0 0 ${revLevel / 10}px #ff${Math.floor(Math.max(0, 100 - revLevel))}00)`
                ]
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Circular glow behind logo */}
            <motion.div 
              className="absolute top-1/2 left-1/2 rounded-full bg-red-600 -z-10"
              style={{ 
                transform: 'translate(-50%, -50%)',
              }}
              animate={{ 
                width: [80, 80 + (revLevel / 2)],
                height: [80, 80 + (revLevel / 2)],
                opacity: [0.1, 0.1 + (revLevel / 200)]
              }}
              transition={{ duration: 0.15 }}
            />
          </motion.div>

          {/* Tachometer */}
          <div className="relative w-48 h-48 mb-4">
            {/* Tachometer Background */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-800 bg-gray-900">
              {/* RPM Markers */}
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-4"
                  style={{ 
                    transform: `rotate(${-120 + (i * 24)}deg) translateY(-84px)`,
                    transformOrigin: 'center 126px',
                    backgroundColor: i > 7 ? '#ff3300' : i > 5 ? '#ffaa00' : '#aaaaaa'
                  }}
                />
              ))}
              
              {/* RPM Numbers */}
              {[0, 2, 4, 6, 8].map((i) => (
                <div 
                  key={i}
                  className="absolute text-xs font-bold"
                  style={{ 
                    transform: `rotate(${-120 + (i * 48)}deg) translateY(-74px) rotate(${-(-120 + (i * 48))}deg)`,
                    transformOrigin: 'center 106px',
                    color: i > 7 ? '#ff3300' : i > 5 ? '#ffaa00' : '#ffffff'
                  }}
                >
                  {i * 2000}
                </div>
              ))}
            </div>
            
            {/* Rev Needle */}
            <motion.div 
              className="absolute left-1/2 bottom-0 w-1 h-24 bg-red-600 origin-bottom"
              style={{ 
                transformOrigin: 'bottom center',
                left: 'calc(50% - 0.5px)'
              }}
              animate={{ 
                rotate: [-120, -120 + (revLevel * 2.4)],
                backgroundColor: revLevel > 80 ? '#ff0000' : '#ff3300',
                boxShadow: `0 0 ${revLevel / 15}px ${revLevel / 5}px rgba(255, ${Math.floor(Math.max(0, 100 - revLevel))}, 0, 0.5)`
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            />
            
            {/* Center Cap */}
            <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-600" 
                 style={{ transform: 'translate(-50%, -50%)' }} />
            
            {/* Digital RPM Display */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black border border-gray-700 px-4 py-1 rounded">
              <motion.span 
                className="font-mono text-xl font-bold"
                style={{ 
                  color: revLevel > 80 ? '#ff0000' : revLevel > 50 ? '#ff5500' : '#ff7700'
                }}
                animate={{ 
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {Math.floor(1000 + (revLevel * 70))} RPM
              </motion.span>
            </div>
          </div>
          
          {/* Loading Text */}
          <motion.p
            className="text-white text-lg font-mono"
            animate={{ 
              color: revLevel > 80 ? ['#ff0000', '#ffffff'] : ['#ffffff', '#ffffff'],
              textShadow: revLevel > 80 ? '0 0 8px #ff0000' : 'none'
            }}
            transition={{ duration: 0.2 }}
          >
            ENGINE STARTING{revLevel > 90 ? '!!!' : revLevel > 70 ? '!!' : revLevel > 50 ? '!' : '...'}
          </motion.p>
          
          {/* Progress Bar */}
          <div className="mt-6 w-64 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"
              style={{ 
                width: `${Math.min(loading ? 95 : 100, revLevel)}%`,
                backgroundSize: '200% 100%'
              }}
              animate={{ 
                width: loading ? [`${revLevel}%`, `${revLevel}%`] : "100%",
                backgroundPosition: ['0% 50%', '100% 50%']
              }}
              transition={{ 
                duration: 0.3,
                backgroundPosition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>
          
          {/* Vibration effect for the entire preloader when revving high */}
          {revLevel > 85 && (
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                x: [-1, 1, -1, 0, 1, -1],
              }}
              transition={{ 
                duration: 0.1, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          )}
        </motion.div>
      )}
      
      {/* Spline Scene */}
      <Spline
        scene="https://prod.spline.design/qspgYwptxDY4ANel/scene.splinecode"
        className="w-full h-full"
        onLoad={handleSplineLoad}
      />
      
      {/* Scroll Down Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-white text-lg">Scroll Down</p>
        <motion.div
          className="mt-2 flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M12 0C10.9 0 10 .9 10 2V10H8C6.9 10 6 10.9 6 12V22C6 23.1 6.9 24 8 24H16C17.1 24 18 23.1 18 22V12C18 10.9 17.1 10 16 10H14V2C14 .9 13.1 0 12 0ZM12 2H12.01L12 10H12V2ZM8 12H16V22H8V12Z" />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Bottom-right Rectangle with Logo */}
      <div className="absolute w-full bottom-0 right-0 h-30 rounded-3xl bg-black border border-[#DBDBDB] flex items-center justify-center">
        {/* Logo Image */}
        <img
          src="/revlogo.png"
          alt="Logo"
          className="h-[70px] w-[70px]"
        />
      </div>
    </main>
  );
}