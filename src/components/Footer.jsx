import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/footer.css';
import { useImages } from '../data/images';

const Footer = () => {
  const { data: images = {} } = useImages();

  return (
    <footer className="pcyc-footer">
      <div className="footer-container">
        
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="footer-top" id="contact">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              {/* Apni Logo Image Yahan Change Karein */}
              <img src={images.logo} alt="PCYC Logo" />
            </div>
            <p className="brand-tagline">Rooted in North Minneapolis.</p>
            <h3 className="brand-heading">
              Igniting Inspiration, <br />
              <span className="highlight-yellow">Connection, and Growth.</span>
            </h3>
            
            <div className="social-links">
              <a href="#facebook" className="social-icon"><FaFacebookF /></a>
              <a href="#instagram" className="social-icon"><FaInstagram /></a>
              <a href="#youtube" className="social-icon"><FaYoutube /></a>
              <a href="#email" className="social-icon"><FaEnvelope /></a>
            </div>
          </div>

          {/* Column 2: About PCYC */}
          <div className="footer-col">
            <h4 className="col-title">ABOUT PCYC</h4>
            <ul className="footer-links">
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#our-impact">Our Impact</a></li>
              <li><a href="#news">News & Updates</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partnerships">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4 className="col-title">RESOURCES</h4>
            <ul className="footer-links">
              <li><a href="#enroll">Enroll / Register</a></li>
              <li><a href="#families">For Families</a></li>
              <li><a href="#educators">For Educators</a></li>
              <li><a href="#partners">For Partners</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div className="footer-col newsletter-col">
            <div className="newsletter-card">
              <div className="heart-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>
                Stay Connected. <br />
                <span className="italic-yellow">Make an Impact.</span>
              </h3>
              <p>Get the latest updates, inspiring stories, and ways to get involved.</p>
              
              <div className="newsletter-input-box">
                <input type="email" placeholder="Your email address" />
                <button type="button" className="submit-arrow-btn">→</button>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: CONTACT INFO BAR */}
        <div className="contact-info-bar">
          <div className="info-block">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div>
              <span className="label">VISIT US</span>
              <p>5600 Plymouth Ave N<br />Minneapolis, MN 55430</p>
            </div>
          </div>

          <div className="divider-line"></div>

          <div className="info-block">
            <div className="icon-box"><FaPhoneAlt /></div>
            <div>
              <span className="label">CALL US</span>
              <p>612-588-6500</p>
            </div>
          </div>

          <div className="divider-line"></div>

          <div className="info-block">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <span className="label">EMAIL US</span>
              <p>info@pcyc.org</p>
            </div>
          </div>

          <div className="slogan-box">
            <span className="cursive-slogan">
              Together, we inspire. <br />
              Together, we thrive.
            </span>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & CREDITS */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © 2025 PCYC. All Rights Reserved.
          </div>

         <div className="designer-badge">
  <span>Designed and hosted by</span>
  <Link
    to="https://www.codes-inc.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit Codesinc website"
  >
    <img
      src={images.codesincLogo}
      alt="Codesinc Logo"
      className="designer-logo"
    />
    <strong>Codesinc.</strong>
  </Link>
</div>

          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Use</a>
            <span>|</span>
            <a href="#accessibility">Accessibility</a>
          </div>

          <div className="built-with">
            Built with <span className="heart-icon">💛</span> in North Minneapolis
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;