import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com"

const Contacts = () => {

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_USER_ID"
    )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );

  e.target.reset();
};
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        I&apos;d love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
      </p>
      
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon-circle">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            </div>
            <div>
              <h4>Email</h4>
              <span>siddharthkr9128@gmail.com</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon-circle">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
            </div>
            <div>
              <h4>Phone</h4>
              <span>+123 456 7890</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon-circle">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
            </div>
            <div>
              <h4>Location</h4>
              <span>Patna, India</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/siddharthrebel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
