"use client";

import { motion } from "framer-motion";

const EmailLink = () => {
  return (
    <motion.div
      className="fixed bottom-0 right-6 hidden lg:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center gap-6 after:block after:w-[1px] after:h-24 after:mx-auto after:bg-[var(--light-slate)]">
        <a
          href="mailto:ibrahim.qureshi@protonmail.com"
          className="vertical-text text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-200 font-mono text-xs tracking-widest"
        >
          ibrahim.qureshi@protonmail.com
        </a>
      </div>
    </motion.div>
  );
};

export default EmailLink; 