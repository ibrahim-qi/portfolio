"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "InvestEd",
      subtitle: "Financial Simulation & Data Platform",
      description: "Built an investment simulation platform using Next.js, React (TypeScript), and Supabase for 30 postgraduate students. Implements Monte Carlo models to generate thousands of market scenarios, enabling students to analyse portfolio risk and make data-driven investment decisions.",
      highlights: ["95% student engagement", "Monte Carlo models", "Interactive data viz"],
      tech: ["Next.js", "TypeScript", "Supabase", "Data Visualisation"],
      liveLink: "https://invested-app.vercel.app",
      codeLink: "https://github.com/ibrahim-qi/invested-app",
      featured: true,
      category: "Data & Software",
    },
    {
      title: "Macro Logger",
      subtitle: "Full-Stack Nutrition Tracking PWA",
      description: "Developed a nutrition tracking web application with real-time synchronisation and PWA offline functionality. Built 8 React components with TypeScript implementing real-time data updates via WebSocket subscriptions across 3 normalised database tables.",
      highlights: ["80% query optimisation", "PWA offline mode", "Real-time sync"],
      tech: ["React", "TypeScript", "PostgreSQL", "Supabase"],
      liveLink: "https://ibrahimqi.com/macro-logger",
      codeLink: "https://github.com/ibrahim-qi/macro-logger-app",
      featured: false,
      category: "Data & Software",
    },
    {
      title: "Student Meeting System",
      subtitle: "UWE IT Team Kiosk Application",
      description: "Built and presented a real-time meeting web application for kiosks using Flask/Socket.io that automated student-staff workflows. Consulted with the Head of IT as lead developer in a 3-person agile team using Git and Jira for project management.",
      highlights: ["10→2 min booking (80%↓)", "Lead developer", "Agile team"],
      tech: ["Python", "Flask", "Socket.io", "SQL"],
      liveLink: null,
      codeLink: "https://github.com/ibrahim-qi",
      featured: false,
      category: "Software",
    },
    {
      title: "SimpleStudy",
      subtitle: "Educational Flashcard Platform",
      description: "Developed a full-stack educational web platform using Python (Flask) and SQLAlchemy that enabled 50+ students to create, share, and study flashcard sets. Built algorithmic quiz generation system with multiple learning modes and a rating system for content quality.",
      highlights: ["50+ active users", "200+ flashcard sets", "Quiz algorithms"],
      tech: ["Python", "Flask", "SQLite", "JavaScript"],
      liveLink: null,
      codeLink: "https://github.com/ibrahim-qi/simplestudy",
      featured: false,
      category: "Software",
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <h2 className="flex items-center gap-4 text-[var(--lightest-slate)] text-xl sm:text-2xl font-bold mb-10">
          <span className="text-[var(--green)] font-mono text-lg">03.</span>
          <span>Some Things I&apos;ve Built</span>
          <div className="flex-1 h-[1px] bg-[var(--lightest-navy)] ml-4" />
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured Project - InvestEd */}
          <div className="lg:col-span-7 lg:row-span-2">
            <FeaturedCard project={projects[0]} />
          </div>

          {/* Macro Logger */}
          <div className="lg:col-span-5">
            <ProjectCard project={projects[1]} />
          </div>

          {/* Student Meeting System */}
          <div className="lg:col-span-5">
            <ProjectCard project={projects[2]} />
          </div>

          {/* SimpleStudy */}
          <div className="lg:col-span-5">
            <ProjectCard project={projects[3]} />
          </div>

          {/* GitHub Archive */}
          <div className="lg:col-span-7">
            <ArchiveCard />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveLink: string | null;
  codeLink: string;
  featured: boolean;
  category: string;
}

const FeaturedCard = ({ project }: { project: Project }) => {
  return (
    <div className="h-full bg-[var(--light-navy)] rounded-lg p-6 sm:p-8 border border-[var(--lightest-navy)] hover:border-[var(--green)]/40 transition-colors duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-mono text-[var(--green)] bg-[var(--green)]/10 border border-[var(--green)]/20 rounded">
              Featured Project
            </span>
            <span className="px-2 py-1 text-[10px] font-mono text-[var(--slate)] bg-[var(--navy)] border border-[var(--lightest-navy)] rounded">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--lightest-slate)] mb-1">
            {project.title}
          </h3>
          <p className="text-[var(--slate)] text-sm">{project.subtitle}</p>
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors"
            title="View Code"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors"
              title="Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--slate)] leading-relaxed mb-5 text-[15px]">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.highlights.map((highlight) => (
          <span
            key={highlight}
            className="px-2 py-1 text-xs font-mono text-[var(--green)] bg-[var(--navy)] border border-[var(--lightest-navy)] rounded"
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 text-sm font-mono text-[var(--slate)] mt-auto pt-4 border-t border-[var(--lightest-navy)]">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="h-full bg-[var(--light-navy)] rounded-lg p-5 border border-[var(--lightest-navy)] hover:border-[var(--green)]/40 transition-colors duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-bold text-[var(--lightest-slate)]">
              {project.title}
            </h4>
            <span className="px-1.5 py-0.5 text-[9px] font-mono text-[var(--slate)] bg-[var(--navy)] border border-[var(--lightest-navy)] rounded">
              {project.category}
            </span>
          </div>
          <p className="text-[var(--slate)] text-xs">{project.subtitle}</p>
        </div>
        
        <div className="flex gap-2">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--slate)] text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.highlights.map((highlight) => (
          <span
            key={highlight}
            className="px-2 py-1 text-[10px] font-mono text-[var(--green)] bg-[var(--navy)] border border-[var(--lightest-navy)] rounded"
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 text-xs font-mono text-[var(--slate)] pt-3 border-t border-[var(--lightest-navy)] mt-auto">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

const ArchiveCard = () => {
  return (
    <a
      href="https://github.com/ibrahim-qi"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full min-h-[100px] bg-[var(--light-navy)] rounded-lg p-5 border border-[var(--lightest-navy)] hover:border-[var(--green)]/40 transition-colors duration-300"
    >
      <div className="h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded bg-[var(--navy)] border border-[var(--lightest-navy)]">
            <svg className="w-6 h-6 text-[var(--green)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div>
            <h4 className="text-base font-medium text-[var(--lightest-slate)]">
              View Full Archive
            </h4>
            <p className="text-[var(--slate)] text-sm">
              More projects on GitHub
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-[var(--green)]">
          <span className="font-mono text-sm hidden sm:inline">github.com/ibrahim-qi</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Projects;
