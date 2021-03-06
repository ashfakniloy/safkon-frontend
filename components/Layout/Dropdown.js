import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ isOpen }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const fade = {
    initial: {
      y: "-120vh",
    },
    animate: {
      y: 0,
    },
  };

  return (
    <motion.div
      className="absolute z-40 lg:hidden w-screen h-auto py-24 bg-custom-gray flex flex-col justify-center items-center gap-4 font-bold tracking-widest text-[15px] uppercase"
      variants={fade}
      initial={false}
      animate={isOpen ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" passHref>
        <a className="hover:text-custom-red transition duration-200">Home</a>
      </Link>

      <div
        className="cursor-pointer flex flex-col items-center gap-2"
        onClick={() => setShowAbout(!showAbout)}
      >
        <p className="relative hover:text-custom-red transition duration-200 flex items-center">
          About
          <span
            className={`text-xl absolute -right-5 ${
              showAbout && "rotate-180 transition duration-300"
            }`}
          >
            <MdKeyboardArrowDown />
          </span>
        </p>

        {showAbout && (
          <div className="h-full mt-2 mb-4 flex flex-col justify-center items-center gap-3">
            <Link href="/about-us">Who we are</Link>
            <Link href="/industries-we-serve">Industries we serve</Link>
            <Link href="/locations">Locations</Link>
          </div>
        )}
      </div>

      <div
        className="cursor-pointer flex flex-col items-center"
        onClick={() => setShowServices(!showServices)}
      >
        <p className="relative hover:text-custom-red transition duration-200 flex items-center">
          Services
          <span
            className={`text-xl absolute -right-5 ${
              showServices && "rotate-180 transition duration-300"
            }`}
          >
            <MdKeyboardArrowDown />
          </span>
        </p>

        {showServices && (
          <div className="mt-2 mb-4 flex flex-col justify-center items-center gap-3">
            <Link href="/transport-industry">Transport industry</Link>
            <Link href="/construction-industry">Construction industry</Link>
            <Link href="/food-industry">Food industry</Link>
            <Link href="/energy-industry">Energy industry</Link>
            <Link href="/news-media-industry">News media industry</Link>
            <Link href="/manufacturing-industry">Manufacturing industry</Link>
            <Link href="/mining-industry">Mining industry</Link>
          </div>
        )}
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
    </motion.div>
  );
}

export default Dropdown;
