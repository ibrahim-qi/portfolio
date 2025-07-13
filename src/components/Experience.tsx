"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Headstarter",
      title: "Software Engineering Fellow",
      date: "January 2025 - May 2025",
      points: [
        "Completed intensive 7-week fellowship program building 5+ AI-powered and full-stack projects using React fundamentals",
        "Mentored by senior engineers from Google, Meta, Amazon, and other top tech companies, learning industry best practices",
        "Developed projects using modern tech stack including React, Node.js, Python, and AI/ML frameworks",
        "Participated in Career Capital scoring system measuring technical skills, collaboration, and professional growth",
      ],
    },
    {
      company: "Freelance",
      title: "Full-Stack Developer",
      date: "2023 - Present",
      points: [
        "Developed full-stack web applications using React, Next.js, and TypeScript with Supabase backend integration",
        "Currently upskilling in React Native and Expo for cross-platform mobile development",
        "Implemented responsive designs with Tailwind CSS and modern UI/UX principles for web and mobile",
        "Delivered projects from concept to deployment with focus on performance and user experience across platforms",
      ],
    },
    {
      company: "Monarch Education",
      title: "Teaching Assistant",
      date: "September 2023 - September 2024",
      points: [
        "Provided instructional support to teachers and students, developing strong communication skills for cross-functional collaboration",
        "Supported 20+ students with diverse learning needs, building empathy and user-focused thinking crucial for UX design",
        "Maintained classroom order and adapted to changing situations, developing problem-solving abilities valuable in development environments",
        "Assisted with administrative tasks and student progress tracking, gaining experience with data management and user progress monitoring",
      ],
    },
    {
      company: "UWE Bristol",
      title: "BSc Software Engineering for Business",
      date: "September 2022 - July 2025",
      points: [
        "Expected to graduate July 23rd, 2025 with a Bachelor's degree in Software Engineering for Business, focusing on practical application of software engineering in commercial environments",
        "Completed key modules including Advanced Topics in Web Development, Software Development Project, and Advanced Databases",
        "Studied Design and Analysis of Data Structures & Algorithms, Development of Information Systems, and Data Schemas and Applications",
        "Active member of UWE Islamic Society and UWE Move Basketball, developing leadership and teamwork skills alongside technical expertise",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-16">
          <span className="text-[var(--green)]">02.</span> Where I&apos;ve Worked
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-8"></div>
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
          <div className="py-2 flex-1">
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
                      className="flex gap-2 text-[var(--slate)] leading-relaxed"
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