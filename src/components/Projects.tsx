"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Macro Logger",
      description: (
        <>
          A comprehensive nutrition tracking mobile app built with{" "}
          <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            React Native
          </a>
          {" "}and{" "}
          <a href="https://expo.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Expo
          </a>
          . Features include barcode scanning, offline storage, macro calculations, and progress tracking. Implements{" "}
          <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Firebase
          </a>
          {" "}for real-time data sync and user authentication across both iOS and Android platforms.
        </>
      ),
      tech: ["React Native", "Expo", "TypeScript", "Firebase", "Async Storage", "Expo Camera"],
      github: "https://github.com/ibrahim-qi/macro-logger",
      external: "#",
      image: "/macro-logger.jpg",
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
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Supabase
          </a>
          . Demonstrates strong{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            TypeScript
          </a>
          {" "}skills essential for React Native development. Features interactive learning modules, progress tracking, and user authentication with mobile-first responsive design principles.
        </>
      ),
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL", "Authentication"],
      github: "https://github.com/ibrahim-qi/invested",
      external: "#",
      image: "/invested.jpg",
    },
    {
      title: "Personal Portfolio",
      description: (
        <>
          A responsive portfolio website built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Next.js
          </a>
          {" "}and{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Tailwind CSS
          </a>
          . Showcases advanced{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            TypeScript
          </a>
          {" "}and{" "}
          <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Git
          </a>
          {" "}workflow skills that directly transfer to React Native development. Features smooth animations and modern UI patterns applicable to mobile development.
        </>
      ),
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git"],
      github: "https://github.com/ibrahim-qi/portfolio",
      external: "https://www.ibrahimqi.com",
      image: "/portfolio.jpg",
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-12">
          <span className="text-[var(--green)]">03.</span> Some Things I&apos;ve Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-12 w-full"
            >
              {/* Project Image */}
              <div
                className={`relative md:col-span-7 row-span-full ${
                  i % 2 === 0 ? "md:col-start-6" : "md:col-start-1"
                }`}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="relative h-full">
                    <div className="h-full w-full bg-[var(--green)]/10 rounded overflow-hidden">
                      <div className="h-full w-full bg-[var(--navy)] mix-blend-screen" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`relative md:col-span-7 row-span-full ${
                  i % 2 === 0 ? "md:col-start-1 text-left" : "md:col-start-6 md:text-right"
                } ${i % 2 === 0 ? "md:pr-2" : "md:pl-2"}`}
              >
                <div className="relative h-full flex flex-col justify-center">
                  <p className="font-mono text-[var(--green)] text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-[var(--lightest-slate)] mb-4">
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--green)]">
                      {project.title}
                    </a>
                  </h3>
                  <div className="py-5 px-6 bg-[var(--light-navy)] rounded-lg shadow-lg mb-4">
                    <p className="text-[var(--slate)]">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 text-xs font-mono text-[var(--slate)] mb-4 ${
                    i % 2 === 0 ? "" : "md:justify-end"
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-4 ${
                    i % 2 === 0 ? "" : "md:justify-end"
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)]"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)]"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
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