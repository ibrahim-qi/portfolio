"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Python",
    "SQL",
    "TypeScript",
    "Flask",
    "Next.js",
    "Tailwind CSS",
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
            Hello! I&apos;m Ibrahim, a recent BSc Software Engineering for Business graduate from the{" "}
            <a href="https://www.uwe.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              University of the West of England, Bristol.
            </a>
          </p>
          <p>
            My experience as a Software Engineering Fellow at{" "}
            <a href="https://www.headstarter.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Headstarter
            </a>
            {" "}and a Teaching Assistant involved working on diverse projects and honing my problem-solving abilities. 
            While I have a strong background in full-stack development with{" "}
            <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Flask
            </a>
            , and I particularly enjoy working with{" "}
            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Python
            </a>
            , I am now focusing my career path on Data Analysis and Data Engineering. I am passionate about using data to drive decisions and create value.
          </p>
          <p>
            Here are some technologies I have been working with:
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
        <p className="text-[var(--slate)] text-sm mt-4">
          Actively developing skills in data analysis tools and libraries.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 