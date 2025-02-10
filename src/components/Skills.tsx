"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const mainSkills = [
    { name: "Python", years: 5, link: "https://www.python.org" },
    { name: "Flask", years: 3, link: "https://flask.palletsprojects.com" },
    { name: "SQL", years: 3, link: "https://www.sqlite.org" },
    { name: "JavaScript", years: 2, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React/Next.js", years: 1, link: "https://nextjs.org" },
    { name: "Java", years: 1, link: "https://www.java.com" }
  ];

  const otherTech = [
    { name: "Git", link: "https://git-scm.com" },
    { name: "RESTful APIs", link: "https://restfulapi.net" },
    { name: "Socket.io", link: "https://socket.io" },
    { name: "UI Design", link: "https://www.figma.com" },
    { name: "Tailwind CSS", link: "https://tailwindcss.com" },
    { name: "Data Structures", link: "https://www.geeksforgeeks.org/data-structures" }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-[var(--green)]">02.</span> Skills
        </h2>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-[var(--green)]">▹</span>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors duration-200"
                >
                  {skill.name}
                </a>
                <span className="text-[var(--slate)] font-mono text-sm">
                  ({skill.years} {skill.years === 1 ? "year" : "years"})
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-[var(--slate)] mb-4">Other technologies I work with:</p>
            <div className="grid grid-cols-2 gap-4">
              {otherTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[var(--green)]">▹</span>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--slate)] hover:text-[var(--green)] transition-colors duration-200"
                  >
                    {tech.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 