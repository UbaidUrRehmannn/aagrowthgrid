import React, { useState } from "react";
import successToastMessage from "../../common/successToastMessage";
import { FaBeer, FaEye, FaEyeSlash } from "react-icons/fa";

const ContactFormAuth = ({ noLine, heading, description, onAuthentication }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const correctUsersList = [
    {
      username: "ubaidurrehman@gmail.com",
      pass: "ubaid",
    },
    {
      username: "ali@gmail.com",
      pass: "ali123",
    },
  ];

  // const handlePasswordSubmit = (e) => {
  //   e.preventDefault();
  //   const trimmedUserName = userName.trim();
  //   const trimmedPassword = password.trim();
  //   // Check if the trimmed username and password match any entry in the correctUsersList
  //   const matchingUser = correctUsersList.find(
  //     (user) =>
  //       user.username === trimmedUserName && user.pass === trimmedPassword
  //   );

  //   if (matchingUser) {
  //     sessionStorage.setItem('auth', 'true');
  //     onAuthentication(true);
  //   } else {
  //     alert("Incorrect password. Please try again.");
  //   }
  // };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    const trimmedUserName = userName.trim().toLowerCase();
    const trimmedPassword = password.trim();
    
    // Check if the trimmed and lowercase username and password match any entry in the correctUsersList
    const matchingUser = correctUsersList.find(
      (user) =>
        user.username.toLowerCase() === trimmedUserName &&
        user.pass === trimmedPassword
    );
  
    if (matchingUser) {
      sessionStorage.setItem('auth', 'true');
      onAuthentication(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };
  
  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <div className="login-box">
                <h2>Login</h2>
                <form>
                  <div className="user-box">
                    <input
                      type="email"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Username </label>
                  </div>
                  {/* <div className="user-box">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                    <span onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <FaEyeSlash /> // Change to your eye-slash icon
                      ) : (
                        <FaEye /> // Change to your eye icon
                      )}
                    </span>
                  </div> */}
                  <div className="user-box">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={togglePasswordVisibility} className="password-toggle">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <label>Password</label>
                  </div>
                  <a onClick={handlePasswordSubmit} className="cursor-pointer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAuth;
