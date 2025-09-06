import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'jacobamobin@gmail.com',
      href: 'mailto:jacobamobin@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: HiMail,
      label: 'University Email',
      value: 'jacob.mobin@torontomu.ca',
      href: 'mailto:jacob.mobin@torontomu.ca',
      color: 'text-blue-500'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Toronto, Ontario, Canada',
      href: null,
      color: 'text-green-500'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/jacobamobin',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/jacobamobin',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/jacobamobin',
      color: 'hover:text-blue-400'
    }
  ];

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

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            Get in{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and connecting with fellow developers. 
            Feel free to reach out if you'd like to chat!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:border-white/30 dark:hover:border-gray-600/30 transition-all duration-300">
                      <div className={`p-3 rounded-lg ${info.color} bg-white/10 dark:bg-gray-800/10`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Available for Work */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently seeking full-time software development opportunities. 
                Open to remote work and relocation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
