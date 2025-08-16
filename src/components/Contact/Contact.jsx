import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <h2 className="contact-heading">Message Us</h2>
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form">
          <h3>Send Message</h3>
          <form>
            <label>Name</label>
            <input type="text" name="name" />

            <label>Email*</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" rows="4"></textarea>

            <button type="submit" className="send-btn">
              SEND
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="contact-info">
          <a
            href="https://wa.me/12069196886"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i> Message us on WhatsApp
          </a>

          <p className="business-name">
            Marci Metzger - THE RIDGE REALTY GROUP
          </p>
          <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
          <p className="phone">(206) 919-6886</p>

          <h4>Office Hours</h4>
          <p>
            Open today <span className="highlight">08:00 am – 07:00 pm</span>
          </p>
          <p>Open daily 8:00 am – 7:00 pm</p>
          <p>
            Appointments outside office hours available upon request. Just call!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
