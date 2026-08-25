import React from 'react';
import '../style/impact.css';
import CapriSection from '../pages/CapriSection.jsx';
import { useImages } from '../data/images';

const statsData = [
  {
    id: 1,
    value: "70+",
    label: "Years of Community Impact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  {
    id: 2,
    value: "10–12",
    label: "Grades Served at PYC High School",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    )
  },
  {
    id: 3,
    value: "40K+",
    label: "Capri Patrons Since Reopening",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10z"/>
      </svg>
    )
  },
  {
    id: 4,
    value: "Countless",
    label: "Lives Inspired Every Year",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  }
];

const Impact = () => {
  const { data: images = {} } = useImages();

  return (
   <div>
     <section className="impact-section">
      <div className="impact-container">
        
        {/* Upper Grid Layout: Content Left + Images Right */}
        <div className="impact-main-grid">
          
          {/* Left Side Content */}
          <div className="impact-text-content">
            <span className="impact-tagline">OUR IMPACT</span>
            <h1 className="impact-heading">
              Creating Impact. <br />
              <span className="impact-script font-handwriting">Changing</span> Lives.
            </h1>
            <p className="impact-description">
              Every day, our programs open doors to opportunities, build confidence, and help young people reach their fullest potential.
            </p>
            <button className="impact-btn">See Our Impact</button>
          </div>

          {/* Right Side Stacked Images */}
          <div className="impact-images-wrapper">
            
            {/* Big Main Left Image */}
            <div className="main-image-card">
              <img src={images.impactMain} alt="Main Student" />
            </div>

            {/* Right Side Stacked Small Images */}
            <div className="side-images-stack">
              <div className="small-image-card top-card">
                <img src={images.impactTopRight} alt="Student Profile" />
              </div>

              <div className="small-image-card bottom-card">
                <img src={images.impactBottomRight} alt="Performing Artist" />
              </div>
            </div>

            {/* Circular Rotating Stamp Badge */}
            <div className="rotating-stamp-badge">
              <svg viewBox="0 0 100 100" className="stamp-text-svg">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    ROOTED IN COMMUNITY • DRIVEN BY HOPE •
                  </textPath>
                </text>
              </svg>
              <div className="stamp-inner-heart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f1a829" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Stats Bar */}
        <div className="impact-stats-bar">
          {statsData.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="stat-item">
                <div className="stat-icon-circle">
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
              {index !== statsData.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
         <CapriSection/>
   </div>
  );
};

export default Impact;