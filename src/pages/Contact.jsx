import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import { products } from "../data/products";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";


function Contact() {

  const [searchParams] = useSearchParams();
  const productSlug = searchParams.get("product");
  const product = products.find((item) => item.slug === productSlug);
  const productSubject = product ? `Enquiry about ${product.name}` : "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: productSubject,
    message: ""
  });


  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");


  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });

    setFormMessage("");

  }


  function handleInvalid(event) {

    event.preventDefault();

    const { name, validity } = event.target;
    const fieldLabels = {
      name: "full name",
      email: "email address",
      phone: "phone number",
      message: "message"
    };

    const message = validity.typeMismatch
      ? "Enter a valid email address."
      : `Please enter your ${fieldLabels[name]}.`;

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: message
    }));

    setFormMessage("validation");

  }


  function handleSubmit(event) {

    event.preventDefault();

    setErrors({});
    setFormMessage("unavailable");

  }


  return (

    <>

      <PageHero
        title="Contact Us"
        subtitle="GET IN TOUCH WITH US"
      />


      <section className="section contact-page">

        <div className="container contact-grid">


          {/* CONTACT INFORMATION */}

          <div className="contact-information">

            <p className="section-subtitle">
              CONTACT INFORMATION
            </p>

            <h2>
              Let's Discuss Your Industrial Requirements
            </h2>

            <p className="contact-intro">
              Contact our team to discuss your boiler pressure
              component requirements, industrial applications,
              product availability, or technical enquiries.
            </p>


            <div className="contact-details">


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Our Location</h4>

                  <p>
                    Above Onestep Saloon, Milan Chowk,Chandrapur, Maharashtra, India
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Phone Number</h4>

                  <p>
                    <a href="tel:+919850333799">+91 9850333799</a>
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>Email Address</h4>

                  <p>
                    <a href="mailto:info@pawanssiddhi.in">info@pawanssiddhi.in</a>
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaClock />
                </div>

                <div>
                  <h4>Working Hours</h4>

                  <p>
                    Monday – Saturday<br />
                    11:00 AM – 8:00 PM
                  </p>
                </div>

              </div>


            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="contact-form-wrapper">


            <h2>Send Us an Enquiry</h2>


            {formMessage && (

              <div
                className="form-message"
                role="status"
                aria-live="polite"
              >

                {formMessage === "validation" ? (
                  "Please correct the highlighted fields and try again."
                ) : (
                  <>
                    Online enquiry submission is not available yet. Please{" "}
                    <a href="tel:+919850333799">call us</a> or{" "}
                    <a href="mailto:info@pawanssiddhi.in">email us</a> instead.
                  </>
                )}

              </div>

            )}


            <form
              className="contact-form"
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
            >


              <div className="form-grid">


                <div className="form-group">

                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />

                  {errors.name && (
                    <p className="form-error" id="name-error">
                      {errors.name}
                    </p>
                  )}

                </div>


                <div className="form-group">

                  <label htmlFor="company">
                    Company Name
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />

                  {errors.email && (
                    <p className="form-error" id="email-error">
                      {errors.email}
                    </p>
                  )}

                </div>


                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />

                  {errors.phone && (
                    <p className="form-error" id="phone-error">
                      {errors.phone}
                    </p>
                  )}

                </div>


              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your requirement?"
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  rows="6"
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />

                {errors.message && (
                  <p className="form-error" id="message-error">
                    {errors.message}
                  </p>
                )}

              </div>


              <button
                type="submit"
                className="btn-primary submit-button"
              >

                Submit Enquiry

              </button>


            </form>


          </div>


        </div>

      </section>

    </>
  );

}


export default Contact;
