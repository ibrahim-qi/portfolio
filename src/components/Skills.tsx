"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const mainSkills = [
    { name: "React Native", years: 2, link: "https://reactnative.dev" },
    { name: "TypeScript", years: 3, link: "https://www.typescriptlang.org" },
    { name: "Expo", years: 2, link: "https://expo.dev" },
    { name: "Firebase", years: 2, link: "https://firebase.google.com" },
    { name: "Node.js", years: 2, link: "https://nodejs.org" },
    { name: "React/Next.js", years: 2, link: "https://nextjs.org" }
  ];

  const otherTech = [
    { name: "REST APIs", link: "https://restfulapi.net" },
    { name: "Push Notifications", link: "https://docs.expo.dev/push-notifications/overview/" },
    { name: "Offline Storage", link: "https://docs.expo.dev/versions/latest/sdk/sqlite/" },
    { name: "Animations (Reanimated)", link: "https://docs.expo.dev/versions/latest/sdk/reanimated/" },
    { name: "Supabase", link: "https://supabase.com" },
    { name: "Git & GitHub", link: "https://git-scm.com" }
  ];

  const emergingSkills = [
    { name: "New Architecture (Fabric)", link: "https://reactnative.dev/docs/the-new-architecture/landing-page" },
    { name: "TurboModules", link: "https://reactnative.dev/docs/the-new-architecture/turbomodules" },
    { name: "Hermes Engine", link: "https://hermesengine.dev" },
    { name: "EAS Build & Submit", link: "https://docs.expo.dev/build/introduction/" }
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

          <div className="mt-12">
            <p className="text-[var(--slate)] mb-4">Currently learning (2025 focus):</p>
            <div className="grid grid-cols-2 gap-4">
              {emergingSkills.map((skill, index) => (
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