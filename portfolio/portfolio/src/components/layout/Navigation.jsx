import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close menu after clicking a link on mobile
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Name */}
          <motion.button
            onClick={scrollToTop}
            className="text-white font-medium text-lg hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jacob Mobin
          </motion.button>

          {/* Hamburger menu button (mobile only) */}
          {isMobile && (
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle navigation menu"
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45' : ''}`}></div>
            </button>
          )}

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex space-x-8">
              <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
              <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
              <NavLink disabled>Mods</NavLink>
              <NavLink onClick={() => scrollToSection('hackathons')}>Hackathons</NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-[#1e1e1e]"
        >
          <div className="flex flex-col px-4 py-2">
            <MobileNavLink onClick={() => scrollToSection('skills')}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('projects')}>Projects</MobileNavLink>
            <MobileNavLink disabled>Mods</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('hackathons')}>Hackathons</MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ children, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-400'
    }`}
    whileHover={disabled ? {} : { scale: 1.05 }}
    whileTap={disabled ? {} : { scale: 0.95 }}
    disabled={disabled}
  >
    {children}
  </motion.button>
);

const MobileNavLink = ({ children, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    className={`text-gray-300 hover:text-white py-3 border-b border-white/10 transition-colors duration-200 text-base w-full text-left ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-400'
    }`}
    whileTap={disabled ? {} : { scale: 0.95 }}
    disabled={disabled}
  >
    {children}
  </motion.button>
);

export default Navigation; 