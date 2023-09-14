import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import appData from "../data/app.json";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import servicesIntroData from "../data/sections/services-intro.json";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import ContactFormAuth from "../components/contact-form-auth/contact-form-auth"
import MinimalArea from "../components/Minimal-Area/minimal-area";
import ContactFormData from "../components/Contact-Form-Data/contact-form-data";
import contactformdata from "../data/contactformdata/contactformentries.json";

const ProtectedPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const handleAuthentication = (authenticated) => {
    setAuthenticated(authenticated);
  };

    React.useEffect(() => {
      setInterval(() => {
        if (fixedSlider.current) {
          var slidHeight = fixedSlider.current.offsetHeight;
        }
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }, 1000);
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
          logo.setAttribute("src", appData.darkLogo);
        } else {
          navbar.classList.remove("nav-scroll");
          logo.setAttribute("src", appData.lightLogo);
        }
      });
    }, [fixedSlider, MainContent, navbarRef]);
  if (authenticated) {
    return (
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        {/* <IntroWithSlider sliderRef={fixedSlider} data={servicesIntroData} /> */}
        <div ref={MainContent} className="main-content">
          <ContactFormData
            data={contactformdata}
            heading={"Contact Form Entries"}
          />
          <Footer />
        </div>
      </LightTheme>
    );
  }
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div ref={MainContent} className="main-content">
        <ContactFormAuth onAuthentication={handleAuthentication} />
      </div>
    </LightTheme>
  );
};

export default ProtectedPage;
