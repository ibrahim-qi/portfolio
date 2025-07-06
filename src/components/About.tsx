"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React Native",
    "TypeScript",
    "Expo",
    "Firebase",
    "Node.js",
    "REST APIs",
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
            Hello! I&apos;m Ibrahim, graduating July 23rd with a BSc in Software Engineering for Business from the{" "}
            <a href="https://www.uwe.ac.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              University of the West of England, Bristol.
            </a>
          </p>
          <p>
            My journey has led me to specialize in{" "}
            <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              React Native
            </a>
            {" "}development, where I focus on building scalable, cross-platform mobile applications. My experience as a Software Engineering Fellow at{" "}
            <a href="https://www.headstarter.org" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Headstarter
            </a>
            {" "}and a Teaching Assistant has strengthened my problem-solving abilities and technical foundation.
          </p>
          <p>
            I&apos;m passionate about creating mobile experiences that work seamlessly across platforms, implementing features like offline storage, push notifications, and smooth animations. I particularly enjoy working with{" "}
            <a href="https://expo.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Expo
            </a>
            {" "}and{" "}
            <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">
              Firebase
            </a>
            {" "}to build full-stack mobile solutions.
          </p>
          <p>
            Here are the main technologies I work with:
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
          Always exploring new mobile development patterns and React Native libraries.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 