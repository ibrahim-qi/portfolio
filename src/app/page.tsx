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

const Achievements = () => {
  const achievements = [
    {
      metric: "60FPS",
      description: "Consistent performance in React Native apps with optimized rendering"
    },
    {
      metric: "3+",
      description: "Cross-platform projects built with React Native and TypeScript"
    },
    {
      metric: "100%",
      description: "Accessibility compliance in web projects, applicable to mobile"
    },
    {
      metric: "2025",
      description: "Graduating with Software Engineering degree and React Native specialization"
    }
  ];

  return (
    <section id="achievements" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-12">
          <span className="text-[var(--green)]">04.</span> Key Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--green)] mb-2">
                {achievement.metric}
              </div>
              <div className="text-[var(--slate)] text-sm">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
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
              <Achievements />
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
