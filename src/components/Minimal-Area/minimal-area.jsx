/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
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
              <img className="thumparallax-down" src="/img/about-us/about-section.webp" alt="about-us | AA Growth Grid" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
              OUR VALUES SET US APART
              </p>
              <ul className="feat">
                <li className="agility wow fadeInUp" data-wow-delay=".2s">
                  <h5> <span>1</span> AGILITY </h5>
                  {/* <img className="custom-image-class" src="/img/about-us/AGILITY.svg" /> */}
                  <p>
                  AA Growth Grid is synonymous with agility. It&apos;s how we quickly adapt to market changes, internally and externally, to ensure products are always ideally positioned and our customers are provided with what they need. We have our fingers on every pulse in the supply and distribution, knowledge, and market chain. With rapid response and flexibility to our partner&apos;s and customer&apos;s needs, working with us helps you maximize productivity and minimize expense with no compromise on quality.
                  </p>
                </li>
                <li className="wow knowledge fadeInUp" data-wow-delay=".6s">
                  <h5> <span>2</span> KNOWLEDGE </h5>
                  <p>
                  Information is the driving force of our success. We prioritize learning and constantly improving our industry knowledge to remain a leading distribution company. Our proactive approach to seeking new information allows us to do more, make better decisions, create better value, and stand out amongst our competitors.
                  </p>
                </li>
                <li className="wow dedication fadeInUp" data-wow-delay="1s">
                  <h5> <span>3</span> DEDICATION </h5>
                  <p>
                  We&apos;re truly dedicated to the growth and success of our customers and partners. Your goals become our vision, your challenges become our problem, and your needs become our actions. Through our expertise, we know how to help you arrive at your objectives and through our dedication, we can help you meet your ambitious business objectives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
