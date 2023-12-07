import React from "react";
import Split from "../Split";
// import AboutInfo1Data from "../../data/sections/Community/community-about-section.json";

const CommunityAboutSection = (AboutInfo1Data) => {
  return (
    <section className="intro-section section-padding-top pb-0">
      <div className="mt-4 about-background-image d-flex align-items-center height-28">
        <div className="container">
          <div className="row px-5 text">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="htit sm-mb30 text-center text-white">
                <h3>Inside AA Growth Grid Community</h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="text">
                <Split>
                  <p className="wow txt mb-10 words chars splitting text-white text-center" data-splitting >
                  A Closer Look Join 100+ Other Thriving Members and Ignite Your Path to Profitability.
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
      <div className="container mt-25">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-1">
            <div className="htit sm-mb30 text-center">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="text">
              <Split>
                <p className="text-center wow txt mb-10 words chars splitting" data-splitting >
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
    </section>
  );
};

export default CommunityAboutSection;
