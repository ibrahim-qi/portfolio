"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center px-1"
      >
        <p className="font-mono text-[var(--green)] text-sm mb-5">
          04. What&apos;s Next?
        </p>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lightest-slate)] mb-5 sm:mb-6 tracking-tight">
          Get In Touch
        </h2>
        
        <p className="text-[var(--slate)] mb-8 sm:mb-10 leading-relaxed text-[15px] sm:text-base">
          I&apos;m currently looking for new opportunities. Whether you have a 
          question, a potential role, or just want to say hello — my inbox is always open.
        </p>
        
        <a
          href="mailto:ibrahim.qureshi@protonmail.com"
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 border border-[var(--green)] text-[var(--green)] rounded-sm
                   active:bg-[var(--green)]/20 lg:hover:bg-[var(--green)]/10 transition-all duration-200 font-mono text-sm"
        >
          <FiMail size={18} />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
