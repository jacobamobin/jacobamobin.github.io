import React from 'react';
import { projects } from "../../data/projects";
import playStoreBadge from "../../assets/google-play-badge.png";

const LanguageTag = ({ name, color }) => (
  <span
    className="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium"
    style={{ 
      backgroundColor: `${color}15`,
      color: color,
      border: `1px solid ${color}30`
    }}
  >
    {name}
  </span>
);

const ProjectLinks = ({ links }) => {
  const icons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    web: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    ),
    appStore: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 L5 17 M12 3 L19 17 M6.5 13 L17.5 13"
        />
      </svg>
    )
  };

  return (
    <div className="flex flex-col gap-2 items-end w-full">
      <div className="flex gap-2">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            title="GitHub Repository"
          >
            {icons.github}
          </a>
        )}
        {links.web && (
          <a
            href={links.web}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            title="Live Website"
          >
            {icons.web}
          </a>
        )}
        {links.appStore && (
          <a
            href={links.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            title="Download on the App Store"
          >
            {icons.appStore}
          </a>
        )}
      </div>
      {links.playStore && (
        <div className="flex gap-2 mt-1 w-full">
          <a
            href={links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity flex-1"
          >
            <img 
              src={playStoreBadge}
              alt="Get it on Google Play" 
              className="w-full h-auto"
            />
          </a>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ title, description, image, links, technologies, type, userCount }) => {
  const displayType = type === "WEB APP" ? "WEBSITE" : type;
  
  return (
    <div className="glass-card overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-black/50 backdrop-blur-sm text-blue-400">
            {displayType}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-3 flex-1 min-w-0 pr-2">
            <h3 
              className="text-xl font-semibold text-white break-words hyphens-auto group relative truncate max-w-full bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              title={title}
            >
              {title}
            </h3>
            {userCount && (
              <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 mt-1 sm:mt-0 font-medium">
                {userCount}
              </span>
            )}
          </div>
          <div className="flex-shrink-0">
            <ProjectLinks links={links} />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <LanguageTag key={tech.name} {...tech} />
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mt-16 pb-16 w-full px-4">
      <h1 className="section-title" id="projects">
        Projects
      </h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/jacobamobin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View More Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects; 