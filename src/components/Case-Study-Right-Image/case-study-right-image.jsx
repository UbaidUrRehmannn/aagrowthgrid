/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const CaseStudyRightImage = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h5 className="wow color-font">🌟 Partnering for Amazon Triumph</h5>
              <p className="wow txt" data-splitting>
                We had the privilege of teaming up with a determined client embarking on an extraordinary Amazon adventure. This case study showcases the remarkable power of strategic thinking, trust, and the courage to challenge conventions.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> 🌱 The Genesis: A New Amazon Account
                  </h6>
                  <p>
                  Our client, armed with lifelong savings and an unwavering desire for growth, entrusted us with a pristine Amazon account. The challenge was clear: double the investment at any cost.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> 💡 Strategy Unleashed: The Unexpected Twist
                  </h6>
                  <p>
                    In a realm where most shy away from running PPC campaigns in Amazon Wholesale, we saw an opportunity. Our approach aimed to build enduring supplier relationships by adding value to the business. This strategy was a game-changer, earning us trust and exclusivities in a win-win scenario.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> 🚀 The Climb: <b>$85k+</b> Sales in Just 4 Months
                  </h6>
                  <p>
                  With sheer determination and precision, we navigated the complexities of Amazon`&apos;s wholesale landscape. Within a mere four months, we shattered the $85k+ sales target. Our client`&apos;s lifelong savings were well on the path to doubling, and a remarkable 35% ROI was the icing on the cake. 📈 💪
                  </p>
                </li>
              </ul>
            </div>
          </div>
        <div className="col-lg-6">
            <div className="img bottom-padding-less-img">
              <img
                className="thumparallax-down"
                src="/img/about-us/about-section.webp"
                alt=""
              />
            </div>
          </div>
          
          
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center mb-60">
          <Link href="/about-us">
            <a className="butn bord curve mt-30">
              <span> Download Case Study</span>
            </a>
          </Link>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyRightImage;
