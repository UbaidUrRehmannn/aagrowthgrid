import React from "react";
import Navbar from "../components/Navbar/navbar";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../components/About-us/about-us";
// import Services from "../components/Services/services";
// import Works from "../components/Works/works";
import Numbers from "../components/Numbers/numbers";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
// import SkillsCircle from "../components/Skills-circle/skills-circle";
// import Clients from "../components/Clients/clients";
import Blogs1 from "../components/blogs/Blogs1/blogs1";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import Cards from "../components/Cards/cards";
import HomeServices from "../components/Home-services/HomeServices";
// import IntroWithVideo from "../components/Intro-with-video/Intro-with-video";

const HomepageDark = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      {/* <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" />
        <Clients theme="dark" />
        <Blogs1 />
        <CallToAction />
        <Footer />
      </div> */}
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      {/* <IntroWithVideo sliderRef={fixedSlider} /> */}
      <div ref={MainContent} className="main-content">
        <Cards />
        <AboutUs />
        <Numbers />
        <HomeServices />
        {/* <Services /> */}
        {/* <Works /> */}
        {/* <Testimonials /> */}
        <VideoWithTestimonials />
        {/* <SkillsCircle theme="light" /> */}
        {/* <div style={{marginTop: "4rem"}}>
        <Clients theme="light" />

        </div> */}
        <div style={{ marginTop: "4rem" }}>
          <CallToAction />
        </div>
        <Blogs1 />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default HomepageDark;
