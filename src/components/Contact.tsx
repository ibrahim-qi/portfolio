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
        className="max-w-6xl mx-auto"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[var(--green)] text-sm mb-4">04. What&apos;s Next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--lightest-slate)] mb-6">
            Get In Touch
          </h2>
          <p className="text-[var(--slate)] mb-12 leading-relaxed">
            I&apos;m always interested in new opportunities and projects. 
            Whether you have a question, want to discuss web or React Native development, or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:ibrahim.qureshi@protonmail.com"
              className="inline-block px-8 py-4 border border-[var(--green)] text-[var(--green)] 
                       hover:bg-[var(--green)]/10 transition-colors duration-200 font-mono"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 