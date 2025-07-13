"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Ibrahim Qureshi.";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-[var(--green)] font-mono text-sm mb-5">Hi, my name is</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lightest-slate)] mb-3 leading-tight">
          {text}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>|</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--slate)] mb-6 leading-tight">
          I build cross-platform mobile apps.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-[var(--slate)] max-w-md mb-12 leading-relaxed text-lg">
          I&apos;m a Software Engineering student passionate about building modern web applications and cross-platform mobile apps. 
          Based in Bristol, UK, I&apos;m currently seeking{" "}
          <a href="https://www.linkedin.com/in/ibrahim-qi/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            new opportunities
          </a>{" "}
          in web and mobile development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="#projects"
          className="inline-block px-7 py-4 border border-[var(--green)] text-[var(--green)] 
                   hover:bg-[var(--green)] hover:bg-opacity-10 transition-all duration-200 
                   text-sm font-mono"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 