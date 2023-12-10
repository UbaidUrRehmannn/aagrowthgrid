import React from "react";
import Navbar from "../components/Navbar/navbar";
import VideoBackground from "../components/video-background/video-background";
import ServicesVideoSection from "../data/sections/servicesintroVideo.json";
import Head from "next/head";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../components/About-us/about-us";
import CardRightImage from "../components/Card-right-image/Card-Right-Image";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import appData from "../data/app.json";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import HomeServices from "../components/Home-services/HomeServices";
import ServicesFeaturesData from "../data/sections/services-data-one.json";
import ServicesFeaturesDataTwo from "../data/sections/services-data-two.json";
import servicesIntroData from "../data/sections/services-intro.json";
import SContactForm from "../components/s-contact-form/s-contact-form";
import TextImageBanner from "../components/text-on-image/text-on-image";
import TextImageBannerData from "../data/sections/services-text-on-image.json";

const Homepage = () => {
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
    <>
      <Head>
        <title>
          AA Growth Grid | Strategic Consulting and Amazon Marketing Agency
        </title>
        <meta
          name="description"
          content="AA Growth Grid Strategic Consulting and Amazon Marketing Agency. We Specialize in Amazon Wholesale.We accelorates Amazon Sellers and brands to new heights"
        />
        {/* <link legacyBehavior rel="icon" href="/fav.png" /> */}
      </Head>
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <VideoBackground sliderRef={fixedSlider} data={ServicesVideoSection}/>
        {/* <IntroWithSlider sliderRef={fixedSlider} data={servicesIntroData} /> */}
        <div ref={MainContent} className="main-content">
          {/* <AboutUs /> */}
          <CardRightImage />
          <TextImageBanner {...TextImageBannerData}/>
          <div className="section-padding">
            <HomeServices
              data={ServicesFeaturesData}
              heading={
                "Wether you are a Brand or a Third Party Seller, you got you covered with our services"
              }
              />
          </div>
          <HomeServices
            data={ServicesFeaturesDataTwo}
            heading={"Why Choose AA Growth Grid?"}
          />
          <VideoWithTestimonials />
          <div style={{ marginTop: "4rem" }}>
          <SContactForm heading={"Let AA Growth Grid be your trusted partner in achieving success on Amazon."} description={"Contact us today to learn more about how we can help your brand thrive and excel in the ever-evolving world of e-commerce."}/>
          </div>
          <Footer />
        </div>
      </LightTheme>
    </>
  );
};

export default Homepage;
