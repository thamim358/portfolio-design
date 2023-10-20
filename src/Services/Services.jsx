import React, { useEffect } from "react";
import "./Skills.scss";
import WOW from "wow.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faDesktop,
  faMobileScreen,
  faCode,
  faPhone,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
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
          icon={faComputer}
          className="text-blue-400"
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "web development",
      description: " Developed a responsive website for Corvanta Analytics, implementing modern design principles and utilizing HTML, CSS, TailWind and JavaScript. Integrated smooth animations and transitions for an enhanced user experience.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="text-blue-400"
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "user interface",
      description: "An e-commerce store built with HTML, CSS, and JavaScript ReactJs. This responsive website provides a seamless shopping experience with dynamic product listing, a secure payment gateway, and user-friendly navigation.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faMobileScreen}
          className="text-blue-400 "
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "responsive design",
      description: "A personal portfolio website created using modern web technologies like Tailwind css for Mobile Responsive . Featuring a clean and minimalistic design, this website showcases my skills, It incorporates smooth scrolling etc.",
    },
  ];
  const cardsData2 = [
    {
      logo: (
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-blue-400"
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "web design",
      description: " Redesigned the website for Myself to enhance its visual appeal, user experience, and overall brand identity. Implemented a modern and responsive design, optimized page load speed, and improved site navigation to increase user engagement and conversion rates.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faCode}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "clean code",
      description: "My portfolio showcases clean and structurally organized code, highlighting my dedication to readability and maintainability in my projects The code in my portfolio is meticulously crafted with a focus on cleanliness and structure, enhancing its overall quality. ",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faPhone}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#181919" }}
        />
      ),
      title: "fast support",
      description: "efficient support is my priority, ensuring that I respond quickly to any inquiries or issues you may have. I strive to provide timely assistance and address your concerns promptly, ensuring a smooth and hassle-free experience throughout our collaboration.",
    },
  ];
  return (
    <>
      <div className="section" id="services" style={textShadowStyle}>
        <div className="Name uppercase text-5xl text-gray-500 mt-5 pt-5 font-bold text-center wow rotateIn">
          Services
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow slideInUp ">
          {cardsData.map((card, index) => (
            <div
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
              key={index}
            >
              <div className="bg-white bg-opacity-5 rounded-lg shadow-lg ">
                <div className="text-center p-4">{card.logo}</div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white uppercase font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm uppercase">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center wow slideInUp">
          {cardsData2.map((card, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
              key={index}
            >
              <div className="bg-white bg-opacity-5  rounded-lg shadow-lg ">
                <div className="text-center p-4">{card.logo}</div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white font-bold mb-2 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm uppercase">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider-grad-mask mt-10"></div>
    </>
  );
}

export default Services;
