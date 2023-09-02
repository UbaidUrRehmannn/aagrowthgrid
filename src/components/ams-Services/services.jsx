import React from "react";
import Link from "next/link";
// import featuresData from "../../data/sections/features.json";
import featuresData from "../../data/sections/featuresAms.json";

const Services = ({ style, lines }) => {
  const delays = [".3s", ".6s", ".9s", "1.2s", "1.5s", "1.8s"];
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our services
              </h6>
              {/* <h3 className="wow color-font">
                We are a new digital product development agency
              </h3> */}
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"}
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={delays[index]}
            >
              <div className="item-box">
                {/* <div>
                  <img className="services-image" src={feature.image} />
                
                </div> */}
                <div className="cont">
                  <h6>{feature.title}</h6>
                  <p>{feature.content1}</p>
                  

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
