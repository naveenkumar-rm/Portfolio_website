import React, { useRef, useState } from "react";
import "./Contact.css";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0iprv7r",
        "template_4y6p0ij",
        form.current,
        "Oh6W31Cmp0MsRQYp7"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          setLoading(false);
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Failed to send message",
            timer: 1500,
            showConfirmButton: false,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Open to opportunities & collaborations
      </p>

      <div className="contact-card">
        {/* Left */}
        <div className="contact-info-panel">
          <h3>Contact Information</h3>
          <p>Let’s build something amazing together 🚀</p>

          <div className="info-item">
            <Mail />
            <span>naveenkmayilsamy@gmail.com</span>
          </div>

          <div className="info-item">
            <Phone />
            <span>+91 9360558370</span>
          </div>

          <div className="info-item">
            <Linkedin />
            <span>linkedin.com/in/naveenkumar-rm</span>
          </div>

          <div className="info-item">
            <Github />
            <span>github.com/naveenkumar-rm</span>
          </div>
        </div>

        {/* Right */}
        <div className="contact-form-panel">
          <h3>Send a Message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone (optional)" />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
