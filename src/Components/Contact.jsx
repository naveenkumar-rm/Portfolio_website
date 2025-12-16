import React from "react";
import "./Contact.css";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p>
            I am currently open to new opportunities. Let's discuss how my Java
            Full Stack skills can benefit your team.
          </p>

          <div className="contact-info">
            <p>
              <Mail /> naveenkmayilsamy@gmail.com
            </p>
            <p>
              <Phone /> +91 9360558370
            </p>
            <p>
              <Linkedin /> naveenkumar-rm
            </p>
            <p>
              <Github /> naveenkumar-rm
            </p>
          </div>
        </div>

        <div className="contact-right">
          <h3>I'd love to hear from you!</h3>
          <p>Let's get in touch.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea rows="4" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
