"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import EmailLink from "@/components/EmailLink";
import ScrollToTop from "@/components/ScrollToTop";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <div className="max-w-[900px] mx-auto">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Experience />
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <SocialLinks />
      <EmailLink />
      <ScrollToTop />
    </main>
  );
}
