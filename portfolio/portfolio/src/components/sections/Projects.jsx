import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import appStoreBadge from "../../assets/app-store-badge.png";
import playStoreBadge from "../../assets/google-play-badge.png";

const LanguageTag = ({ name, color }) => (
  <span
    className="inline-flex items-center px-2 py-1 mr-2 mb-2 rounded text-sm"
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
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all"
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
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all"
            title="Live Website"
          >
            {icons.web}
          </a>
        )}
      </div>
      {(links.appStore || links.playStore) && (
        <div className="flex gap-2 mt-1 w-full">
          {links.appStore && (
            <a
              href={links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex-1"
            >
              <img 
                src={appStoreBadge}
                alt="Download on the App Store" 
                className="w-full h-auto"
              />
            </a>
          )}
          {links.playStore && (
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
          )}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ title, description, image, links, technologies, type, userCount, theme }) => {
  // Convert WEB APP to WEBSITE
  const displayType = type === "WEB APP" ? "WEBSITE" : type;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-lg overflow-hidden shadow-lg relative"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(66, 184, 131, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 100% 0%, rgba(49, 120, 198, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(255, 202, 40, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, rgba(216, 44, 32, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom right, rgba(17, 24, 39, 0.97), rgba(31, 41, 55, 0.97))
        `
      }}
    >
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)'
        }}
      />
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded text-sm ${
            theme === "dark" ? "bg-[rgb(15,15,15)] text-blue-400" : "bg-blue-100 text-blue-800"
          }`}>
            {displayType}
          </span>
        </div>
      </div>
      <div className="p-4 relative">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-3 max-w-[70%]">
            <h3 
              className="text-xl font-semibold text-white break-words hyphens-auto group relative"
              title={title}
            >
              {title}
            </h3>
            {userCount && (
              <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-1 sm:mt-0">
                {userCount}
              </span>
            )}
          </div>
          <ProjectLinks links={links} />
        </div>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <LanguageTag key={tech.name} {...tech} />
          ))}
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = ({ theme }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-10 pb-10"
    >
      <h1 className="font-bold text-2xl mb-6" id="projects">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} theme={theme} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 