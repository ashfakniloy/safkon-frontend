import {
  FaPhoneAlt,
  FaUserCircle,
  FaTimes,
  FaAngleDown,
  FaAngleUp,
  FaTelegram,
  FaWhatsapp,
  FaViber,
  FaFacebookMessenger,
} from "react-icons/fa";
import { useState } from "react";

function Agent() {
  const [showAgent, setShowAgent] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="z-30 fixed bottom-10 left-5 lg:left-10">
      <button
        type="button"
        aria-label="agent"
        className="z-20 p-5 opacity-100 text-4xl font-extrabold text-custom-red
      bg-gray-100 shadow-lg rounded-full  duration-300 
      hover:text-opacity-70"
        onClick={() => setShowAgent(true)}
      >
        <FaPhoneAlt />
      </button>

      {showAgent && (
        <div className="bg-white shadow-xl rounded fixed z-30 bottom-10 left-3 lg:left-10">
          <div
            className="absolute top-2 right-2 text-lg text-slate-700 hover:text-custom-red duration-300"
            onClick={() => setShowAgent(false)}
          >
            <FaTimes />
          </div>
          <div className="flex flex-col items-center gap-1 px-14 py-10">
            <div className="text-custom-red text-7xl">
              <FaUserCircle />
            </div>
            <h1 className="heading-sm">Safkon Industries Ltd</h1>
            <p className="text-xs">Agent</p>
            <div className="flex items-center text-custom-red cursor-pointer hover:text-black duration-300">
              <FaPhoneAlt className="mr-1 text-xs" />
              <a
                href="https://api.whatsapp.com/send?phone=+8801743136127"
                className="text-sm"
              >
                +8801743136127
              </a>
            </div>
            <div
              className="absolute bottom-2 text-2xl text-slate-600 hover:text-custom-red duration-300"
              onClick={() => setShowIcons(!showIcons)}
            >
              {!showIcons ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>

          {showIcons && (
            <div className="border-t px-6 pt-5 pb-6  flex justify-between gap-3 text-4xl">
              <div className="text-blue-400 hover:opacity-70 duration-300">
                <FaTelegram />
              </div>
              <div className="text-green-500 hover:opacity-70 duration-300">
                <FaWhatsapp />
              </div>
              <div className="text-blue-700 hover:opacity-70 duration-300">
                <FaViber />
              </div>
              <div className="text-blue-500 hover:opacity-70 duration-300">
                <FaFacebookMessenger />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Agent;
