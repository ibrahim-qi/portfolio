"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-mono text-[var(--green)] text-sm mb-4">05. What&apos;s Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--lightest-slate)] mb-6">
          Get In Touch
        </h2>
        <p className="text-[var(--slate)] mb-12 max-w-lg mx-auto">
          I&apos;m graduating July 2025 with a BSc in Software Engineering and am actively transitioning from React web development to React Native mobile development. I&apos;m seeking junior React Native developer opportunities, internships, or mentorship roles where I can leverage my React expertise while learning mobile-specific technologies. My inbox is always open for opportunities, technical discussions, or connections in the React Native community!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="mailto:ibrahim.qureshi@protonmail.com"
            className="inline-block px-8 py-4 border-2 border-[var(--green)] text-[var(--green)] 
                     rounded hover:bg-[var(--green)]/10 transition-colors duration-200 font-mono"
          >
            Say Hello
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--slate)] hover:text-[var(--green)] transition-colors duration-200"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 