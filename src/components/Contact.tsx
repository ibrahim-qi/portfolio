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
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-[var(--slate)] mb-8 max-w-lg mx-auto">
          I&apos;m graduating July 23rd with a BSc in Software Engineering and am actively seeking <strong>full-time opportunities</strong>, <strong>internships</strong>, or <strong>freelance projects</strong> in React Native development, cross-platform mobile development, or frontend engineering roles. I&apos;m passionate about creating user-centric mobile experiences and would love to contribute to your team!
        </p>

        <div className="bg-[var(--light-navy)] rounded-lg p-6 mb-8 max-w-lg mx-auto">
          <h3 className="text-[var(--lightest-slate)] font-semibold mb-3">What I&apos;m Looking For:</h3>
          <ul className="text-[var(--slate)] text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[var(--green)]">▹</span>
              React Native Developer roles (Junior to Mid-level)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--green)]">▹</span>
              Mobile app development internships
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--green)]">▹</span>
              Freelance mobile development projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--green)]">▹</span>
              Open source collaboration opportunities
            </li>
          </ul>
        </div>

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