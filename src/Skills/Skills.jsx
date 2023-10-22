import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { Progress } from "antd";

function Skills() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const textShadowStyle = {
    textShadow: "8px 8px 12px rgba(0, 0, 0, 0.5)",
  };
  const twoColors = { '0%': '#656666  ', '100%': '#414747' };
  return (
    <>
 <div className="section" id="skills" style={textShadowStyle}>
  <div className="py-10 px-5 lg:mx-12 sm:mx-4 ">
    <div className="Name uppercase text-5xl text-center text-gray-400 mt-5 pt-5 font-bold wow fadeInUp">
    Tools I use
    </div>
    <div className="flex mt-10 justify-center wow slideInUp">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        <div className=" p-3 drop-shadow-xl ">
          <Progress type="circle" percent={70} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            React js
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={89} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            HTML + CSS
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={68} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            BOOTSTRAP
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={72} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            TAILWIND CSS
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-10 justify-center wow slideInUp">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={72} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            sass
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={75} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            JAVASCRIPT
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={90} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            GIT
          </div>
        </div>
        <div className=" p-3 drop-shadow-xl">
          <Progress type="circle" percent={50} size={160} trailColor="#313434" strokeColor={twoColors}/>
          <div className="text-lg text-center text-white uppercase font-semibold mt-3 wow fadeInUp">
            figma
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="divider-grad-mask mt-10"></div>

    </>
  );
}

export default Skills;
