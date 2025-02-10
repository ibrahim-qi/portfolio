"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-[var(--green)] font-mono text-sm mb-4">Hi, my name is</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--lightest-slate)] mb-2 sm:mb-4">
          Ibrahim Qureshi.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--slate)] mb-6">
          I build software that matters.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="max-w-lg text-[var(--slate)] mb-8 text-base sm:text-lg">
          I'm a Software Engineering student at{" "}
          <a href="https://www.uwe.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            UWE Bristol
          </a>
          , graduating in July 2025 and actively seeking graduate software engineering roles. With 5 years of{" "}
          <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Python
          </a>
          {" "}experience and a focus on full-stack development, I specialize in building scalable web applications with robust backend systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex gap-4"
      >
        <a
          href="#work"
          className="group relative inline-block px-6 py-4 border border-[var(--green)] text-[var(--green)] 
                   rounded overflow-hidden transition-colors duration-200 text-sm"
        >
          <span className="absolute inset-0 bg-[var(--green)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-200" />
          <span className="relative group-hover:text-[var(--navy)] transition-colors duration-200">
            Check out my work
          </span>
        </a>
        <a
          href="mailto:ibrahim.qureshi@protonmail.com"
          className="group relative inline-block px-6 py-4 border border-[var(--green)] text-[var(--green)] 
                   rounded overflow-hidden transition-colors duration-200 text-sm"
        >
          <span className="absolute inset-0 bg-[var(--green)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-200" />
          <span className="relative group-hover:text-[var(--navy)] transition-colors duration-200">
            Get in touch
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 