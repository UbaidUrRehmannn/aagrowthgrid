import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import successToastMessage from "../../common/successToastMessage";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid Email Address";
    }
    return error;
  }
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is Required";
    } else if (!/^[a-zA-Z]+([ -][a-zA-Z]+)*$/i.test(value)) {
      error = "Invalid Name";
    }
    return error;
  }
  function validateSubject(value) {
    let error;
    if (!value) {
      error = "Subject is Required";
    }
    return error;
  }
  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is Required";
    }
    return error;
  }

  async function postJSON(data) {
    try {
      const response = await fetch("/api/postcontact", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      successToastMessage("Contact Form Submitted Successfully");
      values.name = "";
      values.email = "";
      values.phone = "";
      values.subject = "";
      values.message = "";
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  await postJSON(values);
                  resetForm(); // Reset the form fields
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          validate={validateName}
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name *"
                          required="required"
                        />
                        {errors.name &&
                          touched.name && (
                            <div className="text-danger">
                              {errors.name}
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_phone"
                          type="text"
                          name="phone"
                          placeholder="Phone Number (Optional)"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email *"
                          required="required"
                        />
                        {errors.email &&
                          touched.email && (
                            <div className="text-danger">
                              {errors.email}
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                            <Field
                              validate={validateSubject}
                              id="form_subject"
                              type="text"
                              name="subject"
                              placeholder="Subject *"
                              required="required"
                            />
                            {errors.subject &&
                              touched.subject && (
                                <div className="text-danger">
                                  {errors.subject}
                                </div>
                              )}
                          </div>
                    </div>
                    <div className="form-group">
                      <Field
                        validate={validateMessage}
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message *"
                        rows="4"
                        required="required"
                      />
                      {errors.message &&
                        touched.message && (
                          <div className="text-danger">
                            {errors.message}
                          </div>
                        )}
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a
                    className=" cursor-pointer hover-underline-animation "
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:info@aagrowthgrid.com"
                  >
                    {ContactFromDate.email}
                  </a>
                </h5>
                <h5>
                  <a
                    className=" cursor-pointer hover-underline-animation "
                    target="_blank"
                    rel="noreferrer"
                    href="tel:+17373035655"
                  >
                    {ContactFromDate.phone}
                  </a>
                </h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              {/* <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
