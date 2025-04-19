import { motion } from "framer-motion";

const Navigation = () => {
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

          {/* Right side - Navigation Links */}
          <div className="flex space-x-8">
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink disabled>Mods</NavLink>
            <NavLink onClick={() => scrollToSection('hackathons')}>Hackathons</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        </div>
      </div>
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

export default Navigation; 