import '../style/impact.css';
import React, { useEffect, useRef, useState } from 'react';
import CapriSection from '../pages/CapriSection.jsx';
import { useImages } from '../data/images';

// Reusable count-up component
const CountUpNumber = ({ target, suffix = "", prefix = "", duration = 1800, isVisible }) => {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad for a nice deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target); // ensure it lands exactly on target
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <>{prefix}{count}{suffix}</>;
};

const statsData = [
  {
    id: 1,
    animate: true,
    target: 70,
    suffix: "+",
    label: "Years of Community Impact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  {
    id: 2,
    animate: false,
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
    animate: true,
    target: 40,
    suffix: "K+",
    label: "Capri Patrons Since Reopening",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10z"/>
      </svg>
    )
  },
  {
    id: 4,
    animate: false,
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
  const statsBarRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsBarRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.unobserve(entry.target); // sirf ek dafa trigger ho
          }
        });
      },
      { threshold: 0.3 } // 30% section nazar aate hi trigger
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="flex min-h-screen w-full justify-center overflow-hidden bg-white px-6 py-10 box-border max-[992px]:py-[50px] max-[600px]:px-4 max-[600px]:py-10">
        <div className="flex w-full max-w-[1150px] flex-col gap-[60px] max-[1024px]:gap-10">

          {/* Upper Grid Layout: Content Left + Images Right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-14 max-[992px]:gap-[50px] items-center">

            {/* Left Side Content */}
            <div className="flex flex-col items-start max-[992px]:items-center max-[992px]:text-center">
              <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#f1a829] border-b-2 border-[#f1a829] pb-0.5 mb-5 uppercase">
                OUR IMPACT
              </span>
              <h1 className="mb-5 text-[clamp(32px,5vw,48px)] font-black leading-[1.15] text-[#0d1b2a]">
                <span className="whitespace-nowrap">Creating Impact.</span> <br />
                <span className="[font-family:'Dancing_Script'] font-normal text-[#f1a829] text-[clamp(38px,6vw,58px)]">Changing</span> Lives.
              </h1>
              <p className="text-[15px] text-slate-500 leading-[1.6] max-w-[440px] max-[992px]:max-w-full mb-[30px]">
                Every day, our programs open doors to opportunities, build confidence, and help young people reach their fullest potential.
              </p>
              <button className="bg-[#0d1b2a] text-white text-[13px] font-bold px-7 py-3.5 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(13,27,42,0.2)] hover:bg-[#f1a829] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(241,168,41,0.3)]">
                See Our Impact
              </button>
            </div>

            {/* Right Side Stacked Images */}
            <div className="relative flex gap-5 max-[600px]:gap-3 items-center justify-center w-full">

              {/* Big Main Left Image */}
              <div className="h-[375px] w-full max-w-[320px] flex-shrink-0 overflow-hidden rounded-[160px_160px_40px_40px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-in-out max-[600px]:h-[260px] max-[600px]:max-w-[180px] max-[600px]:rounded-[90px_90px_25px_25px] group">
                <img
                  src={images.impactMain}
                  alt="Main Student"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.08]"
                />
              </div>

              {/* Right Side Stacked Small Images */}
              <div className="flex flex-col gap-5 max-[600px]:gap-3 relative">
                <div className="relative right-20 max-[1024px]:right-14 max-[600px]:right-8 w-[180px] h-[180px] max-[1024px]:w-[150px] max-[1024px]:h-[150px] max-[600px]:w-[110px] max-[600px]:h-[110px] rounded-[35px] max-[600px]:rounded-[20px] overflow-hidden ">
                  <img
                    src={images.impactTopRight}
                    alt="Student Profile"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.08]"
                  />
                </div>

                <div className="relative  bottom-3 right-20 max-[1024px]:right-14 max-[600px]:right-8 w-[220px] h-[230px] max-[1024px]:w-[170px] max-[1024px]:h-[180px] max-[600px]:w-[125px] max-[600px]:h-[135px] rounded-[35px] max-[600px]:rounded-[20px] overflow-hidden ">
                  <img
                    src={images.impactBottomRight}
                    alt="Performing Artist"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.08]"
                  />
                </div>
              </div>

              {/* Circular Rotating Stamp Badge */}
              <div className="absolute top-[70%] left-[47%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] max-[600px]:w-[70px] max-[600px]:h-[70px] bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] flex items-center justify-center z-10 pointer-events-none">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full [animation:rotateStamp_12s_linear_infinite]"
                >
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text style={{ fontSize: '8.5px', fontWeight: 800, fill: '#0d1b2a', letterSpacing: '1.2px' }}>
                    <textPath href="#circlePath" startOffset="0%">
                      ROOTED IN COMMUNITY • DRIVEN BY HOPE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute flex items-center justify-center [animation:heartPulse_2s_ease-in-out_infinite]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f1a829"
                    strokeWidth="2.5"
                    className="max-[600px]:w-[14px] max-[600px]:h-[14px]"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Horizontal Stats Bar */}
          <div
            ref={statsBarRef}
            className="w-full bg-white border border-slate-100 rounded-3xl px-[35px] py-6 max-[992px]:grid max-[992px]:grid-cols-2 max-[992px]:gap-[30px] max-[992px]:px-6 max-[992px]:py-[30px] max-[600px]:!grid-cols-1 max-[600px]:gap-5 max-[600px]:p-5 flex items-center justify-between box-border shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            {statsData.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="flex items-center gap-4 max-[600px]:w-full group">
                  <div className="w-12 h-12 rounded-full bg-[#0d1b2a] text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out group-hover:bg-[#f1a829] group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-[#0d1b2a] leading-[1.1]">
                      {stat.animate ? (
                        <CountUpNumber
                          target={stat.target}
                          suffix={stat.suffix}
                          isVisible={statsVisible}
                        />
                      ) : (
                        stat.value
                      )}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold max-w-[120px] max-[600px]:max-w-full mt-0.5 leading-[1.25]">
                      {stat.label}
                    </p>
                  </div>
                </div>
                {index !== statsData.length - 1 && (
                  <div className="w-px h-10 bg-slate-200 max-[992px]:hidden"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
      <CapriSection />
    </div>
  );
};

export default Impact;