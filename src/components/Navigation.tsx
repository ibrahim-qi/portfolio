"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[var(--navy)]/90 backdrop-blur-sm">
      <nav className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="nav-link text-sm"
            >
              <span className="text-[var(--green)] mr-1">0{i + 1}.</span>
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-4 py-2 border border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)]/10 transition-colors duration-200 text-sm font-mono"
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-[var(--green)] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 right-0 h-screen w-[min(75vw,400px)] bg-[var(--light-navy)] p-8 md:hidden"
              >
                <div className="flex flex-col items-center gap-8 mt-16">
                  {navItems.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="nav-link text-lg relative group"
                    >
                      <span className="text-[var(--green)] mr-2">0{i + 1}.</span>
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--green)] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)]/10 transition-colors duration-200 text-base font-mono mt-4"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation; 