"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Python (5 years)",
    "SQL (3 years)",
    "Java",
    "Flask",
    "MySQL",
    "Next.js",
    "Tailwind CSS",
    "Machine Learning"
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-[var(--green)]">01.</span> About Me
        </h2>

        <div className="space-y-4 text-[var(--slate)] mb-12">
          <p>
            Hello! I&apos;m Ibrahim, a Software Engineering for Business student at the{" "}
            <a href="https://www.uwe.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              University of the West of England, Bristol
            </a>
            . My passion lies in building scalable full-stack applications.
          </p>
          <p>
            As a Software Engineering Fellow at{" "}
            <a href="https://www.headstarter.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Headstarter
            </a>
            {" "}and a Teaching Assistant, I&apos;ve had the opportunity to work on diverse projects while helping others learn programming. 
            I&apos;ve built multiple web applications using{" "}
            <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Flask
            </a>
            {" "}and{" "}
            <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              SQLite
            </a>
            , and I particularly enjoy working with{" "}
            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Python
            </a>
            {" "}and developing full-stack applications.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me diving deep into FX and Futures Trading, 
            working towards my goal of becoming a high-level proprietary firm trader.
          </p>
          <p>
            Here are some technologies I work with:
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
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About; 