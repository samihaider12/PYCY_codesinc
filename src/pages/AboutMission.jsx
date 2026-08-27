 import '../style/aboutMission.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
    <section className="w-full py-[100px] px-6 bg-white flex justify-center" id="about">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">

        {/* Left Side: Overlapping Image Grid */}
        <div className="relative w-full h-[440px] md:h-[520px]">
          <div
            className="absolute top-0 right-0 w-[78%] h-[280px] z-[1] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-[4] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] [animation:floatTopImg_6s_ease-in-out_infinite] group"
          >
            <img
              src={images.missionPark}
              alt="Children playing in park"
              className="w-full h-full object-cover block transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 w-[52%] h-[310px] z-[2] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-[4] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] [animation:floatBottomImg_7s_ease-in-out_infinite] group"
          >
            <img
              src={images.missionClassroom}
              alt="Child painting in classroom"
              className="w-full h-full object-cover block transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
            />
          </div>

          <div className="absolute bottom-5 right-10 w-[200px] h-[140px] z-[3] bg-[#f1a829] rounded-[20px] p-5 text-white flex flex-col justify-center items-center text-center shadow-[0_12px_25px_rgba(241,168,41,0.3)] transition-[transform,box-shadow] duration-[400ms] ease-in-out hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_18px_35px_rgba(241,168,41,0.45)] max-[576px]:right-[10px] max-[576px]:w-[160px] max-[576px]:h-[120px] [animation:floatBadge_5s_ease-in-out_infinite]">
            <div className="text-2xl mb-2">🤝</div>
            <span className="text-[10px] font-bold tracking-[1px] uppercase opacity-90">COMMUNITY FIRST</span>
            <h4 className="text-base font-extrabold mt-0.5">Est. North Mpls</h4>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[#f1a829] text-[13px] font-bold tracking-[1.5px] mb-3">
            <span className="text-base">☆</span> OUR MISSION
          </div>

          <h2 className="text-[32px] md:text-[44px] leading-[1.15] text-[#0f172a] font-extrabold mb-5 [font-family:'Stack_Sans_Headline']">
            Inspiration. Connection. <br />
            <span className="[font-family:'Dancing_Script'] text-[#f1a829] font-normal text-[36px] md:text-[48px]">Growth.</span>
          </h2>

          <p className="text-[15px] leading-[1.65] text-slate-500 mb-9">
            Rooted in North Minneapolis, PCYC is a community anchor dedicated to helping
            young people discover their strengths, build meaningful connections, and shape
            their futures. Through education, youth development, arts, and community
            programming, we create welcoming spaces where everyone has the opportunity to
            thrive.
          </p>

          <div className="grid grid-cols-1 max-[576px]:grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-9">
            <div className="flex flex-col gap-3">
              <div className="w-11 h-11 bg-[#f1a829] text-white rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-1.5">Community Anchor</h3>
                <p className="text-[13px] leading-[1.5] text-slate-500">Providing welcoming, safe environments where North Minneapolis families and youth unite to build bright futures.</p>
              </div>
            </div>

            <div className="relative bg-slate-50 border border-slate-200 rounded-[18px] p-4 shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.02] hover:bg-white hover:border-[#f1a829] hover:shadow-[0_15px_30px_rgba(241,168,41,0.15)] [animation:floatImpactCard_5.5s_ease-in-out_infinite] group/impact">
              <div className="flex items-center gap-2.5 border-b border-slate-200 pb-2.5 mb-3">
                <img
                  src={images.missionAvatar}
                  alt="PCYC Family"
                  className="w-8 h-8 rounded-full object-cover transition-transform duration-[400ms] ease-in-out group-hover/impact:scale-110"
                />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-[0.5px]">IMPACT</span>
                  <h5 className="text-xs font-bold text-[#0f172a]">PCYC Family</h5>
                </div>
              </div>
              <div>
                <h3 className="inline-block text-[28px] font-extrabold text-[#f1a829] leading-none mb-1 transition-transform duration-300 ease-in-out group-hover/impact:scale-[1.08] [animation:pulseNumber_3s_infinite_ease-in-out]">10K+</h3>
                <p className="text-[13px] font-bold text-[#0f172a]">Youth Served</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-[1.3]">Supporting growth through community programs</p>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            onClick={(e) => handleScroll(e, 'about')}
            className="inline-flex items-center gap-2.5 bg-[#f1a829] text-white font-bold text-sm px-8 py-3.5 rounded-full no-underline w-fit transition-all duration-300 ease-in-out shadow-[0_6px_20px_rgba(241,168,41,0.3)] hover:bg-[#d9911e] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(241,168,41,0.4)]"
          >
            Learn About PCYC <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;