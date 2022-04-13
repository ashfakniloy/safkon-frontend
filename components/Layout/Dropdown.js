import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Dropdown({ isOpen }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="absolute z-10 lg:hidden w-full h-[90%] bg-custom-gray flex flex-col justify-center items-center"
      variants={fade}
      initial={false}
      animate={isOpen ? "animate" : "initial"}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col justify-center items-center gap-4 font-bold tracking-widest text-[18px] uppercase">
        <Link href="/" passHref>
          <a className="hover:text-custom-red transition duration-200">Home</a>
        </Link>

        <div
          className="cursor-pointer"
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          <a className="hover:text-custom-red transition duration-200 flex items-center gap-1 ">
            About
            <span>
              <FaAngleDown />
            </span>
          </a>

          {/* {showAbout && <AboutDropdown />} */}
        </div>

        <div
          className="cursor-pointer"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <a className="hover:text-custom-red transition duration-200 flex items-center gap-1 ">
            Services
            <span>
              <FaAngleDown />
            </span>
          </a>

          {/* {showServices && <ServicesDropdown />} */}
        </div>

        <Link href="/" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Safety & quality
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Contact us
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Job opportunities
          </a>
        </Link>
      </div>
    </motion.div>
  );
}

export default Dropdown;
