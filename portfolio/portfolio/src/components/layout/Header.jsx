import { motion } from "framer-motion";
import banner from "../../assets/banners.png";
import pfp from "../../assets/pfp.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="relative mb-24">
        <div className="w-full">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover object-bottom"
          />
          
          {/* Profile card that overlaps the banner - centered */}
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="glass-card"
            >
              <div className="flex flex-col sm:flex-row items-center p-8 text-center sm:text-left">
                {/* Left side - Profile Picture */}
                <div className="relative group mb-6 sm:mb-0 mr-0 sm:mr-8">
                  <div 
                    className="absolute -inset-1 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                    style={{
                      background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #d946ef)",
                      filter: "blur(12px)"
                    }}
                  ></div>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    src={pfp}
                    alt="Profile"
                    className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-white/10 z-10"
                    style={{
                      boxShadow: "0 0 20px 2px rgba(120, 120, 255, 0.3)"
                    }}
                  />
                </div>
                
                {/* Right side - Name and title */}
                <div className="flex-1">
                  <h2 
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #8b5cf6, #d946ef)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundSize: "200% 200%",
                      animation: "gradientText 5s ease infinite"
                    }}
                  >
                    Jacob Mobin
                  </h2>
                  
                  <p className="text-gray-300 text-lg sm:text-xl">
                    CS Student @ TMU | Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add a keyframe for the animated gradient text */}
      <style jsx>{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default Header; 