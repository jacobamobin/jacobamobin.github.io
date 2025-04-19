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

const HackathonCard = ({ title, date, description, location, achievement, links, technologies, status }) => {
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
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />
      
      <div className="relative p-6 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
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
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>{date}</span>
              <span className="text-gray-600">•</span>
              <span>{location}</span>
            </p>
          </div>
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
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Links */}
        {links && (
          <div className="flex gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all group/link"
              >
                <span className="p-2 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  {icons.github}
                </span>
                <span className="font-medium">View Code</span>
              </a>
            )}
            {links.devpost && (
              <a
                href={links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all group/link"
              >
                <span className="p-2 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  {icons.devpost}
                </span>
                <span className="font-medium">View Project</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Hackathons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-10 pb-10"
    >
      <h1 className="font-bold text-2xl mb-6" id="hackathons">Hackathons</h1>
      <div className="grid gap-6">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.title} {...hackathon} />
        ))}
      </div>
    </motion.div>
  );
};

export default Hackathons; 