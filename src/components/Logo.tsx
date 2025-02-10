"use client";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-8 h-8 sm:w-10 sm:h-10"
    >
      <a href="#" className="block">
        {/* Hexagon Background */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.1
          }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-[var(--green)] opacity-20"
          >
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
          </svg>
        </motion.div>
        
        {/* Border Hexagon */}
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2
          }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-none stroke-[var(--green)] stroke-2"
          >
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
          </svg>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.3
          }}
          className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-[var(--green)]"
        >
          IQ
        </motion.div>
      </a>
    </motion.div>
  );
};

export default Logo; 