import React from "react";
import successToastMessage from "../../common/successToastMessage";
import { Formik, Form, Field } from "formik";

const SContactForm = ({ noLine, heading, description }) => {
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

  // const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10">
            <div className="sec-head  text-center">
              <h4 className="wow color-font">{heading}</h4>
              <p className="wow fadeIn" data-wow-delay=".5s">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
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
                {(formikProps) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateName}
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name *"
                              required="required"
                            />
                            {formikProps.errors.name &&
                              formikProps.touched.name && (
                                <div className="text-danger">
                                  {formikProps.errors.name}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_phone"
                              type="text"
                              name="phone"
                              placeholder="Phone Number (Optional)"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email *"
                              required="required"
                            />
                            {formikProps.errors.email &&
                              formikProps.touched.email && (
                                <div className="text-danger">
                                  {formikProps.errors.email}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateSubject}
                              id="form_subject"
                              type="text"
                              name="subject"
                              placeholder="Subject *"
                              required="required"
                            />
                            {formikProps.errors.subject &&
                              formikProps.touched.subject && (
                                <div className="text-danger">
                                  {formikProps.errors.subject}
                                </div>
                              )}
                          </div>
                        </div>

                        <div className="col-12">
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
                            {formikProps.errors.message &&
                              formikProps.touched.message && (
                                <div className="text-danger">
                                  {formikProps.errors.message}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {!noLine ? <div className="line bottom left"></div> : ""}
    </section>
  );
};

export default SContactForm;
