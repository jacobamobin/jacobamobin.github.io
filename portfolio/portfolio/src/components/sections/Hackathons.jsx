import { motion } from "framer-motion";
import { hackathons } from "../../data/hackathons";

const TechnologyTag = ({ name, color }) => (
  <span
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
    style={{ 
      backgroundColor: `${color}15`,
      color: color,
      border: `1px solid ${color}30`
    }}
  >
    {name}
  </span>
);

const HackathonCard = ({ title, date, description, location, achievement, links, technologies, status, image }) => {
  const icons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    devpost: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 280 280" fill="currentColor">
        <path d="M140 50h140l-70 120 70 120H140l-70-120 70-120z"/>
        <path d="M0 170V50h140v240H0v-120z"/>
      </svg>
    ),
    site: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    )
  };

  return (
    <div className="relative flex items-center mb-8">
      {/* Timeline dot */}
      <div className="absolute left-0 w-[55px] h-[55px] rounded-full overflow-hidden border-4 border-[#1e1e1e] z-20 bg-[#1e1e1e]">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/55?text=🏆';
          }}
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card group overflow-hidden ml-8 flex-1"
        whileHover={{ y: -5 }}
      >
        <div className="relative p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  {title}
                </h3>
                {status === 'upcoming' && (
                  <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs font-medium border border-blue-400/20">
                    Coming Soon
                  </span>
                )}
                {achievement && (
                  <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/20">
                    {achievement}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
                <span>{date}</span>
                <span className="text-gray-600">•</span>
                <span>{location}</span>
              </div>
            </div>
            {/* Links */}
            {links && (
              <div className="flex gap-2">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    title="GitHub Repository"
                  >
                    {icons.github}
                  </a>
                )}
                {links.devpost && (
                  <a
                    href={links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    title="Devpost Project"
                  >
                    {icons.devpost}
                  </a>
                )}
                {links.site && (
                  <a
                    href={links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    title="Live Site"
                  >
                    {icons.site}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Technologies */}
          {technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <TechnologyTag key={tech.name} {...tech} />
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Hackathons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-16 mb-16"
    >
      <h1 className="section-title" id="hackathons">
        Hackathons
      </h1>
      
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
        
        {/* Hackathon cards */}
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <HackathonCard {...hackathon} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hackathons; 