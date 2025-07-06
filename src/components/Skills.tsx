"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSkills = [
    { name: "React", years: 2, link: "https://reactjs.org" },
    { name: "TypeScript", years: 3, link: "https://www.typescriptlang.org" },
    { name: "Next.js", years: 2, link: "https://nextjs.org" },
    { name: "JavaScript ES6+", years: 3, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Node.js", years: 2, link: "https://nodejs.org" },
    { name: "Git & GitHub", years: 3, link: "https://git-scm.com" }
  ];

  const learningNow = [
    { name: "React Native", progress: "Building projects", link: "https://reactnative.dev" },
    { name: "Expo", progress: "Converting PWA", link: "https://expo.dev" },
    { name: "Mobile UI/UX", progress: "Design patterns", link: "https://reactnative.dev/docs/design" },
    { name: "React Navigation", progress: "Learning navigation", link: "https://reactnavigation.org" }
  ];

  const tools = [
    { name: "Supabase", link: "https://supabase.com" },
    { name: "Firebase", link: "https://firebase.google.com" },
    { name: "PostgreSQL", link: "https://postgresql.org" },
    { name: "PWA Development", link: "https://web.dev/progressive-web-apps/" },
    { name: "Responsive Design", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
    { name: "REST APIs", link: "https://restfulapi.net" }
  ];

  if (!mounted) return null;

  return (
    <section id="skills" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-2xl sm:text-3xl font-bold mb-8">
          <span className="text-[var(--green)]">02.</span> My Tech Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Expertise */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--lightest-slate)] mb-6">
              Current Expertise
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-[var(--light-navy)] rounded-lg border border-[var(--lightest-navy)] hover:border-[var(--green)] transition-colors"
                >
                  <a 
                    href={skill.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                  >
                    {skill.name}
                  </a>
                  <span className="text-sm text-[var(--slate)]">
                    {skill.years} years
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--lightest-slate)] mb-6">
              Currently Learning
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {learningNow.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-[var(--light-navy)] rounded-lg border border-[var(--green)] hover:bg-[var(--lightest-navy)] transition-colors"
                >
                  <a 
                    href={skill.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[var(--green)] hover:text-[var(--lightest-slate)] transition-colors"
                  >
                    {skill.name}
                  </a>
                  <span className="text-sm text-[var(--slate)]">
                    {skill.progress}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why React Native Section */}
        <div className="mt-12 p-6 bg-[var(--light-navy)] rounded-lg border border-[var(--lightest-navy)]">
          <h3 className="text-lg font-semibold text-[var(--lightest-slate)] mb-4">
            Why React Native?
          </h3>
          <p className="text-[var(--slate)] mb-4">
            After building several React applications including PWAs, I&apos;m transitioning to React Native to leverage my existing React expertise for mobile development. The shared concepts (components, hooks, state management) make this a natural progression.
          </p>
          <p className="text-[var(--slate)]">
            I&apos;m currently converting my PWA projects to React Native to gain hands-on experience with mobile-specific features like navigation, device APIs, and platform-specific optimizations.
          </p>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-[var(--lightest-slate)] mb-6">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-3 bg-[var(--light-navy)] rounded-lg hover:bg-[var(--lightest-navy)] transition-colors"
              >
                <span className="text-[var(--green)] text-sm">▹</span>
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[var(--slate)] hover:text-[var(--green)] transition-colors"
                >
                  {tool.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 