import React from "react";
import { Formik, Form, Field } from "formik";

const SContactForm = ({ noLine }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
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
    } else if (!/^[a-zA-Z]+([ -][a-zA-Z]+)*$/i.test(value)) {
      error = "Invalid Subject";
    }
    return error;
  }
  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is Required";
    } else if (value.length < 30) {
      error = "Message should be minimum 30 characters";
    }
    return error;
  }

  async function postJSON(data) {
    console.log("data from func is : ", data)
    try {
      const response = await fetch("http://localhost:1234/api/postcontact", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.text();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
      data.name = "";
      data.phone = "";
      data.email = "";
      data.subject = "";
      data.message = "";
  }

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Contact Us
              </h6>
              <h3 className="wow color-font">
                Let’s Get in Touch And Make Magic Together.
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              {/* <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                // onSubmit={postJSON(JSON.stringify(values))}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message
                  console.log("data: ", JSON.stringify(values))
                  // const data = { username: "example" };
                  postJSON(values);


                  messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.phone = "";
                  values.email = "";
                  values.subject = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }} 
                >
                {({ errors, touched }) => (
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
                            {errors.name && touched.name && (
                              <div className="text-danger">{errors.name}</div>
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
                            {errors.email && touched.email && (
                              <div className="text-danger">{errors.email}</div>
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
                            {errors.subject && touched.subject && (
                              <div className="text-danger">{errors.subject}</div>
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
                            {errors.message && touched.message && (
                              <div className="text-danger">{errors.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button type="submit" className="nb butn bord curve mt-30" >
                              <span>Send Massege</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik> */}
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  postJSON(values);

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values (optional since Formik handles this)
                  // values.name = "";
                  // values.phone = "";
                  // values.email = "";
                  // values.subject = "";
                  // values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 1000);
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
                            {formikProps.errors.name && formikProps.touched.name && (
                              <div className="text-danger">{formikProps.errors.name}</div>
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
                            {formikProps.errors.email && formikProps.touched.email && (
                              <div className="text-danger">{formikProps.errors.email}</div>
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
                            {formikProps.errors.subject && formikProps.touched.subject && (
                              <div className="text-danger">{formikProps.errors.subject}</div>
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
                            {formikProps.errors.message && formikProps.touched.message && (
                              <div className="text-danger">{formikProps.errors.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button type="submit" className="nb butn bord curve mt-30">
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
