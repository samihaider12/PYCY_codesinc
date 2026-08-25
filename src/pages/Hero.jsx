// import '../style/hero.css';
// import '../style/herobgDots.css'
// // Aapki background image (homebg.png) ka path set karein
// import heroBg from '../assets/homebg.png';
 

// const Hero = () => {
//   const scrollToSection = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       const navbarHeight = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <section 
//       id="home" 
//       className="hero-section"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//         <div className="animated-dots dots-bottom-left"></div>
//       <div className="animated-dots dots-top-right"></div>
//       <div className="hero-container">
        
//         {/* Left Content Area */}
//         <div className="hero-content">
//           <span className="hero-subtitle">WELCOME TO PCYC</span>
          
//           <h1 className="hero-title">
//             Rooted in <span className="highlight-text">North Minneapolis.</span> Building Futures. Inspiring Lives.
//           </h1>

//           <p className="hero-description">
//             For over 70 years, PCYC has been a place where young people, families, and neighbors connect, create, and grow together through education, arts, and community.
//           </p>

//           <div className="hero-buttons">
//             <a
//               href="#program"
//               onClick={(e) => scrollToSection(e, 'program')}
//               className="btn-primary"
//             >
//               Explore Our Programs
//             </a>

//             <a
//               href="#story"
//               onClick={(e) => scrollToSection(e, 'story')}
//               className="btn-secondary"
//             >
//               <span className="play-icon">▶</span> Watch Our Story
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


  
import '../style/hero.css';
import '../style/herobgDots.css';
import { useImages } from '../data/images';

const Hero = () => {
  const { data: images = {} } = useImages();
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
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
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: images.homeBackground ? `url(${images.homeBackground})` : undefined }}
    >
      {/* Full Background Light Overlay Dots */}
      <div className="full-bg-dots"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO PCYC</span>
          
          <h1 className="hero-title">
            Rooted in <span className="highlight-text">North Minneapolis.</span> Building Futures. Inspiring Lives.
          </h1>

          <p className="hero-description">
            For over 70 years, PCYC has been a place where young people, families, and neighbors connect, create, and grow together through education, arts, and community.
          </p>

          <div className="hero-buttons">
            <a
              href="#program"
              onClick={(e) => scrollToSection(e, 'program')}
              className="btn-primary"
            >
              Explore Our Programs
            </a>

            <a
              href="#story"
              onClick={(e) => scrollToSection(e, 'story')}
              className="btn-secondary"
            >
              <span className="play-icon">▶</span> Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;