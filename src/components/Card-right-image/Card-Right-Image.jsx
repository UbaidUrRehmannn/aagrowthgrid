/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import ServicesCardRightImageData from "../../data/sections/ServicesCardRightImage.json";

const CardRightImage = () => {
  return (
    <section className="about-us section-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              {/* <h6 className="fw-100 text-u ls10 mb-10">
                {ServicesCardRightImageData.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {ServicesCardRightImageData.title}
              </h3> */}
              <div className="text">
                <p>{ServicesCardRightImageData.paragraphOne}</p>
                <p>{ServicesCardRightImageData.paragraphTwo}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={ServicesCardRightImageData.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardRightImage;
