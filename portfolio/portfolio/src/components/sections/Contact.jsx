import { motion } from "framer-motion";

const ContactCard = ({ type, email, bgColor }) => (
  <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
    <div className="flex justify-center">
      <div className={`px-4 py-2 ${bgColor} rounded text-sm inline-block mb-3`}>
        {type}
      </div>
    </div>
    <div className="text-center">
      <a
        href={`mailto:${email}`}
        className="text-white hover:text-blue-300 transition-colors font-medium text-lg"
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
      <h1 className="text-4xl font-bold text-center mb-12" id="contact">
        Contact me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <ContactCard
          type="PERSONAL"
          email="jacobamobin@gmail.com"
          bgColor="bg-[#2A3942]"
        />
        <ContactCard
          type="ACADEMIC"
          email="jacob.mobin@torontomu.ca"
          bgColor="bg-[#42392A]"
        />
      </div>
    </motion.div>
  );
};

export default Contact; 