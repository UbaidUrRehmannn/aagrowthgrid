/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>5900 - Balcones Drive STE 13683 Austin, Texas, 78731</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <a
                      className=" cursor-pointer hover-underline-animation "
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:info@aagrowthgrid.com"
                    >
                      <p>info@aagrowthgrid.com</p>
                    </a>
                    {/* <a href=""><p>support@gmail.com</p></a> */}
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <a
                      className=" cursor-pointer hover-underline-animation "
                      target="_blank"
                      rel="noreferrer"
                      href="tel:+17373035655"
                    >
                      <p>+1 (737) 3035-655</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="copy-right">
                <p>We&apos;re not just consultants; we&apos;re your brand&apos;s voice, strategy, and growth catalyst.</p>
              </div>
              <div className="social">
                <a
                  target="_blank"
                  rel="noreferrer" 
                  href="https://www.linkedin.com/company/aa-growth-grid/about/?viewAsMember=true">
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="copy-right">
                <p>
                  {/* <Link href="/" > 
                    <a className="footer-link-style">AA Growth Grid</a>
                  </Link> © {new Date().getFullYear()}, All rights reserved. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hr-color-footer" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            hiiii
          </div>
          <div className="col-md-6 text-right">
            byyy
          </div>
        </div>
      </div> */}
      <hr className="hr-color-footer d-flex align-items-end" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-end">
            <div className="copy-right">
              <p>
                <Link href="/">
                  <a className="footer-link-style">AA Growth Grid</a>
                </Link>{" "}
                © {new Date().getFullYear()}, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
