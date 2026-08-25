import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../style/aboutMission.css';
import { useImages } from '../data/images';

const AboutMission = () => {
  const { data: images = {} } = useImages();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="mission-section" id="about">
      <div className="mission-container">
        
        {/* Left Side: Overlapping Image Grid */}
        <div className="mission-graphics">
          <div className="img-box top-img-box">
            <img src={images.missionPark} alt="Children playing in park" />
          </div>

          <div className="img-box bottom-left-img-box">
            <img src={images.missionClassroom} alt="Child painting in classroom" />
          </div>

          <div className="yellow-badge-card">
            <div className="handshake-icon">🤝</div>
            <span className="badge-sub">COMMUNITY FIRST</span>
            <h4 className="badge-title">Est. North Mpls</h4>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="mission-content">
          <div className="mission-label">
            <span className="star-icon">☆</span> OUR MISSION
          </div>

          <h2 className="mission-title">
            Inspiration. Connection. <br />
            <span className="script-text">Growth.</span>
          </h2>

          <p className="mission-description">
            Rooted in North Minneapolis, PCYC is a community anchor dedicated to helping
            young people discover their strengths, build meaningful connections, and shape
            their futures. Through education, youth development, arts, and community
            programming, we create welcoming spaces where everyone has the opportunity to
            thrive.
          </p>

          <div className="mission-features-grid">
            <div className="feature-item">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Community Anchor</h3>
                <p>Providing welcoming, safe environments where North Minneapolis families and youth unite to build bright futures.</p>
              </div>
            </div>

            <div className="impact-card">
              <div className="impact-header">
                <img src={images.missionAvatar} alt="PCYC Family" className="impact-avatar" />
                <div>
                  <span className="impact-tag">IMPACT</span>
                  <h5 className="impact-name">PCYC Family</h5>
                </div>
              </div>
              <div className="impact-body">
                <h3 className="impact-number">10K+</h3>
                <p className="impact-label">Youth Served</p>
                <p className="impact-sub">Supporting growth through community programs</p>
              </div>
            </div>
          </div>

          <Link 
            to="/about" 
            onClick={(e) => handleScroll(e, 'about')} 
            className="btn-learn-more"
          >
            Learn About PCYC <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;