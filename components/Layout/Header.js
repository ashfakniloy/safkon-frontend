import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
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
    <div>
      <div className="relative bg-white z-50 lg:px-28 py-5 lg:py-[40px] flex justify-between items-center">
        <Link href="/" passHref>
          <div className="px-4 w-[150px] lg:w-[250px] h-full cursor-pointer">
            <Image
              src="/images/logos/safkon-logo.jpg"
              alt="safkon logo"
              width={2167}
              height={799}
              layout="responsive"
              priority
            />
          </div>
        </Link>

        <button
          className="lg:hidden  bg-transparent text-xl p-2"
          aria-label="toggle"
          onClick={() => toggleOpen()}
        >
          <motion.div
            variants={button}
            animate={isOpen ? "initial" : "animate"}
            transition={{ duration: 0.5 }}
          >
            <MdMenu className={!isOpen ? "block text-3xl" : "hidden"} />
          </motion.div>
          <motion.div
            variants={button}
            animate={isOpen ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
          >
            <MdClose className={isOpen ? "block text-3xl" : "hidden"} />
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
            <p className="hover:text-custom-red transition duration-200 flex items-center">
              About
              <span className="text-xl">
                <MdKeyboardArrowDown />
              </span>
            </p>

            {showAbout && <AboutDropdown />}
          </div>

          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <p className="hover:text-custom-red transition duration-200 flex items-center">
              Services
              <span className="text-xl">
                <MdKeyboardArrowDown />
              </span>
            </p>

            {showServices && <ServicesDropdown />}
          </div>

          <Link href="/safety-quality" passHref>
            <a className="hover:text-custom-red transition duration-200">
              Safety &amp; quality
            </a>
          </Link>
          <Link href="/contact-us" passHref>
            <a className="hover:text-custom-red transition duration-200">
              Contact us
            </a>
          </Link>
          <Link href="/job-opportunities" passHref>
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
