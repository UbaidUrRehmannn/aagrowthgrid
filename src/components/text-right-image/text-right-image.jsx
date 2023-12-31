/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/text-right-image.json";

const ImageRight = () => {
  return (
    <section className="about-us section-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign md-mb50">
            <div className="">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-center text-u ls1 mb-15 ">
              ✨ A Symphony of Strategy and Expertise
              </h3>
              <div className="text">
                {/* <Split>
                  <p className="wow txt mb-10 words chars splitting"data-splitting>
                    {AboutUs1Date.paragraphOne}
                  </p>
                </Split> */}
                <p className="text-justify">{AboutUs1Date.paragraphOne}</p>
              </div>
              {/* <Link href="/case-studies">
                <a className="butn bord curve mt-30">
                  <span>CASE STUDIES</span>
                </a>
              </Link> */}
            </div>
          </div>
          {/* <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="row mt-70">
        {/* <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
          </div> */}
          <div className="col-lg-12 valign md-mb50">
            <div className="">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-center text-u ls1 mb-15 ">
              🌐 From Struggle to Stardom
              </h3>
              <div className="text">
                {/* <Split>
                  <p className="wow txt mb-10 words chars splitting"data-splitting>
                    {AboutUs1Date.paragraphOne}
                  </p>
                </Split> */}
                <p className="text-justify">{AboutUs1Date.paragraphTwo}</p>
              </div>
              {/* <Link href="/case-studies">
                <a className="butn bord curve mt-30">
                  <span>CASE STUDIES</span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-70">
          <div className="col-lg-12 valign md-mb50">
            <div className="">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-center text-u ls1 mb-15 ">
              📈 Strategizing Your Success
              </h3>
              <div className="text">
                {/* <Split>
                  <p className="wow txt mb-10 words chars splitting"data-splitting>
                    {AboutUs1Date.paragraphOne}
                  </p>
                </Split> */}
                <p className="text-justify">{AboutUs1Date.paragraphThree}</p>
              </div>
              {/* <Link href="/case-studies">
                <a className="butn bord curve mt-30">
                  <span>CASE STUDIES</span>
                </a>
              </Link> */}
            </div>
          </div>
          {/* <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ImageRight;
