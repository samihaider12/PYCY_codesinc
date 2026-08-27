import '../style/supportStory.css';
import { motion } from 'framer-motion';
import Testimonials from '../pages/Testimonials';
import { useImages } from '../data/images';

const SupportStory = () => {
  const { data: images = {} } = useImages();
  return (
    <div className="w-full [font-family:'Plus_Jakarta_Sans',sans-serif] bg-white text-slate-800 overflow-x-hidden">

      {/* SECTION 1: SUPPORT US */}
      <section className="relative py-[50px] lg:py-[90px]" id="support">
        <div className="absolute top-0 left-0 w-[380px] h-[380px] max-w-full pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(254,243,226,0.85)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="max-w-[1140px] w-full mx-auto px-4 grid grid-cols-1 lg:[grid-template-columns:minmax(0,480px)_1fr] gap-[50px] lg:gap-[60px] items-center">

          {/* Collage Container */}
          <div className="relative w-full max-w-[480px] mx-auto h-[340px] max-[480px]:h-[340px] max-[768px]:h-[400px] lg:h-[480px]">

            {/* 10K+ Floating Card */}
            <div className="absolute top-[15px] left-0 w-[120px] max-[480px]:w-[120px] max-[768px]:w-[135px] lg:w-[165px] bg-white p-3 max-[480px]:p-3 lg:p-4 rounded-[20px] z-[3] shadow-[0_20px_40px_rgba(0,0,0,0.06)] [animation:bounce10k_4s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite,smokePulse_3s_ease-in-out_infinite] [will-change:transform,box-shadow]">
              <h3 className="text-[clamp(24px,4vw,32px)] font-extrabold text-[#e59b20] mb-1">10K+</h3>
              <p className="text-[11px] text-slate-500 leading-[1.4]">Lives touched through our local programs yearly</p>
            </div>

            {/* Main Stage Image */}
            <div className="absolute top-[30px] right-[10px] w-[calc(100%-170px)] max-w-[280px] h-[230px] max-[480px]:h-[230px] max-[768px]:h-[280px] lg:h-[340px] rounded-[28px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] z-[1]">
              <img src={images.supportStage} alt="Community Arts For All" className="w-full h-full object-cover" />
            </div>

            {/* Painting Image Overlap */}
            <div className="absolute top-[140px] max-[768px]:top-[170px] lg:top-[210px] left-0 w-[45%] max-w-[200px] h-[160px] max-[480px]:h-[160px] max-[768px]:h-[200px] lg:h-[250px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] z-[2] border-4 border-white">
              <img src={images.supportPainting} alt="Artist Painting" className="w-full h-full object-cover" />
            </div>

            {/* 50+ Years Badge */}
            <div className="absolute bottom-0 right-0 max-[480px]:right-0 lg:right-[10px] bg-white px-3 max-[480px]:px-3 lg:px-[18px] py-2 max-[480px]:py-2 lg:py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.07)] flex items-center gap-3 z-[3] [animation:bounce50y_3s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite,smokePulse_2s_ease-in-out_infinite] [will-change:transform,box-shadow]">
              <div className="w-[38px] h-[38px] bg-[#fef3e2] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold text-[#0f172a]">50+ Years</h4>
                <p className="text-[10px] text-slate-500">Of faithful community service</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-block bg-[#fef3e2] text-[#e59b20] text-[11px] font-extrabold tracking-[1.2px] px-4 py-1.5 rounded-full mb-5">• SUPPORT US</div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#0f172a] leading-[1.15] mb-5">
              Your Generosity Makes <br />
              Our <span className="[font-family:'Dancing_Script'] text-[#e59b20] font-semibold text-[1.15em] inline-block">Work Possible</span>
            </h2>
            <p className="text-sm text-slate-500 leading-[1.6] mb-5 max-[768px]:max-w-[620px]">
              When you support PCYC, you help bring quality educational, artistic, and leadership programming directly to the youth and families of North Minneapolis.
            </p>

            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-3 items-start">
              <li className="flex items-center gap-3 text-[13px] font-semibold text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#e59b20] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                You make a tangible difference to youth, local artists, and families
              </li>
              <li className="flex items-center gap-3 text-[13px] font-semibold text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#e59b20] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                Help build a stronger, brighter, and more resilient community
              </li>
              <li className="flex items-center gap-3 text-[13px] font-semibold text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#e59b20] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                Support quality arts and cultural programming at the Capri Theater
              </li>
              <li className="flex items-center gap-3 text-[13px] font-semibold text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#e59b20] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                Invest in the next generation of North Minneapolis leaders
              </li>
            </ul>

            <div className="flex gap-3.5 flex-wrap justify-center lg:justify-start w-full max-[480px]:flex-col">
              <button className="bg-[#e59b20] text-white px-7 py-3.5 rounded-full border-none text-[13px] font-bold cursor-pointer shadow-[0_8px_20px_rgba(229,155,32,0.25)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(229,155,32,0.35)] max-[480px]:w-full max-[480px]:text-center">
                Ways to Give →
              </button>
              <button className="bg-white text-[#0f172a] border border-slate-200 px-7 py-3.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#e59b20] max-[480px]:w-full max-[480px]:text-center">
                Donate Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-[50px] lg:pt-[60px] lg:pb-[100px] max-w-[1200px] mx-auto">
        <div className="max-w-[1140px] w-full mx-auto px-4 grid grid-cols-1 lg:[grid-template-columns:0.7fr_1fr] gap-[50px] lg:gap-5 items-center">

          {/* Text Content */}
          <div className="flex flex-col max-w-full lg:max-w-[93%] items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="text-[#e59b20] text-[13px] tracking-[2px] font-extrabold uppercase">OUR STORY</span>
              <div className="w-10 h-0.5 bg-[#e59b20]"></div>
            </div>
            <h2 className="text-[clamp(36px,4vw,52px)] leading-[1.15] text-[#0b1528] font-extrabold mb-6">
              Rooted in <br />
              Community. <br />
              <span className="[font-family:'Dancing_Script',cursive] text-[#e59b20] font-semibold text-[1.15em] block mt-1">Growing Together</span>
            </h2>
            <p className="text-slate-500 text-[15px] leading-[1.6] mb-3 max-[768px]:max-w-[620px]">
              For over 70 years, PCYC has been a trusted place where young people, families, and neighbors come together to learn, create, and thrive.
            </p>
            <p className="text-slate-500 text-[15px] leading-[1.6] mb-3">
              From education to the arts, we continue to build a stronger North Minneapolis—together.
            </p>

            <button className="bg-[#081120] text-white px-7 py-3.5 rounded-full border-none text-sm font-bold cursor-pointer mt-4 inline-flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-[#1a2b48] hover:-translate-y-0.5">
              Learn Our Story →
            </button>
          </div>

          {/* Right Image with Overlay Box */}
          <div className="relative w-full max-w-full">
            <div className="w-full h-[360px] max-[768px]:h-[360px] lg:h-[520px] [border-top-left-radius:200px] max-[768px]:[border-radius:140px_30px_30px_30px] rounded-bl-3xl overflow-hidden">
              <img src={images.supportGroup} alt="Community Group" className="w-full h-full object-cover" />
            </div>

            {/* Dark Floating Card */}
            <div className="relative lg:absolute top-auto lg:top-1/2 left-auto lg:left-[-60px] max-[1024px]:lg:left-[10px] -mt-10 lg:mt-0 lg:-translate-y-1/2 bg-[#081120] text-white px-6 py-8 rounded-[32px] w-full lg:w-[226px] lg:h-[258px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] z-[5] flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <p className="text-sm font-medium leading-[1.5] text-white">Building a stronger future for North Minneapolis—together.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE NEXT CHAPTER FUND (DARK BANNER) */}
      <section className="py-[35px] sm:py-[60px] max-w-[1280px] mx-auto">
        <div className="max-w-[1140px] w-full mx-auto px-4">
          <div className="bg-[#081120] rounded-[20px] sm:rounded-[36px] px-4 sm:px-[30px] lg:px-12 py-6 sm:py-10 lg:py-[26px] grid grid-cols-1 lg:[grid-template-columns:0.9fr_1.05fr_1.25fr] gap-[35px] lg:gap-8 items-center">

            {/* Col 1: Title */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[#f2ab31] text-[11px] tracking-[1.8px] font-extrabold">THE NEXT CHAPTER FUND</span>
                <div className="w-[30px] h-0.5 bg-[#f2ab31]"></div>
              </div>

              <h2 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] text-white m-0">
                Help Us Shape <br />
                <span className="[font-family:'Dancing_Script',cursive] text-[1.2em] font-semibold text-[#f2ab31]">
                  What's Next.
                </span>
              </h2>
            </div>

            {/* Col 2: Text + CTA Button */}
            <div className="flex flex-col items-start gap-6">
              <p className="text-[15px] leading-[1.6] m-0 text-slate-400">
                Your support helps protect our legacy, sustain youth programming, and build a stronger future for the next generation and our community.
              </p>
              <button className="bg-[#f2ab31] text-[#081120] px-8 py-4 rounded-full border-none text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e09b20] hover:-translate-y-0.5">
                Support the Next Chapter →
              </button>
            </div>

            {/* Col 3: Progress Card Box */}
            <div className="w-full">
              <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-[28px] px-4 sm:px-[16px] lg:px-[26px] py-5 sm:py-5 lg:py-[22px] pr-4 sm:pr-4 lg:pr-[120px]">

                <div className="flex justify-between items-start mb-[18px]">
                  <div>
                    <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#f2ab31] block mb-1">OUR GOAL</span>
                    <h3 className="text-[38px] font-extrabold text-white m-0 leading-none">$400,000</h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium text-right leading-[1.3]">
                    by October<br />3, 2026
                  </span>
                </div>

                {/* Progress Bar (Full Width with Smooth Animation) */}
                <div className="w-full h-5 bg-[#1e293b] rounded-full overflow-hidden mb-7">
                  <motion.div
                    className="h-full bg-[#f2ab31] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "66%" }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-[15px] sm:gap-[15px] lg:gap-6">
                  <div className="pr-6 border-r border-white/10">
                    <span className="text-2xl font-extrabold leading-none text-[#f2ab31] block">$265,000</span>
                    <span className="text-xs text-slate-500 mt-1.5 block">Raised so far</span>
                  </div>
                  <div>
                    <span className="text-2xl font-extrabold leading-none text-white block">$135,000</span>
                    <span className="text-xs text-slate-500 mt-1.5 block">To go</span>
                  </div>
                </div>

                {/* Overlapping Round Badge on Right Side */}
                <div className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-[1.5px] border-dashed border-[#f2ab31]/40 bg-[#081120] items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col items-center gap-0.5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f2ab31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <svg width="20" height="10" viewBox="0 0 24 12" fill="none" stroke="#f2ab31" strokeWidth="2">
                      <path d="M2 10c4-6 16-6 20 0" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default SupportStory;