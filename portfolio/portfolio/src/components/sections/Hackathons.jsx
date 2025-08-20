import React from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiCode, HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaTrophy } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { hackathons } from '../../data/hackathons';

const Hackathons = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const HackathonCard = ({ hackathon, index }) => {
    return (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Achievement Badge */}
            {hackathon.achievement && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/90 text-white backdrop-blur-sm">
                  <FaTrophy className="w-4 h-4 mr-1" />
                  {hackathon.achievement}
                </span>
              </div>
            )}

            {/* Date and Location */}
            <div className="absolute bottom-4 left-4 space-y-1">
              <div className="flex items-center space-x-2 text-white text-sm">
                <HiCalendar className="w-4 h-4" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm">
                <HiLocationMarker className="w-4 h-4" />
                <span>{hackathon.location}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {hackathon.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {hackathon.description}
            </p>

            {/* Technologies */}
            {hackathon.technologies && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <HiCode className="w-4 h-4 mr-2" />
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
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
                    <HiExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            Competition Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hackathons &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Competitions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Participating in hackathons and competitions to challenge myself, learn new technologies, 
            and collaborate with talented individuals on innovative solutions.
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
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.title} hackathon={hackathon} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: '5+', label: 'Hackathons Attended' },
            { number: '3', label: 'Awards Won' },
            { number: '48hrs', label: 'Average Sprint Time' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
