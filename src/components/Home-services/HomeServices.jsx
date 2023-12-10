import React from "react";
import Link from "next/link";
// import featuresData from "../../data/sections/features.json";

const HomeServices = ({ style, lines, data, heading }) => {
  const numberOfValues = data.length;
  const interval = 0.4; // Set the desired interval (in seconds)

  const newDelays = [];

  for (let i = 0; i < numberOfValues; i++) {
    const newDelay = (i * interval).toFixed(1) + "s";
    newDelays.push(newDelay);
  }
  return (
    <section className={`services bords ${ style === "4item" ? "lficon" : lines ? "" : "" }`} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {heading}
              </h6>
              {/* <h3 className="wow color-font">
                We are a new digital product development agency
              </h3> */}
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"}
          {data.map((feature, index) => (
            <div key={feature.id} className="col-lg-6 mb-4 wow fadeInLeft" data-wow-delay={newDelays[index]} >
              {/* <div className="card-container"> */}
                <div className="item-box home-services-item-box display-flex-block" >
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <img className="services-image" src={feature.image} /> */}
                    <span className={`icon ${feature.icon}`}></span>
                  </div>
                  <div className="cont pl-4">
                    <h6>{feature.title}</h6>
                    <p className="text-justify">{feature.content1}</p>
                  </div>
                </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
