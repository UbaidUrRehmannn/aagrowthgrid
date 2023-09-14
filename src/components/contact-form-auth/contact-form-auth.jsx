import React, { useState } from "react";
import successToastMessage from "../../common/successToastMessage";

const ContactFormAuth = ({ noLine, heading, description, onAuthentication }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const correctUsersList = [
    {
      username: "ubaidurrehman128@gmail.com",
      pass: "Ubaid",
    },
    {
      username: "ali@gmail.com",
      pass: "ali123",
    },
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const trimmedUserName = userName.trim();
    const trimmedPassword = password.trim();

    // Check if the trimmed username and password match any entry in the correctUsersList
    const matchingUser = correctUsersList.find(
      (user) =>
        user.username === trimmedUserName && user.pass === trimmedPassword
    );

    if (matchingUser) {
      onAuthentication(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  // const handlePasswordSubmit = (e) => {
  //   e.preventDefault();
  //   const trimmedUserName = userName.trim();
  //   const trimmedPassword = password.trim();
  //   console.log("trimmedUserName: ", trimmedUserName, "trimmedPassword: ", trimmedPassword);
  // };
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
                    <label>Username</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
