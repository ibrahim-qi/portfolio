"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-[var(--navy)]/95 py-4 sm:py-5"
      }`}
      style={{ paddingTop: `max(${isScrolled ? '0.75rem' : '1rem'}, env(safe-area-inset-top))` }}
    >
      <nav className="px-5 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between max-w-[1400px] mx-auto">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              className="relative px-4 py-2 text-[13px] text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-200"
            >
              <span className="text-[var(--green)] font-mono text-[11px] mr-1">0{i + 1}.</span>
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 -mr-2 text-[var(--green)] active:bg-[var(--light-navy)] rounded transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-[var(--navy)]/90 backdrop-blur-sm md:hidden"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              
              <motion.nav
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="fixed top-0 right-0 bottom-0 w-[min(80vw,300px)] bg-[var(--light-navy)] shadow-2xl md:hidden"
                style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                  {navItems.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[var(--lightest-slate)] active:text-[var(--green)] transition-colors text-lg py-2"
                    >
                      <span className="block text-[var(--green)] font-mono text-xs text-center mb-1">0{i + 1}.</span>
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
