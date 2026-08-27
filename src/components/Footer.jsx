import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useImages } from '../data/images';

const Footer = () => {
  const { data: images = {} } = useImages();

  return (
    <footer className="bg-[#081627] text-slate-400 [font-family:'Plus_Jakarta_Sans',sans-serif] py-20 px-10 max-[992px]:pt-[60px] max-[992px]:pb-[30px] max-[992px]:px-[30px] max-[600px]:pt-10 max-[600px]:pb-6 max-[600px]:px-4 w-full box-border overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full">

        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 max-[992px]:grid-cols-2 lg:[grid-template-columns:1.5fr_1fr_1fr_1.3fr] gap-8 max-[992px]:gap-x-[30px] max-[992px]:gap-y-10 lg:gap-10 mb-10 max-[992px]:mb-10 lg:mb-[60px]" id="contact">

          {/* Column 1: Brand Info */}
          <div>
            <div className="mb-5">
              <img src={images.logo} alt="PCYC Logo" className="h-12 max-w-full object-contain" />
            </div>
            <p className="text-white text-[15px] font-semibold mb-2">Rooted in North Minneapolis.</p>
            <h3 className="text-white text-[clamp(16px,2vw,18px)] font-bold leading-[1.4] mb-6">
              Igniting Inspiration, <br />
              <span className="text-[#e59b20]">Connection, and Growth.</span>
            </h3>

            <div className="flex gap-3 flex-wrap">
              <a href="#facebook" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-white text-sm no-underline flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#e59b20] hover:border-[#e59b20] hover:text-[#081627]"><FaFacebookF /></a>
              <a href="#instagram" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-white text-sm no-underline flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#e59b20] hover:border-[#e59b20] hover:text-[#081627]"><FaInstagram /></a>
              <a href="#youtube" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-white text-sm no-underline flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#e59b20] hover:border-[#e59b20] hover:text-[#081627]"><FaYoutube /></a>
              <a href="#email" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-white text-sm no-underline flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#e59b20] hover:border-[#e59b20] hover:text-[#081627]"><FaEnvelope /></a>
            </div>
          </div>

          {/* Column 2: About PCYC */}
          <div>
            <h4 className="relative inline-block text-white text-[13px] font-extrabold tracking-[1px] mb-5 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-6 after:h-0.5 after:bg-[#e59b20]">ABOUT PCYC</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><a href="#our-story" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">Our Story</a></li>
              <li className="mb-3"><a href="#our-impact" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">Our Impact</a></li>
              <li className="mb-3"><a href="#news" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">News & Updates</a></li>
              <li className="mb-3"><a href="#careers" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">Careers</a></li>
              <li className="mb-3"><a href="#partnerships" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="relative inline-block text-white text-[13px] font-extrabold tracking-[1px] mb-5 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-6 after:h-0.5 after:bg-[#e59b20]">RESOURCES</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-3"><a href="#enroll" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">Enroll / Register</a></li>
              <li className="mb-3"><a href="#families" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">For Families</a></li>
              <li className="mb-3"><a href="#educators" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">For Educators</a></li>
              <li className="mb-3"><a href="#partners" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">For Partners</a></li>
              <li className="mb-3"><a href="#faqs" className="text-slate-400 no-underline text-[13px] transition-colors duration-300 ease-in-out hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div>
            <div className="bg-[#1a2723] rounded-[20px] p-7 max-[600px]:p-5 relative w-full">
              <div className="w-9 h-9 rounded-full bg-[#0f1c19] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e59b20" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-extrabold leading-[1.3] mb-2.5">
                Stay Connected. <br />
                <span className="text-[#e59b20] italic [font-family:'Playfair_Display',serif]">Make an Impact.</span>
              </h3>
              <p className="text-xs text-slate-400 leading-[1.5] mb-5">Get the latest updates, inspiring stories, and ways to get involved.</p>

              <div className="bg-[#263531] rounded-full flex items-center py-1 pr-1.5 pl-4 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-none outline-none text-white text-xs w-full placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="bg-[#e59b20] border-none w-8 h-8 rounded-full text-[#081627] font-bold cursor-pointer flex items-center justify-center flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: CONTACT INFO BAR */}
        <div className="bg-[#030a14] rounded-3xl px-9 py-6 max-[992px]:grid max-[992px]:grid-cols-2 max-[992px]:gap-[25px] max-[992px]:px-6 max-[600px]:!grid-cols-1 max-[600px]:gap-5 max-[600px]:px-4 max-[600px]:py-5 max-[600px]:rounded-2xl flex items-center justify-between gap-5 mb-10">

          <div className="flex items-center gap-3.5">
            <div className="w-[38px] h-[38px] bg-[#0d1e31] rounded-lg flex items-center justify-center text-[#e59b20] text-sm flex-shrink-0"><FaMapMarkerAlt /></div>
            <div>
              <span className="block text-[9px] font-extrabold text-slate-500 tracking-[1px] mb-0.5">VISIT US</span>
              <p className="text-white text-xs font-semibold m-0 leading-[1.4]">5600 Plymouth Ave N<br />Minneapolis, MN 55430</p>
            </div>
          </div>

          <div className="w-px h-9 bg-slate-800 flex-shrink-0 max-[992px]:hidden"></div>

          <div className="flex items-center gap-3.5">
            <div className="w-[38px] h-[38px] bg-[#0d1e31] rounded-lg flex items-center justify-center text-[#e59b20] text-sm flex-shrink-0"><FaPhoneAlt /></div>
            <div>
              <span className="block text-[9px] font-extrabold text-slate-500 tracking-[1px] mb-0.5">CALL US</span>
              <p className="text-white text-xs font-semibold m-0 leading-[1.4]">612-588-6500</p>
            </div>
          </div>

          <div className="w-px h-9 bg-slate-800 flex-shrink-0 max-[992px]:hidden"></div>

          <div className="flex items-center gap-3.5">
            <div className="w-[38px] h-[38px] bg-[#0d1e31] rounded-lg flex items-center justify-center text-[#e59b20] text-sm flex-shrink-0"><FaEnvelope /></div>
            <div>
              <span className="block text-[9px] font-extrabold text-slate-500 tracking-[1px] mb-0.5">EMAIL US</span>
              <p className="text-white text-xs font-semibold m-0 leading-[1.4]">info@pcyc.org</p>
            </div>
          </div>

          <div className="text-right max-[992px]:text-left max-[992px]:col-span-2 max-[600px]:col-span-1 flex-shrink-0 whitespace-nowrap max-[600px]:whitespace-normal">
            <span className="[font-family:'Dancing_Script'] italic text-[#e59b20] text-[15px] leading-[1.3]">
              Together, we inspire. <br />
              Together, we thrive.
            </span>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & CREDITS */}
        <div className="flex items-center justify-between pt-5 border-t border-[#0f1c2e] text-[11px] text-slate-500 gap-4 flex-wrap max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-4">
          <div>
            © 2025 PCYC. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <span>Designed and hosted by</span>
            <Link
              to="https://www.codes-inc.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Codesinc website"
              className="flex items-center gap-1.5 text-inherit no-underline"
            >
              <img
                src={images.codesincLogo}
                alt="Codesinc Logo"
                className="w-[18px] h-[18px] object-contain inline-block"
              />
              <strong className="text-white ml-1">Codesinc.</strong>
            </Link>
          </div>

          <div className="flex gap-4 flex-wrap max-[600px]:w-full max-[600px]:justify-start">
            <a href="#privacy" className="text-slate-500 no-underline hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="text-slate-500 no-underline hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#accessibility" className="text-slate-500 no-underline hover:text-white">Accessibility</a>
          </div>

          <div>
            Built with <span className="text-[10px]">💛</span> in North Minneapolis
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;