import React from "react";
import Link from "next/link";
import cardsData from "../../data/sections/homepage-cards.json";

const Cards = ({ style, lines }) => {
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
          {cardsData.map((feature) => (
            <div
              key={feature.id}
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={`${
                feature.id == 1
                  ? ".3"
                  : feature.id === 2
                  ? ".7"
                  : feature.id === 3
                  ? ".9"
                  : ".9"
              }s`}
            >
              <div
                style={{ textAlign: "center", display: "block" }}
                className="item-box"
              >
                <div>
                  <img className="services-image" src={feature.image} />
                  {/* <span className={`icon ${feature.icon}`}></span> */}
                </div>
                <div className="cont">
                  <h6>{feature.title}</h6>
                  {feature.content.map((a) => {return <p  key={feature.id}>{a}</p>})}
                  {/* <p>{feature.content1}</p>
                  <p>{feature.content2}</p>
                  <p>{feature.content3}</p>
                  <p>{feature.content4}</p>
                  <p>{feature.content5}</p> */}

                  <Link href={feature.link}>
                    <a className="butn bord curve mt-30">
                      <span>{feature.buttontext}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
