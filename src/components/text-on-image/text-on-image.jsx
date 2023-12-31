/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const TextImageBanner = ( data ) => {
  return (
    <section className="about-us">
      <div className="mt-4 about-background-image-2 d-flex align-items-center height-28 mt-70">
        <div className="container">
          <div className="row px-5 text">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="htit sm-mb30 text-center text-white">
                <h4>{data.heading}</h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="text">
                <Split>
                  <p className="wow txt mb-10 words chars splitting text-white text-center" data-splitting >
                  {data.description}
                  </p>
                  {/* <p className="wow txt words chars splitting" data-splitting>
                    {data.paragraph2}
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

export default TextImageBanner;
