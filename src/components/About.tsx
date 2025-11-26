"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Python",
    "SQL / PostgreSQL",
    "React / Next.js",
    "TypeScript",
    "Data Visualisation",
    "Git / GitHub",
    "MongoDB",
    "AWS",
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <h2 className="flex items-center gap-4 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-10">
          <span className="text-[var(--green)] font-mono text-lg">01.</span>
          <span>About Me</span>
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-4" />
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-4 text-[var(--slate)] leading-relaxed">
            <p>
              I&apos;m a Software Engineer based in Bristol, recently graduated from{" "}
              <a 
                href="https://www.uwe.ac.uk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--green)] hover:underline underline-offset-4"
              >
                UWE
              </a>{" "}
              with a <span className="text-[var(--lightest-slate)]">2:1 in Software Engineering for Business</span>.
            </p>
            
            <p>
              I enjoy working at the intersection of <span className="text-[var(--lightest-slate)]">software development and data</span>. 
              Whether it&apos;s building full-stack applications, writing SQL queries to uncover insights, 
              or creating visualisations — I love turning complex problems into clean solutions.
            </p>
            
            <p>
              My projects range from building{" "}
              <span className="text-[var(--lightest-slate)]">Monte Carlo financial simulations</span> to 
              engineering <span className="text-[var(--lightest-slate)]">data pipelines</span> that reduced query complexity by 80%.
            </p>

            {/* Skills */}
            <div className="pt-4">
              <p className="text-[var(--lightest-slate)] mb-4 text-sm">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--green)] text-xs">▹</span>
                    <span className="font-mono text-xs">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="relative group max-w-[250px] mx-auto lg:mx-0">
              <div className="relative bg-[var(--light-navy)] rounded border border-[var(--lightest-navy)] group-hover:border-[var(--green)]/40 transition-colors duration-300 overflow-hidden">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center p-6">
                    {/* Stylized initials */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded border-2 border-[var(--green)]/50 flex items-center justify-center bg-[var(--navy)] group-hover:border-[var(--green)] transition-colors">
                      <span className="text-[var(--green)] font-mono text-2xl font-bold tracking-wider">IQ</span>
                    </div>
                    <div className="text-[var(--lightest-slate)] font-medium">Ibrahim Qureshi</div>
                    <div className="text-[var(--slate)] text-sm mt-1">Software Engineer</div>
                    <div className="text-[var(--green)] text-xs font-mono mt-3 flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                      Open to work
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-[var(--green)]/30 rounded translate-x-3 translate-y-3 -z-10 group-hover:border-[var(--green)]/50 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
