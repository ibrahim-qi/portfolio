"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Ibrahim Qureshi.";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-qi/", icon: FiLinkedin },
    { name: "GitHub", href: "https://github.com/ibrahim-qi", icon: FiGithub },
    { name: "Email", href: "mailto:ibrahim.qureshi@protonmail.com", icon: FiMail },
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] min-h-[calc(100dvh-80px)] flex flex-col justify-center py-16 sm:py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[var(--green)] font-mono text-sm sm:text-base mb-4 sm:mb-6 tracking-wide"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold text-[var(--lightest-slate)] mb-2 sm:mb-4 leading-[1.1] tracking-tight"
      >
        {text}
        <span 
          className={`inline-block w-[3px] h-[0.8em] bg-[var(--green)] ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
          aria-hidden="true"
        />
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold text-[var(--slate)] mb-6 sm:mb-8 leading-[1.15]"
      >
        I build software & turn data into insights.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-[var(--slate)] max-w-xl mb-10 leading-relaxed text-[15px] sm:text-lg"
      >
        I&apos;m a{" "}
        <span className="text-[var(--lightest-slate)]">Software Engineer</span>{" "}
        based in Bristol with a degree from{" "}
        <span className="text-[var(--lightest-slate)]">UWE</span>. 
        I enjoy working at the intersection of{" "}
        <span className="text-[var(--lightest-slate)]">engineering and data</span>{" "}
        — building applications, analysing datasets, and creating visualisations.
      </motion.p>

      {/* CTA + Social Links Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8"
      >
        <a
          href="#projects"
          className="group inline-flex items-center justify-center gap-2 px-7 py-4 border border-[var(--green)] text-[var(--green)] 
                   hover:bg-[var(--green)]/10 active:bg-[var(--green)]/20 transition-all duration-200 font-mono text-sm rounded-sm w-fit"
        >
          View my work
          <svg 
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Divider - desktop only */}
        <div className="hidden sm:block w-[1px] h-6 bg-[var(--lightest-navy)]" />

        {/* Social Links */}
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 p-3 text-[var(--slate)] hover:text-[var(--green)] active:text-[var(--green)] transition-colors"
              aria-label={link.name}
            >
              <link.icon size={20} />
              <span className="text-sm font-mono hidden md:inline group-hover:text-[var(--green)]">{link.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
