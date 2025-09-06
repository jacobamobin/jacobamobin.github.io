import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGithub, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { hackathons } from '../../data/hackathons';

const Hackathons = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const HackathonCard = ({ hackathon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-600/30 transition-all duration-300 h-full">
        
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={hackathon.image} 
            alt={hackathon.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Achievement Badge */}
          {hackathon.achievement && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium border border-yellow-400 flex items-center space-x-1">
                <FaTrophy className="w-4 h-4" />
                <span>{hackathon.achievement}</span>
              </div>
            </div>
          )}

          {/* Date and Location overlay */}
          <div className="absolute bottom-4 left-4 space-y-1">
            <div className="flex items-center space-x-2 text-white text-sm">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{hackathon.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-white text-sm">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span>{hackathon.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {hackathon.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
            {hackathon.description}
          </p>

          {/* Technologies */}
          {hackathon.technologies && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {hackathon.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20"
                    style={{ 
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      borderColor: `${tech.color}30`
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {hackathon.links && (
            <div className="flex items-center space-x-3">
              {hackathon.links.github && (
                <motion.a
                  href={hackathon.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
              )}
              {hackathon.links.devpost && (
                <motion.a
                  href={hackathon.links.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <SiDevpost className="w-4 h-4" />
                  <span>Devpost</span>
                </motion.a>
              )}
              {hackathon.links.demo && (
                <motion.a
                  href={hackathon.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Demo</span>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-purple-600 dark:text-purple-400">
              Hackathons
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Collaborative problem-solving experiences where I've built innovative solutions 
            under time constraints and competed with talented developers.
          </p>
        </motion.div>

        {/* Hackathons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.title} hackathon={hackathon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
