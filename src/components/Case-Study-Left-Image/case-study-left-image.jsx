/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const CaseStudyLeftImage = () => {
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
        <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/about-us/about-section.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h5 className="wow color-font">🚀 Fueling Success as Amazon Wholesale Consultants</h5>
              <p className="wow txt" data-splitting>
                In April 2022, AA Growth Grid embarked on a transformative journey as Amazon Wholesale Consultants. Our dedicated client entrusted us with a brand-new Amazon account, setting the stage for an inspiring partnership. 🌟
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> 🌱 The Vision and the Challenges
                  </h6>
                  <p>
                    At the starting line, our client had a vision to turn their Amazon venture into a thriving business. However, the path ahead was fraught with challenges and intense competition. Previous service providers had fallen short of expectations. 💡
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> 🎯 Challenge Accepted: A Journey of Growth
                  </h6>
                  <p>
                    Determined and armed with expertise, we accepted the challenge. Our journey on Amazon was a rollercoaster ride of learning, adapting, and strategic thinking. We worked tirelessly to overcome obstacles and achieve success together. 💪
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> 💰 A Remarkable 2022 Milestone
                  </h6>
                  <p>
                    Fast forward to 2022, and our collaboration bore fruit. Our client`&apos;s Amazon account not only surpassed $250k+ in sales but achieved an astonishing 22% Return on Investment (ROI). This milestone was more than just numbers; it was a testament to trust and dedication. 📈 👏
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
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

export default CaseStudyLeftImage;
