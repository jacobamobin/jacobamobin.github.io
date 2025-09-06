import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jacobamobin',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jacobmobin',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:jacobamobin@gmail.com',
      icon: HiMail,
      color: 'hover:text-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image and Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Card */}
            <div className="relative">
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                      <img
                        src="/assets/pfp.png"
                        alt="Jacob Mobin"
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Jacob Mobin
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    CS Student at TMU | Developer
                  </p>
                  
                  {/* Location */}
                  <div className="flex items-center justify-center space-x-3 text-gray-500 dark:text-gray-400">
                    <HiLocationMarker className="w-4 h-4" />
                    <span>Toronto, Canada  🇨🇦</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2 pt-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:shadow-lg`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Resume Button */}
                  <motion.a
                    href="/assets/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 mt-6 text-sm font-semibold text-gray-900 dark:text-white bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-full shadow-lg hover:shadow-xl hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <HiDownload className="w-4 h-4 mr-2" />
                    Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Computer Science Student at{' '}
                <span className="text-yellow-500 dark:text-yellow-400">
                  Toronto Metropolitan 
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {' '}University
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {/*<p>
                I'm passionate about building{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  full-stack applications
                </span>
                , exploring{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  machine learning
                </span>
                , and developing{' '}
                <span className="text-pink-600 dark:text-pink-400 font-semibold">
                  mobile apps
                </span>
                .
              </p>*/}

              <p>
                Beyond coding, I'm a{' '}
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  2nd Degree Black Belt in Taekwondo
                </span>
                , have my{' '}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  Assistant Instructor certification
                </span>
                {' '}(NCCP), and a video editor who uses{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  DaVinci Resolve
                </span>
                {' '}and{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  Premiere Pro
                </span>
                .
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '2+', label: 'Years Coding' },
                { number: '10+', label: 'Projects Built' },
                { number: '5+', label: 'Technologies' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-4 rounded-2xl bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;