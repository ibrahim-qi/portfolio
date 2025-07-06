"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Macro Logger",
      description: (
        <>
          A comprehensive nutrition tracking Progressive Web App built with{" "}
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            React
          </a>
          {" "}and{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            TypeScript
          </a>
          . Features offline storage, real-time sync, and mobile-first responsive design using{" "}
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Supabase
          </a>
          . This project demonstrates my React expertise and mobile-first thinking that I'm now applying to React Native development.
          <br />
          <br />
          <span className="text-[var(--green)] font-medium">🚀 Coming Soon:</span> React Native version currently in development to showcase mobile-specific features like push notifications and native device integration.
        </>
      ),
      tech: ["React", "TypeScript", "Supabase", "PWA", "Responsive Design"],
      liveLink: "https://ibrahimqi.com/macro-logger",
      codeLink: "https://github.com/ibrahim-qi/macro-logger-app"
    },
    {
      title: "InvestEd",
      description: (
        <>
          An investment learning platform built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Next.js
          </a>
          {" "}and{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            TypeScript
          </a>
          . Features educational content, interactive learning modules, and user progress tracking. This project showcases my ability to build scalable web applications with modern React patterns and TypeScript - skills that directly transfer to React Native development.
        </>
      ),
      tech: ["Next.js", "TypeScript", "React", "Responsive Design", "User Authentication"],
      liveLink: "https://invested-app.vercel.app",
      codeLink: "https://github.com/ibrahim-qi/invested-app"
    },
    {
      title: "Personal Portfolio",
      description: (
        <>
          A developer portfolio website built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Next.js
          </a>
          {" "}and{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            TypeScript
          </a>
          . Features smooth animations, responsive design, and optimized performance. Demonstrates my proficiency in React development workflows, component architecture, and modern web technologies that form the foundation for React Native development.
        </>
      ),
      tech: ["Next.js", "TypeScript", "React", "Framer Motion", "Responsive Design"],
      liveLink: "https://portfolio-website.vercel.app",
      codeLink: "https://github.com/ibrahim-qi/portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-[var(--green)]">04.</span> My Projects
        </h2>

        <div className="mb-8 p-6 bg-[var(--light-navy)] rounded-lg border border-[var(--lightest-navy)]">
          <h3 className="text-lg font-semibold text-[var(--lightest-slate)] mb-3">
            📱 React → React Native Journey
          </h3>
          <p className="text-[var(--slate)] mb-3">
            The projects below showcase my React and TypeScript expertise. I&apos;m currently converting the Macro Logger PWA to React Native to demonstrate mobile-specific development skills.
          </p>
          <p className="text-[var(--slate)] text-sm">
            <span className="text-[var(--green)]">Why this approach?</span> Rather than building toy apps, I&apos;m converting real projects to show how React skills translate to React Native development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 bg-[var(--light-navy)] rounded-lg border border-[var(--lightest-navy)] hover:border-[var(--green)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--lightest-slate)] mb-4">
                  {project.title}
                </h3>
                
                <div className="text-[var(--slate)] mb-6 leading-relaxed">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono text-[var(--green)] bg-[var(--lightest-navy)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--green)] hover:text-[var(--lightest-slate)] transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--green)] hover:text-[var(--lightest-slate)] transition-colors"
                  >
                    <span>View Code</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 