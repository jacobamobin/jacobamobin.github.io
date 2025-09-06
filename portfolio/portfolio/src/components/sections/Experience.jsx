import React from 'react';
import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { experience } from '../../data/experience';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const ExperienceCard = ({ exp }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="group relative"
      >
        <div className="">
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-600/30 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.position}
                </h3>
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                  <HiOfficeBuilding className="w-5 h-5" />
                  {exp.companyUrl ? (
                    <motion.a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>{exp.company}</span>
                      <HiExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : (
                    <span className="font-semibold">{exp.company}</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <HiCalendar className="w-4 h-4" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HiLocationMarker className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Description */}
            {exp.showDescription && (
              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                    style={{ 
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      borderColor: `${tech.color}30`
                    }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building impactful solutions and gaining valuable experience in software development, 
            machine learning, and product engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
