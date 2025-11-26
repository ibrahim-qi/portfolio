"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialLinks = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/ibrahim-qi", icon: FiGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-qi/", icon: FiLinkedin },
    { name: "Email", href: "mailto:ibrahim.qureshi@protonmail.com", icon: FiMail },
  ];

  return (
    <>
      {/* Desktop fixed sidebar */}
      <motion.div 
        className="fixed bottom-0 left-8 hidden lg:block z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <ul className="flex flex-col items-center gap-5">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="block p-2 text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-200"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            </li>
          ))}
          <li className="w-[1px] h-24 bg-[var(--light-slate)]" aria-hidden="true" />
        </ul>
      </motion.div>

      {/* Footer */}
      <footer 
        className="py-8 text-center"
        style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
      >
        {/* Mobile social icons */}
        <ul className="flex items-center justify-center gap-6 mb-6 lg:hidden">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-11 h-11 text-[var(--light-slate)] active:text-[var(--green)] transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            </li>
          ))}
        </ul>
        
        <p className="text-[var(--slate)] text-xs font-mono">
          Designed & Built by Ibrahim Qureshi
        </p>
      </footer>
    </>
  );
};

export default SocialLinks;
