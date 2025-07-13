"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Macro Logger",
      description: "A comprehensive nutrition tracking Progressive Web App built with <a href='https://react.dev' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>React</a> and <a href='https://www.typescriptlang.org' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>TypeScript</a>. Features offline storage, real-time sync with <a href='https://supabase.com' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>Supabase</a>, and mobile-first responsive design. Currently being enhanced with <a href='https://reactnative.dev' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>React Native</a> components to showcase cross-platform mobile development skills.",
      tech: ["React", "TypeScript", "Supabase", "PWA", "React Native"],
      liveLink: "https://ibrahimqi.com/macro-logger",
      codeLink: "https://github.com/ibrahim-qi/macro-logger-app",
      image: "/macro-logger-preview.png"
    },
    {
      title: "InvestEd",
      description: "An investment learning platform built with <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>Next.js</a> and <a href='https://www.typescriptlang.org' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>TypeScript</a>. Features educational content, interactive learning modules, and user progress tracking. Demonstrates scalable web application development with modern <a href='https://react.dev' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>React</a> patterns.",
      tech: ["Next.js", "TypeScript", "React", "Responsive Design", "User Authentication"],
      liveLink: "https://invested-app.vercel.app",
      codeLink: "https://github.com/ibrahim-qi/invested-app",
      image: "/invested-preview.png"
    },
    {
      title: "Personal Portfolio",
      description: "A developer portfolio website built with <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>Next.js</a> and <a href='https://www.typescriptlang.org' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>TypeScript</a>. Features smooth animations with <a href='https://www.framer.com/motion' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>Framer Motion</a>, responsive design, and optimized performance. Showcases proficiency in <a href='https://react.dev' target='_blank' rel='noopener noreferrer' class='text-[var(--green)] hover:underline'>React</a> development workflows and component architecture.",
      tech: ["Next.js", "TypeScript", "React", "Framer Motion", "Responsive Design"],
      liveLink: "https://portfolio-website.vercel.app",
      codeLink: "https://github.com/ibrahim-qi/portfolio",
      image: "/portfolio-preview.png"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <h2 className="flex items-center gap-2 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-16">
          <span className="text-[var(--green)]">03.</span> Some Things I&apos;ve Built
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-8"></div>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mobile Layout - Stack vertically */}
              <div className="md:hidden">
                <div className="space-y-4">
                  <p className="text-[var(--green)] font-mono text-xs">Featured Project</p>
                  
                  <h3 className="text-xl font-bold text-[var(--lightest-slate)] leading-tight">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--green)] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="bg-[var(--light-navy)] rounded border border-[var(--lightest-navy)] overflow-hidden">
                    <div className="h-48 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-[var(--green)] font-mono text-lg mb-2">{project.title}</div>
                        <div className="text-[var(--slate)] text-sm">Project Screenshot Coming Soon</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[var(--light-navy)] p-4 rounded shadow-xl border border-[var(--lightest-navy)]">
                    <p 
                      className="text-[var(--slate)] leading-relaxed text-sm"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>
                  
                  <ul className="flex flex-wrap gap-3 text-xs font-mono text-[var(--slate)]">
                    {project.tech.map((tech) => (
                      <li key={tech} className="whitespace-nowrap">{tech}</li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors transform hover:scale-110 duration-200"
                      title="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors transform hover:scale-110 duration-200"
                      title="Live Project"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Overlay */}
              <div className="hidden md:block relative">
                
                {/* Project Image */}
                <div className={`relative group ${
                  index % 2 === 0 ? '' : 'flex justify-end'
                }`}>
                  <div className="w-full max-w-xl relative overflow-hidden rounded">
                    <div className="bg-[var(--green)] mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300 absolute inset-0 z-10 opacity-20 group-hover:opacity-0"></div>
                    <div className="bg-[var(--light-navy)] rounded h-48 sm:h-56 lg:h-64 flex items-center justify-center border border-[var(--lightest-navy)] overflow-hidden group-hover:shadow-xl group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                      <div className="text-center p-6">
                        <div className="text-[var(--green)] font-mono text-xl lg:text-2xl mb-3">{project.title}</div>
                        <div className="text-[var(--slate)] text-sm">Project Screenshot Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info - Overlay */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
                  index % 2 === 0 
                    ? 'right-0 text-right' 
                    : 'left-0 text-left'
                } w-full max-w-sm`}>
                  
                  <p className="text-[var(--green)] font-mono text-xs mb-2">Featured Project</p>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--lightest-slate)] mb-4 leading-tight">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--green)] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="bg-[var(--light-navy)] p-4 lg:p-5 rounded shadow-xl mb-6 border border-[var(--lightest-navy)] relative z-30">
                    <p 
                      className="text-[var(--slate)] leading-relaxed text-sm lg:text-base"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>
                  
                  <ul className={`flex flex-wrap gap-3 text-xs font-mono text-[var(--slate)] mb-6 ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech} className="whitespace-nowrap">{tech}</li>
                    ))}
                  </ul>
                  
                  <div className={`flex gap-4 ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors transform hover:scale-110 duration-200"
                      title="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors transform hover:scale-110 duration-200"
                      title="Live Project"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Notable Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-[var(--lightest-slate)] text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="text-center">
            <a
              href="https://github.com/ibrahim-qi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--green)] font-mono hover:underline transition-colors"
            >
              view the archive
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 