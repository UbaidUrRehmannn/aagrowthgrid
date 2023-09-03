import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-section.json";

const AboutSection = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4">
            <div className="htit sm-mb30 text-center">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="text">
              <Split>
                <p className="wow txt mb-10 words chars splitting" data-splitting >
                  {AboutInfo1Data.paragraph1}
                </p>
                {/* <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph2}
                </p> */}
              </Split>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 about-background-image d-flex align-items-center height-25">
        <div className="container">
          <div className="row px-5 text">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="htit sm-mb30 text-center text-white">
                <h4>🌟 Crafting Success Stories Since 2018</h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="text">
                <Split>
                  <p className="wow txt mb-10 words chars splitting text-white text-center" data-splitting >
                  Our journey began in 2018, driven by a mission to turn brands' Amazon Wholesale aspirations into tangible victories. With a track record of nurturing 50+ brands to unparalleled success, we're not just consultants – we're your strategic partners, your Amazon architects, and your guides to unparalleled growth.
                  </p>
                  {/* <p className="wow txt words chars splitting" data-splitting>
                    {AboutInfo1Data.paragraph2}
                  </p> */}
                </Split>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
