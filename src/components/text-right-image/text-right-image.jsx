/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/text-right-image.json";

const ImageRight = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 valign md-mb50">
            <div className="mb-50">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-u ls1 mb-30 ">
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
          <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
            {/* <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-70">
        <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
            {/* <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div> */}
          </div>
          <div className="col-lg-7 valign md-mb50">
            <div className="mb-50">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-u ls1 mb-30 ">
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
        <div className="row mt-70 mb-70">
          <div className="col-lg-7 valign md-mb50">
            <div className="mb-50">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6> */}
              <h3 className="fw-600 text-u ls1 mb-30 ">
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
          <div className="col-lg-5 img p-0">
            <img src={AboutUs1Date.image} alt="" />
            {/* <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-4 about-background-image d-flex align-items-center height-25 mt-70">
        <div className="container">
          <div className="row px-5 text">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="htit sm-mb30 text-center text-white">
                <h4>Your Amazon Odyssey Begins Here</h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="text">
                <Split>
                  <p className="wow txt mb-10 words chars splitting text-white text-center" data-splitting >
                    As you embark on this Amazon odyssey, remember that your story is unique – and so is our approach. We&apos;re more than consultants; we&apos;re the architects of your Amazon narrative. Let&apos;s craft a saga of triumph together, rewriting the Amazon rulebook and defining a legacy that sets your brand apart.
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

export default ImageRight;
