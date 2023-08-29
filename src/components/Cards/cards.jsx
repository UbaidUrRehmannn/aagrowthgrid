import React from "react";
import Link from "next/link";
import Split from "../Split";
import cardsData from "../../data/sections/homepage-cards.json";

const Cards = ({ style, lines }) => {
  return (
    <section
      className={`services  bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="margin-top-bottom-60 text-center">
              {/* <h3 className="wow fadeIn" data-wow-delay=".5s">
                Our services
              </h3> */}
              <h3 className="wow color-font">
                Our Partners
              </h3>
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
              {/* style={{ textAlign: "center", display: "block" }} */}
              <div className="item-box partners-item-box" >
                <div>
                <Link href={feature.link}>
                  <img className="partners-image cursor-pointer" src={feature.image} />
                </Link>
                  {/* <span className={`icon ${feature.icon}`}></span> */}
                </div>
                <div className="cont">
                  <h5>{feature.title}</h5>
                  {/* <p>{feature.description}</p> */}
                  <div className="text">
                    <Split>
                      <p className="wow txt mb-10 words chars splitting"data-splitting>
                        {feature.description}
                      </p>
                      {/* <p className="wow txt words chars splitting" data-splitting>
                        {AboutInfo1Data.paragraph2}
                      </p> */}
                    </Split>
                  </div>
                  {/* {feature.content.map((a) => {return <p  key={feature.id}>{a}</p>})} */}
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
