"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Expo",
    "Supabase",
    "Firebase",
    "Git",
    "REST APIs"
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-16">
          <span className="text-[var(--green)]">01.</span> About Me
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-8"></div>
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-[var(--slate)] mb-12 leading-relaxed">
              <p>
                Hello! I&apos;m Ibrahim, a Software Engineering for Business student from the{" "}
                <a href="https://www.uwe.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
                  University of the West of England, Bristol
                </a>
                . I work as a freelance full-stack developer, building web applications with React and currently upskilling in React Native for cross-platform mobile development.
              </p>
              <p>
                I&apos;ve delivered projects ranging from{" "}
                <a href="#projects" className="text-[var(--green)] hover:underline">
                  nutrition tracking PWAs
                </a>{" "}
                to{" "}
                <a href="#projects" className="text-[var(--green)] hover:underline">
                  investment learning platforms
                </a>
                . As a{" "}
                <a href="https://www.headstarter.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
                  Headstarter
                </a>{" "}
                Software Engineering Fellow, I was mentored by engineers from leading tech companies.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with recently:
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2 text-sm">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-[var(--slate)]"
                >
                  <span className="text-[var(--green)]">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                {/* Green overlay */}
                <div className="absolute inset-0 bg-[var(--green)] mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300 z-10 rounded"></div>
                
                {/* Image container */}
                <div className="relative rounded overflow-hidden group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[var(--light-navy)] rounded h-64 sm:h-72 lg:h-80 flex items-center justify-center border border-[var(--lightest-navy)] relative">
                    <div className="text-center p-8">
                      <div className="text-[var(--green)] font-mono text-xl mb-3">Ibrahim Q.</div>
                      <div className="text-[var(--slate)] text-sm">Profile Photo Coming Soon</div>
                    </div>
                  </div>
                </div>

                {/* Border outline */}
                <div className="absolute inset-0 border-2 border-[var(--green)] rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 