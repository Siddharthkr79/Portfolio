import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS3</span>
        <span>Vite</span>
      </div>
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <a href="#Hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#About">About</a>
          <a href="#Skill">Skills</a>
          <a href="#contact">Hire Me</a>
        </div>
        <div>
          <h4>Follow Me</h4>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2026 Siddharth | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
