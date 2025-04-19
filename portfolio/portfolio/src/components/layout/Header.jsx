import { motion } from "framer-motion";
import banner from "../../assets/banners.png";
import pfp from "../../assets/pfp.png";
import Navigation from "./Navigation";

const Header = ({ theme }) => {
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
          <div className="absolute -bottom-16 left-9/100 flex lg:left-12/100 xl:left-24/100">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                duration: 0.6,
              }}
              key="pfp"
              className="xl:hover:scale-105 xl:duration-300 z-10 h-30 w-30 sm:h-32 sm:w-32 md:h-33 md:w-33 lg:w-40 lg:h-40 xl:h-35 xl:w-35 rounded-full border-2 border-gray-500"
              src={pfp}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 