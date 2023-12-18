import React from "react";
import Navbar from "../components/Navbar/navbar";
import Head from "next/head";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../components/About-us/about-us";
// import Services from "../components/Services/services";
// import Works from "../components/Works/works";
import Numbers from "../components/Numbers/numbers";
// import Testimonials from "../components/Testimonials/testimonials";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
// import SkillsCircle from "../components/Skills-circle/skills-circle";
// import Clients from "../components/Clients/clients";
import Blogs1 from "../components/blogs/Blogs1/blogs1";
import appData from "../data/app.json";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import Cards from "../components/Cards/cards";
import HomeServices from "../components/Home-services/HomeServices";
import VideoBackground from "../components/video-background/video-background";
import HomeVideoSection from "../data/sections/introVideo.json";
import homeFeaturesData from "../data/sections/homeServices.json";
import SContactForm from "../components/s-contact-form/s-contact-form";

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
        {/* <IntroWithSlider sliderRef={fixedSlider} /> */}
        <VideoBackground sliderRef={fixedSlider} data={HomeVideoSection}/>
        <div ref={MainContent} className="main-content">
          {/* <Cards /> */}
          <AboutUs />
          <Numbers />
          <HomeServices data={homeFeaturesData} heading={'Why Choose AA Growth Grid?'} />
          {/* <Services /> */}
          {/* <Works /> */}
          {/* <Testimonials /> */}
          <VideoWithTestimonials />
          {/* <SkillsCircle theme="light" /> */}
          {/* <div style={{marginTop: "4rem"}}>
          <Clients theme="light" />

          </div> */}
          <div style={{ marginTop: "6rem" }}>
            {/* <CallToAction /> */}
          <SContactForm heading={"Let AA Growth Grid be your trusted partner in achieving success on Amazon."} description={"Contact us today to learn more about how we can help your brand thrive and excel in the ever-evolving world of e-commerce."}/>
          </div>
          {/* <Blogs1 /> */}
          <Footer />
        </div>
      </LightTheme>
    </>

  );
};

export default Homepage;
