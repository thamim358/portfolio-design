import React, { useEffect } from "react";
import "../Header/Header.scss";
import thamimpdf from "../img/Thamim Resume2.pdf";
import WOW from "wow.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faMotorcycle,
  faGamepad,
  faHeadphones,
  faPlaneDeparture,
  faDumbbell,
  faMoneyBill,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
function AboutMe() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const textShadowStyle = {
    textShadow: "8px 8px 12px rgba(0, 0, 0, 0.5)",
  };
  const cardsData = [
    {
      logo: (
        <FontAwesomeIcon
          icon={faGamepad}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "games",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faHeadphones}
          className="text-gray-500  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "music",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faPlaneDeparture}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "travel",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faTheaterMasks}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "cinema",
    },
  ];
  const cardsData2 = [
    {
      logo: (
        <FontAwesomeIcon
          icon={faMoneyBill}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "money",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faDumbbell}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "gym",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faCarSide}
          className="text-blue-400  transform transition duration-500 hover:scale-125 "
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "cars",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faMotorcycle}
          className="text-blue-400  transform transition duration-500 hover:scale-125"
          size="sm"
          style={{ color: "#181919" }}
        />
      ),
      title: "bikes",
    },
  ];
  return (
    <>
      <div className="section wave" id="aboutsection" style={textShadowStyle}>
        <div className="py-10 px-5 lg:mx-12 sm:mx-4">
          <div className="Name uppercase text-center text-5xl text-gray-500  font-bold wow fadeInUp">
            About Me
          </div>
          <p className="wow fadeInUp mt-5 text-gray-400 text-base font-thin text-justify">
            Dedicated and motivated frontend developer with a strong foundation
            in web development technologies. Recently graduated with a
            Bachelor's degree in Computer Science and currently pursuing a
            master's. Consistently worked in HTML, CSS, JavaScript, and
            React.js. Passionate about creating user-friendly and visually
            appealing interfaces. Completed multiple projects during
            internships, showcasing proficiency in frontend development
            concepts. Seeking an opportunity to apply my skills and contribute
            to building innovative web applications.
          </p>
          <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row items-center ">
            {/* <div className="w-full lg:w-1/2  mt-7 ">
        <p className="text-gray-500  wow fadeInUp  text-xl font-medium uppercase mb-5  ">
          Personal Details
        </p>
        <p className="text-gray-500  wow fadeInUp  mb-5 text-lg font-medium">
          Name: <span className="text-gray-400">Thamim Ansari</span>
        </p>
        <p className="text-gray-500  wow fadeInUp  mb-5 text-lg font-medium">
          Address: <span className="text-gray-400">Chennai, India</span>
        </p>
        <p className="text-gray-500  wow fadeInUp  mb-5 text-lg font-medium">
          Phone: <span className="text-gray-400">+91 8072098022</span>
        </p>
        <p className="text-gray-500  wow fadeInUp  mb-8 text-lg font-medium">
          Email: <span className="text-gray-400">thamimansari358@gmail.com</span>
        </p>
        <div className=" mt-2 wow bounceIn wow fadeInUp">
                <a
                  className=" bg-gradient-to-r from-gray-400 to-gray-600 text-white  hover:text-[#005eff] hover:from-pink-500 hover:to-yellow-500 rounded-lg font-bold px-7 p-3 cursor-pointer"
                  href={thamimpdf}
                  download="Example-PDF-document"
                  target="_blank"
                >
                  DOWNLOAD CV
                </a>
              </div>
      </div> */}
            <div className="w-full  mt-10">
              <p className="text-gray-500 wow fadeInUp mb-5 text-xl font-medium uppercase">
                My Interests
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-4 gap-4 wow fadeInUp">
                {cardsData.map((card, index) => (
                  <div className="p-3" key={index}>
                    <div className="bg-white bg-opacity-5 rounded-lg shadow-lg p-2">
                      <div className="text-center">
                        <div className="text-blue-400 text-4xl">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-sm text-center text-white uppercase font-semibold">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-4 gap-4 wow fadeInUp">
                {cardsData2.map((card, index) => (
                  <div className="p-3" key={index}>
                    <div className="bg-white bg-opacity-5 rounded-lg shadow-lg p-2">
                      <div className="text-center">
                        <div className="text-blue-400 text-4xl">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-sm text-center text-white uppercase font-semibold">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-4xl font-sans font-semibold text-white mt-5 wow fadeInUp">
            Let's work together
          </div>
          <div className="wow fadeInUp text-gray-400 text-base font-medium text-justify sm: mt-3 lg:max-w-3xl ">
            Are you ready to transform your digital journey into an
            unforgettable user experience? Join forces with me, your dedicated
            UX designer, and let's create designs that captivate, engage, and
            leave a lasting impression.
          </div>
          <div className="mt-5 wow fadeInUp">
            <Link
              className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold py-2 px-3 rounded hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer "
              to="contactme"
              spy={true}
              smooth={true}
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <div className="divider-grad-mask wow fadeInUp mt-10"></div>
    </>
  );
}

export default AboutMe;
