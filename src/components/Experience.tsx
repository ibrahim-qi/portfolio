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
        "Graduating July 23rd, 2025 with a degree in Software Engineering with a focus on business applications and cross-platform mobile development",
        "Specialized in modern development practices including component-based architecture, state management, and responsive design principles essential for React Native",
        "Completed advanced coursework in Object-oriented Systems Development, Data Structures and Algorithms, and Advanced Databases - core knowledge for mobile app development",
        "Developed strong foundation in TypeScript, JavaScript, and modern frameworks through modules in Computing Fundamentals and Information Systems Project Development",
        "Built multiple full-stack projects including PWAs, gaining experience with mobile-first design patterns and offline-capable applications",
      ],
    },
    {
      company: "Monarch Education",
      title: "Teaching Assistant",
      date: "September 2023 - September 2024",
      points: [
        "Provided instructional support to teachers and students, developing strong communication skills essential for collaborating with cross-functional teams in mobile development",
        "Supported 20+ students with diverse learning needs, building empathy and user-focused thinking crucial for creating intuitive mobile user experiences",
        "Maintained classroom order and adapted to changing situations, developing problem-solving abilities and flexibility valuable in fast-paced development environments",
        "Assisted with administrative tasks and student progress tracking, gaining experience with data management and user progress monitoring similar to mobile app analytics",
        "Developed patience and clear communication skills through explaining complex concepts, translating directly to documenting code and mentoring junior developers",
      ],
    },
    {
      company: "Headstarter",
      title: "Software Engineering Fellow",
      date: "July 2024 - August 2024",
      points: [
        "Completed intensive 2-week sprint program building 5+ AI-powered and full-stack projects, gaining experience with React fundamentals that transfer directly to React Native",
        "Mentored by senior engineers from Google, Meta, Amazon, and other top tech companies, learning industry best practices for component architecture and state management",
        "Developed projects using modern tech stack including React, Node.js, Python, and AI/ML frameworks - building the JavaScript and React foundation essential for React Native",
        "Participated in Career Capital scoring system (0-100) measuring technical skills, collaboration, and professional growth, demonstrating readiness for mobile development roles",
        "Gained exposure to startup environment and agile development methodologies commonly used in mobile app development teams and React Native projects",
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
          <span className="text-[var(--green)]">03.</span> Where I&apos;ve Worked
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 