"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
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
          . Features smooth animations using{" "}
          <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Framer Motion
          </a>
          , responsive design, and a clean, modern UI. Deployed and hosted on{" "}
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Netlify
          </a>
          .
        </>
      ),
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/ibrahim-qi/portfolio",
      external: "#",
      image: "/portfolio.jpg",
    },
    {
      title: "SimpleStudy",
      description: (
        <>
          An interactive flashcard application giving students a platform to create, quiz and share sets of flashcards. Developed using{" "}
          <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Flask
          </a>
          {" "}in{" "}
          <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Python
          </a>
          {" "}with{" "}
          <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            SQLite
          </a>
          {" "}DB and encrypted password storage. Interviewed 15 A-Level students who tested the application and received positive feedback. Awarded 65 out of 75 points for the NEA in A-Level Computer Science.
        </>
      ),
      tech: ["Python", "Flask", "SQLite", "Encryption", "UI Design"],
      github: "https://github.com/ibrahim-qi/SimpleStudy",
      external: "#",
      image: "/project1.jpg",
    },
    {
      title: "Digital Check-In",
      description: (
        <>
          Real-time online check-in system that limits disturbance in staff spaces, allowing academics and students to arrange meetings or ask questions to specific departments. Developed using{" "}
          <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Flask
          </a>
          {" "}in{" "}
          <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Python
          </a>
          {" "}with{" "}
          <a href="https://socket.io/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            Socket.io
          </a>
          {" "}for real-time communication and{" "}
          <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
            SQLite
          </a>
          {" "}DB. Awarded 80% for an IT module and presented to the Head of IT services at UWE.
        </>
      ),
      tech: ["Python", "Flask", "Socket.io", "SQLite", "Real-time Communication"],
      github: "https://github.com/ibrahim-qi/Digital-Check-In",
      external: "#",
      image: "/project2.jpg",
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