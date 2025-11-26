"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Freelance",
      title: "Full Stack Developer",
      date: "Dec 2024 - Present",
      location: "Remote",
      url: null,
      points: [
        "Developed a full-stack property listing platform using React/Next.js and Supabase, implementing Stripe payment processing, advanced search filters, and mobile-first responsive design",
        "Delivered 15+ features across multiple client projects using Agile methodology, maintaining 100% on-time delivery rate while adapting to evolving requirements",
        "Architected multi-step property listing workflows with real-time validation and PostgreSQL data models in Supabase",
        "Built responsive search systems with location-based filtering and solved complex mobile viewport issues for seamless cross-device experience",
      ],
    },
    {
      company: "Headstarter",
      title: "Software Engineering Fellow",
      date: "Jan - Mar 2025",
      location: "Remote",
      url: "https://headstarter.co",
      points: [
        "Contributed to 5 AI-integrated web apps in 7 weeks using Next.js, OpenAI API, and Pinecone vector database",
        "Implemented RAG (Retrieval-Augmented Generation) pipelines to create custom AI customer support agents",
        "Collaborated in agile teams to prototype and ship features under tight weekly deadlines",
        "Refined model accuracy by preparing and labelling datasets using Pandas and Python",
      ],
    },
    {
      company: "City Farm",
      title: "Technology Consultant",
      date: "Nov 2024 - Mar 2025",
      location: "Bristol",
      url: null,
      points: [
        "Conducted a digital audit of the organisation's tech stack, identifying inefficiencies and presenting a modernisation roadmap to stakeholders",
        "Refactored legacy website elements into modular React components, improving maintainability and user experience",
        "Collaborated in a 4-person Agile team to deliver technical documentation and strategic recommendations",
        "Modernised the frontend architecture to support better marketing performance and consistent branding",
      ],
    },
    {
      company: "Monarch",
      title: "Teaching Assistant",
      date: "Sep 2023 - Sep 2024",
      location: "Bristol",
      url: null,
      points: [
        "Supported teachers and 25+ students daily with classroom activities, resolving EdTech issues and maintaining organised learning environments",
        "Developed communication and problem-solving skills through one-on-one student support, applicable to collaborative software development",
        "Performed hardware troubleshooting to keep lessons running reliably and adapted quickly to changing situations",
      ],
    },
    {
      company: "UWE Bristol",
      title: "BSc Software Engineering",
      date: "2022 - 2025",
      location: "Bristol",
      url: "https://www.uwe.ac.uk",
      points: [
        "Graduated with a 2:1 Bachelor's degree in Software Engineering for Business",
        "Key Modules: Design and Analysis of Data Structures & Algorithms, Software Development Project, Advanced Databases, Object-Oriented Systems Development",
        "Earned Google Cybersecurity Professional certification covering Linux and SQL",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-4 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-10">
          <span className="text-[var(--green)] font-mono text-lg">02.</span>
          <span>Where I&apos;ve Worked</span>
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-4" />
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Tabs - Pill style with proper spacing */}
          <div className="md:hidden -mx-6 px-6">
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2.5 text-sm font-mono whitespace-nowrap rounded-full transition-all duration-200 flex-shrink-0 border
                    ${activeTab === index
                      ? "text-[var(--green)] bg-[var(--green)]/10 border-[var(--green)]/40"
                      : "text-[var(--slate)] bg-[var(--light-navy)] border-[var(--lightest-navy)] active:bg-[var(--lightest-navy)]"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block relative border-l border-[var(--lightest-navy)]">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`block w-full px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-colors duration-200
                  ${activeTab === index
                    ? "text-[var(--green)] bg-[var(--light-navy)] border-l-2 border-[var(--green)] -ml-[2px]"
                    : "text-[var(--slate)] hover:text-[var(--green)] hover:bg-[var(--light-navy)]/50"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[320px] md:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg sm:text-xl text-[var(--lightest-slate)] mb-1">
                  {experiences[activeTab].title}
                  <span className="text-[var(--green)]">
                    {" @ "}
                    {experiences[activeTab].url ? (
                      <a 
                        href={experiences[activeTab].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                      >
                        {experiences[activeTab].company}
                      </a>
                    ) : (
                      experiences[activeTab].company
                    )}
                  </span>
                </h3>
                
                <p className="text-sm font-mono text-[var(--slate)] mb-5">
                  {experiences[activeTab].date} · {experiences[activeTab].location}
                </p>
                
                <ul className="space-y-3">
                  {experiences[activeTab].points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-[var(--slate)] leading-relaxed">
                      <span className="text-[var(--green)] flex-shrink-0 mt-1 text-xs">▹</span>
                      <span className="text-sm">{point}</span>
                    </li>
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
