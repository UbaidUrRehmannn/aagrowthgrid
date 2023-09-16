import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import appData from "../data/app.json";
import AuthContactDataNavBar from '../components/Auth-Contact-Data-NavBar/Auth-Contact-Data-NavBar'
import LightTheme from "../layouts/Light";
import Footer from "../components/Footer/footer"
import ContactFormAuth from "../components/contact-form-auth/contact-form-auth"
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

  useEffect(() => {
    const isAuth = sessionStorage.getItem('auth') === 'true';
    setAuthenticated(isAuth);
  }, []);

    useEffect(() => {
      setInterval(() => {
        if (fixedSlider.current) {
          var slidHeight = fixedSlider.current.offsetHeight;
        }
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }, 1000);
      document.querySelector("body").classList.add("contact-page");
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
    }, [fixedSlider, MainContent, navbarRef]);
  if (authenticated) {
    return (
      <LightTheme>
        {/* <Navbar nr={navbarRef} lr={logoRef} /> */}
      {/* <AuthContactDataNavBar nr={navbarRef} lr={logoRef} /> */}
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
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
      {/* <AuthContactDataNavBar nr={navbarRef} lr={logoRef} /> */}
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />

      <div ref={MainContent} className="main-content">
        <ContactFormAuth onAuthentication={handleAuthentication} />
      </div>
    </LightTheme>
  );
};

export default ProtectedPage;
