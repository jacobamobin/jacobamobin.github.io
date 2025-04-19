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
      className="mt-10"
    >
      <h1 className="font-bold text-2xl">About me</h1>
      <ul className="list-disc space-y-2 mt-2">
        <li className="hover:translate-x-1 duration-300">
          🖥️ 1st year CS student @TMU
        </li>
        <li className="hover:translate-x-1 duration-300">
          🥋 Achieved a Second Degree Black Belt in Taekwondo and earned my Assistant Instructor Coaching Certification.
        </li>
        <li className="hover:translate-x-1 duration-300">
          🎥 Video Editor proficient in DaVinci Resolve and Premiere Pro
        </li>
        <li className="hover:translate-x-1 duration-300">
          🤖 Interested in full-stack applications, large language models, and artificial intelligence.
        </li>
      </ul>
    </motion.div>
  );
};

export default About; 