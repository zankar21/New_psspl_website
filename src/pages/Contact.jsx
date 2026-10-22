import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import SectionNav from "../components/common/SectionNav";
import { products } from "../data/products";
import { supplyCategories } from "../data/supplyCategories";

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
  const category = supplyCategories.find(item => item.id === searchParams.get("category"));
  const productSubject = product ? `Enquiry about ${product.name}` : category ? `Product support: ${category.title}` : "";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statusRef = useRef(null);
  useEffect(() => {
    if (formMessage) statusRef.current?.focus();
  }, [formMessage]);



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


  async function handleSubmit(event) {

    event.preventDefault();
    if (isSubmitting) return;

    setErrors({});
    setFormMessage("");

    if (["name", "email", "phone", "message"].some((key) => !formData[key].trim())) {
      setErrors(Object.fromEntries(
        ["name", "email", "phone", "message"]
          .filter((key) => !formData[key].trim())
          .map((key) => [key, "Please complete this field."])
      ));
      setFormMessage("validation");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/pawanssiddhi@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()])),
          _subject: formData.subject.trim() || "Industrial Enquiry — PSSPL Website",
          _template: "table"
        }),
        signal: AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (response.ok && result.success !== true && result.success !== "true" && /needs activation/i.test(result.message || "")) {
        setFormMessage("activation");
        return;
      }
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Enquiry submission failed");
      }
      setFormMessage("success");
      setFormData({ name: "", company: "", email: "", phone: "", subject: productSubject, message: "" });
    } catch {
      setFormMessage("error");
    } finally {
      setIsSubmitting(false);
    }

  }


  return (

    <>

      <PageHero
        title="Contact Us"
        subtitle="GET IN TOUCH WITH US"
        artworkSrc="/images/contact-hero.webp"
      />
      <SectionNav items={[{id:"contact-information",label:"Contact Details"},{id:"enquiry-form",label:"Send a Message"}]} />


      <section className="section contact-page">

        <div className="container contact-grid">


          {/* CONTACT INFORMATION */}

          <div className="contact-information" id="contact-information">

            <p className="section-subtitle">
              CONTACT INFORMATION
            </p>

            <h2>
              Connect With the PSSPL Team
            </h2>

            <p className="contact-intro">
              Contact us for industrial supply, procurement, project coordination
              and product support. Call or email directly, or use the form.
            </p>


            <div className="contact-details">


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Our Location</h4>

                  <p>
                    Above One Step Salon, Near Ramdeo Baba Temple, Milan Square, Chandrapur – 442402, Maharashtra, India
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Business Contacts</h4>

                  <p>
                    Dinesh Saraf: <a href="tel:+919850333799">+91 98503 33799</a><br />
                    Sagar Sharma: <a href="tel:+919028231359">+91 90282 31359</a>
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
                    <a href="mailto:pawanssiddhi@gmail.com">pawanssiddhi@gmail.com</a>
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

          <div className="contact-form-wrapper" id="enquiry-form">


            <h2>Send a Message</h2>
            <p className="contact-form-intro">Fields marked * are required. Include relevant product or project details so our team can assist.</p>


            {formMessage === "validation" && (

              <div
                className={`form-message form-message-${formMessage}`} ref={statusRef} tabIndex={-1}
                role="status"
                aria-live="polite"
              >

                Please correct the highlighted fields and try again.
              </div>

            )}


            {formMessage === "success" && (
              <div className={`form-message form-message-${formMessage}`} ref={statusRef} tabIndex={-1} role="status">
                Your enquiry has been submitted. Thank you for contacting PSSPL.
              </div>
            )}
            {formMessage === "error" && (
              <div className={`form-message form-message-${formMessage}`} ref={statusRef} tabIndex={-1} role="alert">
                We could not submit your enquiry. Your details are still here so you can try again,
                or email <a href="mailto:pawanssiddhi@gmail.com">pawanssiddhi@gmail.com</a> directly.
              </div>
            )}
            {formMessage === "activation" && (
              <div className={`form-message form-message-${formMessage}`} ref={statusRef} tabIndex={-1} role="alert">
                Enquiry delivery is awaiting activation by PSSPL. Please email{' '}
                <a href="mailto:pawanssiddhi@gmail.com">pawanssiddhi@gmail.com</a>{' '}
                directly for now. Your enquiry has not been sent.
              </div>
            )}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
            >


              <fieldset className="contact-fields" disabled={isSubmitting}>
              <div className="form-grid">


                <div className="form-group">

                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    maxLength={150}
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
                    autoComplete="organization"
                    maxLength={200}
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
                    autoComplete="email"
                    maxLength={254}
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
                    autoComplete="tel"
                    maxLength={40}
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
                  maxLength={250}
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
                  maxLength={10000}
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


              <p className="form-submit-note">
                Your enquiry will be sent to pawanssiddhi@gmail.com through FormSubmit.
              </p>


              <button
                type="submit"
                className="btn-primary submit-button"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >

                {isSubmitting ? "Sending…" : "Send Enquiry"}

              </button>


              </fieldset>
            </form>


          </div>


        </div>

      </section>

    </>
  );

}


export default Contact;
