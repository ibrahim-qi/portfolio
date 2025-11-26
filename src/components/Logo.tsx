"use client";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-10 h-10 group"
      aria-label="Home"
    >
      {/* Hexagon Background */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon 
          points="50 1 95 25 95 75 50 99 5 75 5 25" 
          fill="rgba(100, 255, 218, 0.1)"
          stroke="var(--green)"
          strokeWidth="2"
          className="transition-all duration-200 group-hover:fill-[rgba(100,255,218,0.15)]"
        />
      </svg>
      
      {/* Text */}
      <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm text-[var(--green)]">
        IQ
      </span>
    </motion.a>
  );
};

export default Logo;
