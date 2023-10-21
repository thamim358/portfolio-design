import React, { useEffect } from "react";
import WOW from "wow.js";
import subba from "../img/subba.png";
import srm from "../img/srm.png";
import port from "../img/port.png";
import zynerd from "../img/zynerd.png";
import hammer from "../img/hammer.png";
import order from "../img/order.png";
import boot from "../img/boot.png"
import save from "../img/save.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
function Project() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const textShadowStyle = {
    textShadow: "8px 8px 12px rgba(0, 0, 0, 0.5)",
  };
  const projectData = [
    {
      title: "Election Campaign",
      description: "I have designed and developed a comprehensive election campaign website for an individual.who's Satnding in election in MorrisiVille town. ",
      imageSrc: subba,
      link: "https://electioncampaign2024.web.app/",
    },
    {
      title: "International Conferenece",
      description: "I have had the opportunity to create a dynamic and informative website for an international conference hosted by my college.",
      imageSrc: srm,
      link: "https://srmistvdp12.web.app/",
    },
    {
      title: "Portfolio",
      description: " Developed and Designed a personalized portfolio website with the help of HTML, CSS, and JavaScript with React.js to showcase my skills",
      imageSrc: port,
      link: "https://thamim1326.web.app/",
    },
    
    // Add more objects as needed
  ];
  const projectData2 = [
    {
      title: "Zynerd",
      description: "I had the privilege of working as a frontend developer for Corvnata Analytics, where I played a key role in the development of a NEET Education Counseling webApp.",
      imageSrc: zynerd,
      link: "https://example.com/project1",
    },
    {
      title: "Hammer Your Cart",
      description: "I had the privilege of working as a Frontend developer  role in a OrderManagent, Using React.js to build the user interface.",
      imageSrc: hammer,
      link: "https://example.com/project2",
    },
    {
      title: "Order Management",
      description: " I have developed multiple user-friendly screens for efficient order processing and tracking.",
      imageSrc: order,
      link: "https://example.com/project3",
    },
    {
        title: "Boot Hardware",
        description: "Frontend Developer role in a ticketing tool, leveraging Redux and React.js to build the user interface.",
        imageSrc: boot,
        link: "https://example.com/project3",
      },
    
    // Add more objects as needed
  ];
  const projectData3 = [
    {
      title: "Save Ocean Life",
      videoSrc:save,
      description: "I've designing a visually captivating website focused on saving ocean life. This project involved creating an immersive user experience with 3D models integrated into a 'Dora Run'. ",
      link: "https://example.com/project1",
    },
  
    
    // Add more objects as needed
  ];
  
  return (
    <>
  <div className="section" id="project" style={textShadowStyle}>
    <div className="Name uppercase text-5xl text-gray-500 mt-5 pt-5 font-bold text-center wow rotateIn">
      Projects
    </div>
     <div className=" text-2xl uppercase text-white mt-5 pt-5 font-bold text-start wow fadeIUp ml-12">
      websites
    </div>
    <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <div className="flex" key={index}>
            <div
              className="bg-white bg-opacity-5 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-500"
              style={{ borderRadius: "30px" }}
            >
              <div className="relative ">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-auto p-3 "
            style={{borderRadius:'30px'}}
          />
        </div>
        <div className="p-3 ml-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
          <div className="flex justify-between items-center mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="text-gray-400  transform transition duration-500 hover:scale-125"
          size="xl"
          style={{ color: "#727676" }}
        />
            </a>
          </div>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className=" text-2xl uppercase text-white mt-5 pt-5 font-bold text-start wow fadeIUp ml-12">
     Software projects
    </div>
    <div className=" text-base uppercase text-gray-400 font-medium text-start wow fadeIUp ml-12">
     Corvanta Analytics as frontend developer
    </div>
    <div className="flex  justify-center mt-5 wow fadeInUp mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-4 gap-5">
        {projectData2.map((project, index) => (
          <div className="flex" key={index}>
            <div
              className="bg-white bg-opacity-5 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-500"
              style={{ borderRadius: "30px" }}
            >
              <div className="relative ">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-auto p-3 "
            style={{borderRadius:'30px'}}
          />
        </div>
        <div className="p-3 ml-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
          
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className=" text-2xl uppercase text-white mt-5 pt-5 font-bold text-start wow fadeIUp ml-12">
     UI/UX
    </div>
    <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
  {projectData3.map((project, index) => (
    <div className="flex" key={index}>
      <div
        className="bg-white bg-opacity-5 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-500"
        style={{ borderRadius: "30px" }}
      >
        <div className="relative aspect-ratio-16/9 p-3">
          <video
            width="100%"
            height="100%"
            controls
            className="rounded-2xl"
          >
            <source src={project.videoSrc} type="video/mp4" className="rounded-2xl"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-3 ml-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-gray-400 mt-2 pb-2">{project.description}</p>
         
        </div>
      </div>
    </div>
  ))}
</div>

</div>

  </div>
  <div className="divider-grad-mask mt-16"></div>
</>

  );
}

export default Project;
