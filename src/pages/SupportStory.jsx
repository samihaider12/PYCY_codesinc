import '../style/supportStory.css';
import { motion } from 'framer-motion';
import Testimonials from '../pages/Testimonials';
import { useImages } from '../data/images';

const SupportStory = () => {
  const { data: images = {} } = useImages();
  return (
    <div className="landing-page">
      
      {/* SECTION 1: SUPPORT US */}
      <section className="section-support" id="support">
        <div className="bg-glow-top-left"></div>
        <div className="container-wrapper grid-2-col">
          
          {/* Collage Container */}
          <div className="collage-container">
            {/* 10K+ Floating Card */}
            <div className="card-stat-10k">
              <h3>10K+</h3>
              <p>Lives touched through our local programs yearly</p>
            </div>

            {/* Main Stage Image */}
            <div className="img-stage-frame">
              <img src={images.supportStage} alt="Community Arts For All" />
            </div>

            {/* Painting Image Overlap */}
            <div className="img-painter-frame">
              <img src={images.supportPainting} alt="Artist Painting" />
            </div>

            {/* 50+ Years Badge */}
            <div className="card-badge-50y">
              <div className="medal-ring">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <h4>50+ Years</h4>
                <p>Of faithful community service</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="content-side">
            <div className="pill-tag">• SUPPORT US</div>
            <h2 className="heading-main">
              Your Generosity Makes <br />
              Our <span className="cursive-accent">Work Possible</span>
            </h2>
            <p className="text-paragraph">
              When you support PCYC, you help bring quality educational, artistic, and leadership programming directly to the youth and families of North Minneapolis.
            </p>

            <ul className="list-features">
              <li>
                <span className="icon-check">✓</span>
                You make a tangible difference to youth, local artists, and families
              </li>
              <li>
                <span className="icon-check">✓</span>
                Help build a stronger, brighter, and more resilient community
              </li>
              <li>
                <span className="icon-check">✓</span>
                Support quality arts and cultural programming at the Capri Theater
              </li>
              <li>
                <span className="icon-check">✓</span>
                Invest in the next generation of North Minneapolis leaders
              </li>
            </ul>

            <div className="actions-group">
              <button className="btn-amber">Ways to Give →</button>
              <button className="btn-light">Donate Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="section-story">
        <div className="container-wrapper grid-2-col-story">
          
          {/* Text Content */}
          <div className="content-side">
            <div className="story-tag-line">
              <span>OUR STORY</span>
              <div className="amber-line"></div>
            </div>
            <h2 className="heading-main story-heading">
              Rooted in <br />
              Community. <br />
              <span className="cursive-accent">Growing Together</span>
            </h2>
            <p className="text-paragraph">
              For over 70 years, PCYC has been a trusted place where young people, families, and neighbors come together to learn, create, and thrive.
            </p>
            <p className="text-paragraph">
              From education to the arts, we continue to build a stronger North Minneapolis—together.
            </p>

            <button className="btn-navy-pill">Learn Our Story →</button>
          </div>

          {/* Right Image with Overlay Box */}
          <div className="story-image-container">
            <div className="story-arch-frame">
              <img src={images.supportGroup} alt="Community Group" />
            </div>

            {/* Dark Floating Card */}
            <div className="dark-floating-card">
              <div className="heart-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <p>Building a stronger future for North Minneapolis—together.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE NEXT CHAPTER FUND (DARK BANNER) */}
      <section className="section-fund">
        <div className="container-wrapper">
          <div className="fund-dark-banner">
            
            {/* Col 1: Title */}
            <div className="fund-col-title">
              <div className="story-tag-line">
                <span>THE NEXT CHAPTER FUND</span>
                <div className="amber-line"></div>
              </div>
             <h2 className="heading-main text-white relative-heading">
      Help Us Shape <br />

      {/* Container for Relative Alignment */}
      <span className="inline-block relative">
        
        {/* "What's" Text */}
        <motion.span
          className="cursive-accent inline-block"
          initial={{ opacity: 0, x: -60, y: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 1, 1],
            x: [-60, 0, 0, 0, 0],
            y: [0, 0, 0, 0, 0],
            rotate: [0, 0, -8, 5, 0], // Shocking shake when 'Next' lands on top
            scale: [1, 1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.25, 0.55, 0.75, 1],
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          What's
        </motion.span>

        {" "}

        {/* "Next." Text */}
        <motion.span
          className="cursive-accent inline-block"
          initial={{ opacity: 0, x: 120, y: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 1, 1],
            // 1. Right side entrance -> 2. Jump OVER "What's" -> 3. Shock impact -> 4. Swap Down below
            x: [120, 0, -65, -65, 0],
            y: [0, 0, -35, -35, 30],
            rotate: [0, 0, 15, -10, 0], // Shocking dynamic rotation
            scale: [1, 1, 1.25, 1.1, 1],
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.25, 0.55, 0.75, 1], // Time steps matching 'What's' sequence
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Next.
        </motion.span>

      </span>
    </h2>

            </div>

            {/* Col 2: Text + CTA Button */}
            <div className="fund-col-desc">
              <p className="text-paragraph text-light">
                Your support helps protect our legacy, sustain youth programming, and build a stronger future for the next generation and our community.
              </p>
              <button className="btn-amber font-600">
                Support the Next Chapter →
              </button>
            </div>

            {/* Col 3: Progress Card */}
            <div className="fund-col-card">
              <div className="fund-progress-card">
                
                <div className="card-top-row">
                  <div>
                    <span className="goal-label">OUR GOAL</span>
                    <h3 className="goal-amount">$400,000</h3>
                  </div>
                  <span className="goal-date">By October 31, 2026</span>
                </div>

                {/* Progress Bar */}
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '66%' }}></div>
                </div>

                {/* Stats Row */}
                <div className="card-stats-row">
                  <div>
                    <span className="stat-value text-gold">$265,000</span>
                    <span className="stat-sub">Raised so far</span>
                  </div>
                  <div>
                    <span className="stat-value text-white">$135,000</span>
                    <span className="stat-sub">To go</span>
                  </div>
                </div>

                {/* Right Circular Heart Icon */}
                <div className="heart-circle-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <Testimonials/>
    </div>
  );
};

export default SupportStory;