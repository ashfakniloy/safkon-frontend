import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { motion, useCycle } from "framer-motion";
import AboutDropdown from "./AboutDropdown";
import ServicesDropdown from "./ServicesDropdown";
import Dropdown from "./Dropdown";

function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const button = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div className="">
      <div className="container px-4 py-3 lg:py-[40px] flex justify-between items-center">
        {/* <div className="text-5xl font-Montserrat font-bold text-custom-blue">
          SAFCON
        </div> */}
        <div className="px-4 w-[150px] lg:w-[200px] h-[80px] lg:h-[127px]">
          <Image
            src="/images/logos/logo.png"
            width={264}
            height={191}
            alt="safkon logo"
          />
        </div>

        <button
          className="lg:hidden bg-transparent text-custom-orange text-xl p-2"
          onClick={() => toggleOpen()}
        >
          <motion.div
            variants={button}
            animate={isOpen ? "initial" : "animate"}
            transition={{ duration: 0.5 }}
          >
            <FaBars className={!isOpen ? "block" : "hidden"} />
          </motion.div>
          <motion.div
            variants={button}
            animate={isOpen ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
          >
            <FaTimes className={isOpen ? "block" : "hidden"} />
          </motion.div>
        </button>

        <div className="hidden lg:flex flex-row justify-center gap-5 font-medium tracking-wide uppercase">
          <Link href="/" passHref>
            <a className="hover:text-custom-red transition duration-200">
              Home
            </a>
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

            {showAbout && <AboutDropdown />}
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

            {showServices && <ServicesDropdown />}
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
      </div>
      <Dropdown isOpen={isOpen} />
    </div>
  );
}

export default Header;
