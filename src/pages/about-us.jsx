import React from "react";
import Navbar from "../components/Navbar/navbar";
// import Services from "../components/Services/services";
import Services from "../components/AboutUsServices/services";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import appData from "../data/app.json";
import Clients from "../components/Clients/clients";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import PagesHeader from "../components/Pages-header";
// import AboutIntro from "../components/About-intro";
import AboutSection from "../components/About-page-section/about-page-section";
import LightTheme from "../layouts/Light";
import Team from "../components/Team/team";
import MinimalArea from "../components/Minimal-Area/minimal-area";
import VideoBackground from "../components/video-background/video-background";
import VideoComponentData from "../data/sections/AboutintroVideo.json";
import TextImageBannerData from "../data/sections/text-on-image.json";
import ImageRight from "../components/text-right-image/text-right-image";
import TextImageBanner from "../components/text-on-image/text-on-image";
import SContactForm from "../components/s-contact-form/s-contact-form";

const About = () => {
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
    <LightTheme>
      {/* theme="themeL" */}
      <Navbar nr={navbarRef} lr={logoRef} />
      <VideoBackground sliderRef={fixedSlider} data={VideoComponentData} />
      <div ref={MainContent} className="main-content">
        {/* <PagesHeader /> */}
        <MinimalArea />
        <AboutSection />
        <ImageRight />
        <TextImageBanner {...TextImageBannerData} />
        <div style={{ marginTop: "4rem" }}>
          <SContactForm
            heading={
              "Let AA Growth Grid be your trusted partner in achieving success on Amazon."
            }
            description={
              "Contact us today to learn more about how we can help your brand thrive and excel in the ever-evolving world of e-commerce."
            }
          />
        </div>
        <Footer />
      </div>
    </LightTheme>
  );
};

export default About;
