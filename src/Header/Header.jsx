import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { TypeAnimation } from "react-type-animation";
import thamimpdf from "../img/ThamimOctober.pdf";
import WOW from "wow.js";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Facebook, Instagram } from "iconsax-react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Header() {
  const textShadowStyle = {
    textShadow: "12px 12px 16px rgba(0, 0, 0, 0.5)",
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="Navbar"
        className="sticky top-0 left-0 right-0 w-full shadow-lg bg-opacity-5 bg-white nav-bar sm:w-full z-10 "
      >
        <div className=" sm:mx-auto md:mx-10 lg:mx-20 flex items-center justify-between py-4 ">
          <div className="text-white font-black font-mono text-3xl  ml-4">
            MTA
            {/* <img src={mta1} alt="wdwd" className=""/> */}
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white flex justify-end ml-10 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center wow lightSpeedIn`}
            >
              <li>
                <Link
                  className="text-white font-sans hover:text-gray-500 font-base  font-sans cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-gray-500  font-base font-sans cursor-pointer"
                  to="aboutsection"
                  spy={true}
                  smooth={true}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-gray-500 font-base  font-sans cursor-pointer"
                  to="project"
                  spy={true}
                  smooth={true}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-gray-500 font-base  font-sans cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-gray-500  font-base  font-sans cursor-pointer"
                  to="skills"
                  spy={true}
                  smooth={true}
                >
                  SKILLS
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-white font-sans hover:text-gray-500 font-base  font-sans cursor-pointer"
                  to="contactme"
                  spy={true}
                  smooth={true}
                >
                  CONTACT ME
                </Link>
              </li>

              <li className="wow BounceIn">
                <a
                  className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold py-2 px-3 rounded hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer"
                  to="donate"
                  spy={true}
                  smooth={true}
                  href={thamimpdf}
                  download="resume"
                  target="_blank"
                >
                  DOWNLOAD CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : "hidden"}`}>
        <div className="flex justify-between p-5 ">
          <div className="text-white font-mono font-bold text-3xl ">MTA</div>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-purple-600  focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* <div className=" "> */}
          <ul className="p-10">
            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                to="aboutsection"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                to="project"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                to="services"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
            </li>
            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                to="skills"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                SKILLS
              </Link>
            </li>

            <li className="">
              <Link
                className="text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                to="contactme"
                spy={true}
                smooth={true}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT ME
              </Link>
            </li>

            <li className="">
              <a
                  className=" bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl p-3 text-white font-sans hover:text-gray-400 text-xl font-bold font-sans cursor-pointer"
                  href={thamimpdf}
                  download="ThamimResume"
                  target="_blank"
                >
                  DOWNLOAD CV
              </a>
            </li>
          </ul>
        </div>
      {/* </div> */}

      {/* SHUBBA REDDY */}
      <div className="dashboard w-screen bg-fixed md:w-full h-fit  " id="home">
        <div className="mx-5">
          <div className="flex flex-col items-center justify-center">
            <div className="  lg:p-3px tracking-wider mt-12">
              <div className="wow fadeIn mt-12 pt-5">
                <div
                  className="text-white text-base  font-sans wow fadeInUp"
                  style={textShadowStyle}
                >
                  HI, I AM
                </div>
                <div
                  className="text-white text-7xl sm:text-7xl lg:text-9xl font-sans font-black wow fadeInUp"
                  style={textShadowStyle}
                >
                  THAMIM{" "}
                </div>
                <div
                  className="text-white text-base sm:text-sm lg:text-base font-bold text-end gap-2 wow fadeInUp"
                  style={textShadowStyle}
                >
                  A {""}
                  <span>
                    <TypeAnimation
                      sequence={[
                        " front-end developer",
                        1000,
                        " freelancer",
                        1000,
                        " Designer",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ display: "inline-block", textShadowStyle }}
                      className="text-gray-400 text-base sm:text-sm lg:text-base font-bold uppercase wow fadeInUp"
                      repeat={Infinity}
                    />
                  </span>
                </div>
              </div>

              {/* <div className="mt-7 wow bounceIn">
                <a
                  className=" bg-gradient-to-r from-[#005eff] to-gray-400 text-white  hover:text-[#005eff] hover:from-pink-500 hover:to-yellow-500 rounded-lg font-bold px-7 p-3 cursor-pointer"
                  href={thamimpdf}
                  download="Resume"
                  target="_blank"
                >
                  DOWNLOAD CV
                </a>
              </div> */}
              <div
                className="flex gap-3 mt-6 wow fadeInUp"
                style={textShadowStyle}
              >
                <a
                  href="https://instagram.com/___thamim__?igshid=ZDc4ODBmNjlmNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={32}
                    variant="Bold"
                    className="transform transition duration-500 hover:scale-125 text-gray-400 hover:text-white"
                  />
                </a>
                <a
                  href="https://www.facebook.com/thamim.ansari.3572846"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={32}
                    className="transform transition duration-500 hover:scale-125 text-gray-400 hover:text-white"
                    variant="Bold"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/thamim358"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="transform transition duration-500 hover:scale-125 text-gray-400 hover:text-white"
                  />
                </a>
                <a
                  href="https://www.github.com/thamim358"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={32}
                    className=" transform transition duration-500 hover:scale-125 text-gray-400  hover:text-white "
                  />
                </a>
              </div>
            </div>
            <div className="divider-grad-mask mt-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
