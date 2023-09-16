/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const AuthContactDataNavBar = ({ lr, nr, theme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
            <a className="logo">
              <img ref={lr} src={appData.darkLogo} alt="logo" />  
            </ a>
        </Link>

        <button className="navbar-toggler" type="button" onClick={handleMobileDropdown} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">Home</a>
              </Link>
            </li>
            {/* OnClick nav sub menu open */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span className="nav-link nav-link-contect-auth dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                Services
              </span>
              <div className="dropdown-menu">
                <Link href={`/amazon-marketing-services`}>
                  <a className="dropdown-item">Amazon PPC Management</a>
                </Link>
                <Link href={`/brand-management-services`}>
                  <a className="dropdown-item">Amazon Account Management</a>
                </Link>
              </div>
            </li> */}
            {/* OnMouseOver nav sub menu open */}
            {/* <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <span className="nav-link nav-link-contect-auth dropdown-toggle" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen}>
                Services
              </span>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link href={`/amazon-marketing-services`}>
                  <a className="dropdown-item">Amazon PPC Management</a>
                </Link>
                <Link href={`/brand-management-services`}>
                  <a className="dropdown-item">Amazon Account Management</a>
                </Link>
              </div>
            </li> */}

            <li className="nav-item">
              <Link href={`/about-us`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/services`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">Services</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link nav-link-contect-auth">Case Studies</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href={`/case-studies`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">Case Studies</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/blogs`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">Blogs</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/contact`}>
                <a className="nav-link nav-link-contect-auth hover-underline-animation-navbar">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AuthContactDataNavBar;
