import { motion } from "framer-motion";

const ContactCard = ({ type, email, bgColor }) => (
  <div className="inline-block px-8 py-4 rounded-lg bg-gradient-to-br from-[rgb(20,20,26)] to-[rgb(28,28,36)] shadow-lg border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm">
    <div className="flex justify-center">
      <div className={`px-4 py-2 ${bgColor} rounded-full text-sm inline-block mb-3 font-medium`}>
        {type}
      </div>
    </div>
    <div className="text-center">
      <a
        href={`mailto:${email}`}
        className="text-white hover:text-blue-400 transition-colors font-medium text-lg"
      >
        {email}
      </a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-16 mb-32"
    >
      <div className="text-center mb-10">
        <h1 className="font-bold text-2xl inline-block relative" id="contact">
          Contact
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <ContactCard
          type="PERSONAL"
          email="jacobamobin@gmail.com"
          bgColor="bg-blue-500/20 text-blue-400 border border-blue-500/20"
        />
        <ContactCard
          type="ACADEMIC"
          email="jacob.mobin@torontomu.ca"
          bgColor="bg-purple-500/20 text-purple-400 border border-purple-500/20"
        />
      </div>
    </motion.div>
  );
};

export default Contact; 