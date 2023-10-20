import React, { useEffect } from "react";
import "../Header/Header.scss";
import "../Footer/Footer.scss"
import WOW from "wow.js";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const textShadowStyle = {
    textShadow: "8px 8px 12px rgba(0, 0, 0, 0.5)",
  };
  return (
    <>
      <footer class="dashboard  px-10 mt-5 py-4 p-5" style={textShadowStyle}>
        <div class="container mx-auto text-center">
          <div className="text-gray-400 text-3xl lg:text-2xl font-sans font-extrabold wow slideInDown ">
            &copy; 2023 Thamim Ansari. All rights reserved.
          </div>
          <p class="text-white text-sm font-sans font-base  wow slideInDown mt-3">
            Frontend Web Developer | HTML | CSS | JavaScript |Tailwind css
          </p>
          <p class="text-white text-sm font-sans font-sm   wow slideInDown mt-3">
            Available for freelance opportunities. Contact me for collaboration.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
