import { useState } from "react";

import PageHero from "../components/common/PageHero";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });


  const [submitted, setSubmitted] = useState(false);


  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }


  function handleSubmit(event) {

    event.preventDefault();


    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {

      alert("Please fill all required fields.");

      return;

    }


    console.log("Enquiry Submitted:", formData);


    setSubmitted(true);


    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

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
                    +91 9850333799
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
                    info@pawanssiddhi.in
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


            {submitted && (

              <div className="success-message">

                Thank you! Your enquiry has been submitted successfully.
                Our team will contact you soon.

              </div>

            )}


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              <div className="form-grid">


                <div className="form-group">

                  <label>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />

                </div>


              </div>


              <div className="form-group">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your requirement?"
                />

              </div>


              <div className="form-group">

                <label>
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  rows="6"
                />

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