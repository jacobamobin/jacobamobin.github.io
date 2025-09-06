import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode, HiUsers } from 'react-icons/hi';
import { FaGithub, FaAppStore, FaGooglePlay, FaTrophy } from 'react-icons/fa';
import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'hackathon', label: 'Hackathons', count: projects.filter(p => p.isHackathon).length },
    { key: 'personal', label: 'Personal', count: projects.filter(p => !p.isHackathon).length }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'hackathon') return project.isHackathon;
    if (filter === 'personal') return !project.isHackathon;
    return true;
  });

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

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        layout
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className="group cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-600/30 transition-all duration-300 h-full">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.isHackathon && (
                <span className="px-2 py-1 text-xs font-medium bg-purple-500/90 text-white rounded-full backdrop-blur-sm">
                  Hackathon
                </span>
              )}
              {project.placement && (
                <span className="px-2 py-1 text-xs font-medium bg-yellow-500/90 text-white rounded-full backdrop-blur-sm flex items-center space-x-1">
                  <FaTrophy className="w-3 h-3" />
                  <span>{project.placement}</span>
                </span>
              )}
              {project.userCount && (
                <span className="px-2 py-1 text-xs font-medium bg-green-500/90 text-white rounded-full backdrop-blur-sm flex items-center space-x-1">
                  <HiUsers className="w-3 h-3" />
                  <span>{project.userCount}</span>
                </span>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <div className="mb-3">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {project.type}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    color: tech.color,
                    borderColor: `${tech.color}30`
                  }}
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center space-x-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {project.links?.web && (
                <a
                  href={project.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <HiExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links?.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaAppStore className="w-4 h-4" />
                </a>
              )}
              {project.links?.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  <FaGooglePlay className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My{' '}
            <span className="text-purple-600 dark:text-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my journey in software development, 
            from hackathon wins to production applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-1 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl p-1 border border-white/20 dark:border-gray-700/20">
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filterOption.label}
                <span className="ml-2 text-xs opacity-75">({filterOption.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal would go here if needed */}
      </div>
    </section>
  );
};

export default Projects;
