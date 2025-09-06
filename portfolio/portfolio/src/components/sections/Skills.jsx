import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiC, 
  SiSwift, 
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPycharm,
  SiJupyter
} from 'react-icons/si';
import { FaMobile, FaJava, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillsData = {
    languages: [
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Assembly', icon: FaCode, color: '#A8B9CC' },
      { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'Swift', icon: SiSwift, color: '#FA7343' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
    ],
    frameworks: [
      { name: 'React JS', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: FaMobile, color: '#61DAFB' },
      { name: 'SwiftUI', icon: SiSwift, color: '#007AFF' },
      { name: 'SwiftData', icon: SiSwift, color: '#007AFF' },
      { name: 'Node.js (Express)', icon: SiNodedotjs, color: '#339933' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' }
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: FaCode, color: '#007ACC' },
      { name: 'PyCharm', icon: SiPycharm, color: '#000000' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' }
    ]
  };

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

  const SkillCard = ({ skill }) => {
    const IconComponent = skill.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative"
      >
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl p-4 border border-white/20 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-600/30 transition-all duration-300 h-full">
          {/* Icon and Name */}
          <div className="flex items-center space-x-3">
            <div 
              className="p-2 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex-shrink-0"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              <IconComponent 
                className="w-5 h-5" 
                style={{ color: skill.color }}
              />
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white text-sm">
              {skill.name}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  };

  const SkillSection = ({ title, skills }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-4"
    >
      <motion.h3
        variants={itemVariants}
        className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-6"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <SkillSection title="Languages" skills={skillsData.languages} />
          <SkillSection title="Frameworks" skills={skillsData.frameworks} />
          <SkillSection title="Developer Tools" skills={skillsData.tools} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
