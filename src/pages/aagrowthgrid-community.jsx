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
import Communityintro from "../data/sections/Community/Community-intro.json";
import SContactForm from "../components/s-contact-form/s-contact-form";
import TextImageBanner from "../components/text-on-image/text-on-image";
import TextImageBannerData from "../data/sections/services-text-on-image.json";
import CommunityCardRightImage from "../components/Community-Right-Image/community-right-image"
import CommunityCardLeftImage from "../components/Community-Left-Image/community-left-image"
import CommunityAboutSection from "../components/Community-about-section/community-about-section"
import AboutUs1DataRight from "../data/sections/Community/community-card-left-text.json";
import AboutUs1DataLeft from "../data/sections/Community/community-card-right-text.json";


const WorksLight = () => {
  const fixedSlider = React.useRef(null);
  // const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const renderCards = () => {
    const cards = [];
    const maxLength = Math.max(AboutUs1DataRight.length, AboutUs1DataLeft.length);

    for (let i = 0; i < maxLength; i++) {
      if (AboutUs1DataRight[i]) {
        cards.push(<CommunityCardRightImage key={`right-${i}`} data={AboutUs1DataRight[i]} />);
      }

      if (AboutUs1DataLeft[i]) {
        cards.push(<CommunityCardLeftImage key={`left-${i}`} data={AboutUs1DataLeft[i]} />);
      }
    }

    return cards;
  };

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
        <IntroWithSlider sliderRef={fixedSlider} data={Communityintro} />
        <div ref={MainContent} className="main-content">
          <CommunityAboutSection />
          {renderCards()}
          {/* <CommunityCardRightImage />
          <CommunityCardLeftImage /> */}
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