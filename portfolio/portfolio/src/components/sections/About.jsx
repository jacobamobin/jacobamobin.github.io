import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-4 container mx-auto px-4"
    >
      <div className="glass-card profile-card mb-16">
        <div className="space-y-6">
          <div className="mb-6 text-center">
            <h2 className="flex items-center justify-center font-bold text-2xl sm:text-3xl mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                👋 Hi, I'm Jacob
              </span>
            </h2>
            <p className="text-lg text-gray-300 font-medium">
              Computer Science Student at Toronto Metropolitan University
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed text-center">
            I'm passionate about building <strong className="text-purple-400">full-stack applications</strong>, exploring <strong className="text-blue-400">machine learning</strong>, and developing <strong className="text-indigo-400">Mobile Apps</strong>.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-center">
            Beyond coding, I'm a <strong className="text-purple-400">2nd Degree Black Belt</strong> in Taekwondo, have my  <strong className="text-blue-400">Assistant Instructor certification</strong> (NCCP), and a video editor who uses <strong className="text-blue-400">DaVinci Resolve</strong> and <strong className="text-indigo-400">Premiere Pro</strong>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 