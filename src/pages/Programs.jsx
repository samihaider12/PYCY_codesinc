import '../style/programs.css';
import Impact from '../pages/Impect';
import { useImages } from '../data/images';

const programsData = [
  {
    id: 1,
    title: "PYC Arts & Technology High School",
    description: "A positive, rigorous, and community-connected high school experience",
    imageKey: 'programHighSchool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 3.8L20 20H4l8-14.2z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "PCYC Summer Freedom School",
    description: "A free summer literacy and enrichment experience helping elementary scholars.",
    imageKey: 'programFreedomSchool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "The Capri",
    description: "A historic theater and vibrant community arts center",
    imageKey: 'programCapri',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    )
  }
];

const Programs = () => {
  const { data: images = {} } = useImages();

  return (
    <div className="programs-page-wrapper">
      {/* 1. Programs Section */}
      <section className="programs-section" id="program">
        <div className="programs-container">
          
          {/* Top Tag & Title */}
          <div className="programs-header">
            <span className="program-tag">
              <span className="dot">•</span> OUR PROGRAM
            </span>
            <h2 className="programs-title">
              Programs That Open <span className="script-text">Doors</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="programs-grid">
            {programsData.map((item) => (
              <div key={item.id} className="program-card">
                <div className="card-image-wrapper">
                  <img src={images[item.imageKey]} alt={item.title} className="card-image" />
                </div>
                
                {/* Overlay White Badge Card */}
                <div className="card-overlay-badge">
                  <div className="badge-icon-box">
                    {item.icon}
                  </div>
                  <div className="badge-content">
                    <h3 className="badge-title">{item.title}</h3>
                    <p className="badge-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          {/* Bottom Review & Rating Section */}
          <div className="programs-footer">
            <p className="footer-subtext">
              Join our team and help weave innovation, quality, and success together worldwide.
            </p>
            <div className="rating-box">
              <span className="rating-score">4.9/5</span>
              <div className="stars">
                ★★★★★
              </div>
              <span className="review-count">Our 4200 Review</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Impact Section Below Programs */}
      <Impact />
    </div>
  );
};

export default Programs;