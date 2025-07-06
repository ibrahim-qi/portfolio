"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const coreSkills = [
    { name: "React", years: 2, link: "https://reactjs.org" },
    { name: "TypeScript", years: 3, link: "https://www.typescriptlang.org" },
    { name: "Next.js", years: 2, link: "https://nextjs.org" },
    { name: "Supabase", years: 1, link: "https://supabase.com" },
    { name: "Node.js", years: 2, link: "https://nodejs.org" },
    { name: "PostgreSQL", years: 1, link: "https://postgresql.org" }
  ];

  const learningSkills = [
    { name: "React Native", link: "https://reactnative.dev" },
    { name: "Expo", link: "https://expo.dev" },
    { name: "Redux Toolkit", link: "https://redux-toolkit.js.org" },
    { name: "React Navigation", link: "https://reactnavigation.org" },
    { name: "Mobile Development", link: "https://developer.android.com" },
    { name: "iOS Development", link: "https://developer.apple.com" }
  ];

  const devOpsSkills = [
    { name: "Git & GitHub", link: "https://git-scm.com" },
    { name: "GitHub Actions", link: "https://github.com/features/actions" },
    { name: "PWA Development", link: "https://web.dev/progressive-web-apps/" },
    { name: "Responsive Design", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }
  ];

  const advancedSkills = [
    { name: "React Native Reanimated", link: "https://docs.swmansion.com/react-native-reanimated/" },
    { name: "Push Notifications", link: "https://docs.expo.dev/push-notifications/overview/" },
    { name: "Offline Storage", link: "https://docs.expo.dev/versions/latest/sdk/sqlite/" },
    { name: "Performance Optimization", link: "https://reactnative.dev/docs/performance" },
    { name: "Jest & Testing Library", link: "https://jestjs.io" },
    { name: "REST APIs", link: "https://restfulapi.net" }
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

        <div className="space-y-12">
          {/* Core Web Development Skills */}
          <div>
            <h3 className="text-[var(--lightest-slate)] text-lg font-semibold mb-4">Core Web Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
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
          </div>

          {/* Learning React Native */}
          <div>
            <h3 className="text-[var(--lightest-slate)] text-lg font-semibold mb-4">Currently Learning (React Native Focus)</h3>
            <div className="grid grid-cols-2 gap-4">
              {learningSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[var(--green)]">▹</span>
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--slate)] hover:text-[var(--green)] transition-colors duration-200"
                  >
                    {skill.name}
                  </a>
                  <span className="text-[var(--green)] font-mono text-xs ml-2">Learning</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div>
            <h3 className="text-[var(--lightest-slate)] text-lg font-semibold mb-4">Tools & Workflow</h3>
            <div className="grid grid-cols-2 gap-4">
              {devOpsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[var(--green)]">▹</span>
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--slate)] hover:text-[var(--green)] transition-colors duration-200"
                  >
                    {skill.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div>
            <h3 className="text-[var(--lightest-slate)] text-lg font-semibold mb-4">Advanced Mobile Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {advancedSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[var(--green)]">▹</span>
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--slate)] hover:text-[var(--green)] transition-colors duration-200"
                  >
                    {skill.name}
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