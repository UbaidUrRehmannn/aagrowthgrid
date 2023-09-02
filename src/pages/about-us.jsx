import React from "react";
import Navbar from "../components/Navbar/navbar";
// import Services from "../components/Services/services";
import Services from "../components/AboutUsServices/services";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import Clients from "../components/Clients/clients";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import PagesHeader from "../components/Pages-header";
import AboutIntro from "../components/About-intro";
import LightTheme from '../layouts/Light'
import Team from "../components/Team/team";
import MinimalArea from "../components/Minimal-Area/minimal-area";
import VideoBackground from "../components/video-background/video-background";
import VideoComponentData from "../data/sections/AboutintroVideo.json"


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
     } else {
       navbar.classList.remove("nav-scroll");
     }
   });
 }, [fixedSlider,MainContent, navbarRef]);
  return (
    <LightTheme>
      {/* theme="themeL" */}
      <Navbar nr={navbarRef} lr={logoRef}  />
      <VideoBackground sliderRef={fixedSlider} data={VideoComponentData}/>
      <div ref={MainContent} className="main-content">
        {/* <PagesHeader /> */}
        <AboutIntro />
        <Services style="4item" />
        <VideoWithTestimonials />
        {/* <SkillsCircle from="aboutPage" /> */}
        <div className="mt-70">

        <Team />
        </div>
        <MinimalArea />
        <Clients theme="light" />
        <CallToAction />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default About;
