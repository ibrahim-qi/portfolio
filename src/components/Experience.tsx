"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      company: "UWE Bristol",
      title: "BSc Software Engineering for Business",
      date: "September 2022 - July 2025",
      points: [
        "Currently pursuing a degree in Software Engineering with a focus on business applications and system development",
        "Completed advanced coursework in Object-oriented Systems Development, Data Structures and Algorithms, and Advanced Databases",
        "Developed strong foundation through modules in Computing Fundamentals, Data Schemas and Applications, and Information Systems Project Development",
        "Maintaining strong academic performance while actively participating in coding projects and technical workshops",
      ],
    },
    {
      company: "Monarch Education",
      title: "Teaching Assistant",
      date: "September 2023 - September 2024",
      points: [
        "Assisted in teaching foundational programming concepts, including variables, loops, functions, and debugging techniques in Python",
        "Supported 20+ students in coding lab sessions by providing hands-on guidance and troubleshooting code",
        "Collaborated with teachers to design coding exercises, deepening my own technical expertise in programming and mentoring",
      ],
    },
    {
      company: "Headstarter",
      title: "Software Engineering Fellow",
      date: "July 2024 - August 2024",
      points: [
        "Built 14+ machine learning, ai-engineering and full-stack projects in fast-paced software team environments",
        "Coached by engineers from leading tech companies including Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma and Citadel",
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <section id="experience" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-[var(--green)]">03.</span> Where I've Worked
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Tabs */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b sm:border-b-0 sm:border-l border-[var(--lightest-navy)]">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-mono whitespace-nowrap transition-all duration-200
                  ${
                    activeTab === index
                      ? "text-[var(--green)] bg-[var(--light-navy)] border-[var(--green)] sm:border-l-2 border-b-2 sm:border-b-0"
                      : "text-[var(--slate)] hover:text-[var(--green)] hover:bg-[var(--light-navy)]"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl text-[var(--lightest-slate)]">
                  {experiences[activeTab].title}{" "}
                  <span className="text-[var(--green)]">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className="text-sm font-mono text-[var(--slate)] mt-1 mb-4">
                  {experiences[activeTab].date}
                </p>
                <ul className="space-y-4">
                  {experiences[activeTab].points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                      className="flex gap-2 text-[var(--slate)]"
                    >
                      <span className="text-[var(--green)] flex-shrink-0">▹</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <p className="text-[var(--slate)] mb-4">
                  Developed and maintained web applications using Python&apos;s Flask framework and SQLite database.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 