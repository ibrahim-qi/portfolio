"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <>
      {/* Desktop fixed sidebar */}
      <motion.div 
        className="fixed bottom-0 left-6 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ul className="flex flex-col items-center gap-6 after:block after:w-[1px] after:h-24 after:mx-auto after:bg-[var(--light-slate)]">
          <li>
            <a
              href="https://github.com/ibrahim-qi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-200 block"
            >
              <FiGithub size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ibrahim-qi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-200 block"
            >
              <FiLinkedin size={22} />
            </a>
          </li>
          <li>
            <a
              href="mailto:ibrahim.qureshi@protonmail.com"
              className="text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-200 block"
            >
              <FiMail size={22} />
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Mobile footer */}
      <motion.div
        className="lg:hidden py-8 mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-8">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="https://github.com/ibrahim-qi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-200 block"
              >
                <FiGithub size={24} />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://www.linkedin.com/in/ibrahim-qi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-200 block"
              >
                <FiLinkedin size={24} />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="mailto:ibrahim.qureshi@protonmail.com"
                className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-200 block"
              >
                <FiMail size={24} />
              </a>
            </motion.li>
          </ul>
          <div className="text-center mt-6">
            <p className="text-[var(--slate)] text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SocialLinks; 