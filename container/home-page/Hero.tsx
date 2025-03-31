import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <main className="w-full h-screen overflow-hidden relative bg-black">
      <Spline
        scene="https://prod.spline.design/qspgYwptxDY4ANel/scene.splinecode"
        className="w-full h-full"
      />

      {/* Scroll Down Animation */}
      <motion.div
        className="absolute bottom-10 left-[46%] transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
      <div className="absolute bottom-5 right-5 w-[150px] h-10 bg-[#DBDBDB] border border-[#DBDBDB] rounded-xl flex items-center justify-center">
        {/* Logo Image */}
        <img
          src="/revnav.png" // Update this path to your logo's actual path
          alt="Logo"
          className="h-12" // Adjust height as needed
        />
      </div>
    </main>
  );
}
