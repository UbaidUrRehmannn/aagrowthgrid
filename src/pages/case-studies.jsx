import React from "react";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import CardRightImage from "../components/Card-right-image/Card-Right-Image";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import appData from "../data/app.json";
import HomeServices from "../components/Home-services/HomeServices";
import ServicesFeaturesData from "../data/sections/services-data-one.json";
import ServicesFeaturesDataTwo from "../data/sections/services-data-two.json";
import CaseStudiesIntro from "../data/sections/Case-Studies/Case-Studies-Intro.json";
import SContactForm from "../components/s-contact-form/s-contact-form";
import TextImageBanner from "../components/text-on-image/text-on-image";
import TextImageBannerData from "../data/sections/services-text-on-image.json";
import CaseStudyLeftImage from "../components/Case-Study-Left-Image/case-study-left-image"
import CaseStudyRightImage from "../components/Case-Study-Right-Image/case-study-right-image"

const WorksLight = () => {
  const fixedSlider = React.useRef(null);
  // const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      // if (fixedHeader.current) {
      //   var slidHeight = fixedHeader.current.offsetHeight;
      // }
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

  return (
    // <LightTheme>
    //   <div className="circle-bg">
    //     <div className="circle-color fixed">
    //       <div className="gradient-circle"></div>
    //       <div className="gradient-circle two"></div>
    //     </div>
    //   </div>
    //   <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
    //   <WorksHeader sliderRef={fixedHeader} />
    //   <div ref={MainContent} className="main-content">
    //     <WorksStyle2 grid={2} hideFilter filterPosition="center" />
    //     <Footer />
    //   </div>
    // </LightTheme>
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <IntroWithSlider sliderRef={fixedSlider} data={CaseStudiesIntro} />
        <div ref={MainContent} className="main-content">
          <CaseStudyLeftImage />
          <CaseStudyRightImage />
          {/* <CardRightImage />
          <TextImageBanner {...TextImageBannerData}/>
          <HomeServices data={ServicesFeaturesData} heading={ "Wether you are a Brand or a Third Party Seller, you got you covered with our services"}/>
          <HomeServices data={ServicesFeaturesDataTwo} heading={"Why Choose AA Growth Grid?"}/> */}
          <VideoWithTestimonials />
          <div style={{ marginTop: "4rem" }}>
          <SContactForm heading={"Let AA Growth Grid be your trusted partner in achieving success on Amazon."} description={"Contact us today to learn more about how we can help your brand thrive and excel in the ever-evolving world of e-commerce."}/>
          </div>
          <Footer />
        </div>
      </LightTheme>
  );
};

export default WorksLight;