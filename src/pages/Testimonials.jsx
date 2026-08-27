import "../style/Testimonials.css";
import { useState, useEffect } from "react";
import { useImages } from '../data/images';

const Testimonials = () => {
  const { data: images = {} } = useImages();
  // Top Cards Circular Array Order
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const [isTopHovered, setIsTopHovered] = useState(false);

  // Bottom Testimonials Horizontal Swap State
  const [isSwapped, setIsSwapped] = useState(false);
  const [isBottomHovered, setIsBottomHovered] = useState(false);

  // Initial Card Static Data
  const cardsData = [
    {
      id: 0,
      title: "Give",
      desc: "Help create opportunities for young people and families. Your donation fuels everything we do from classroom to stage.",
      linkText: "Donate →",
      svgPath:
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
    {
      id: 1,
      title: "Connect",
      desc: "Stay connected with programs, events, and stories from PCYC. Be part of the community making a difference every day.",
      linkText: "Join Our Community →",
      svgPath:
        "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    },
    {
      id: 2,
      title: "Partner",
      desc: "Work with us to create greater impact across North Minneapolis. We welcome businesses, foundations, and community organizations.",
      linkText: "Partner With PCYC →",
      svgPath:
        "M21 6h-3.17L16 4H8L6.17 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
    },
  ];

  // 1. Top Section Circular Rotation Timer (Every 3 seconds)
  useEffect(() => {
    if (isTopHovered) return;

    const interval = setInterval(() => {
      setCardOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const firstItem = newOrder.shift();

        newOrder.push(firstItem);

        return newOrder;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isTopHovered]);

  // 2. Bottom Testimonials Position Swap Timer (Every 3 seconds)
  useEffect(() => {
    if (isBottomHovered) return;
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, [isBottomHovered]);

  return (
    <div>
      {/* TOP SECTION: CIRCULAR ROTATING BOUNCE CARDS */}
      <section className="max-w-[1200px] w-full mx-auto px-4 box-border">
        <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0f172a] leading-[1.15] mx-auto mb-8 text-center max-[768px]:text-center">
          There's a Place for You at <br /> PCYC
        </h2>

        <div
          className="place-cards-container"
          onMouseEnter={() => setIsTopHovered(true)}
          onMouseLeave={() => setIsTopHovered(false)}
        >
          {cardsData.map((item) => {
            const position = cardOrder.indexOf(item.id);

            return (
              <div
                key={item.id}
                className={`place-card position-${position} bg-gradient-to-b from-white from-60% to-[#fff7ea] to-100% border border-gray-100 rounded-3xl px-5 sm:px-6 py-6 sm:py-8 max-[1200px]:px-5 max-[1200px]:py-6 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col items-start`}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#fef3e2] flex items-center justify-center mb-5 max-[480px]:w-10 max-[480px]:h-10 max-[480px]:mb-3.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#e59b20">
                    <path d={item.svgPath} />
                  </svg>
                </div>

                <h3 className="text-lg font-extrabold text-slate-800 mb-2">{item.title}</h3>

                <p className="text-sm text-slate-500 leading-[1.6] mb-4">{item.desc}</p>

                <a href="#link" className="text-sm font-bold text-[#e59b20] mt-auto hover:underline">
                  {item.linkText}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM SECTION: SIDE-BY-SIDE SWAPPING TESTIMONIALS */}
      <section className="max-w-[1200px] w-full mx-auto px-4 box-border pb-20">
        <div className="grid grid-cols-1 lg:[grid-template-columns:1.2fr_1fr] gap-[30px] lg:gap-10 items-center">
          <div className="flex flex-col max-[768px]:items-center max-[768px]:text-center">
            <div className="inline-block bg-[#fef3e2] text-[#e59b20] text-[11px] font-extrabold tracking-[1.2px] px-4 py-1.5 rounded-full mb-5 w-fit">
              • Testimonials
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#0f172a] leading-[1.15] mb-5">
              Your Partner In <br />
              Personal Growth And <br />
              <span className="[font-family:'Dancing_Script'] text-[#e59b20] font-semibold text-[1.15em] inline-block">Well-Being</span>
            </h2>

            {/* Testimonial Cards Swap Track */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative mt-6 mb-6 w-full"
              onMouseEnter={() => setIsBottomHovered(true)}
              onMouseLeave={() => setIsBottomHovered(false)}
            >
              {/* Card 1: Moves Right when swapped */}
              <div
                className={`swap-box ${isSwapped ? "move-right" : "move-origin"} bg-[#fef8ee] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.03)] h-full box-border text-left`}
              >
                <div className="text-[#e59b20] text-sm tracking-[2px] mb-3">★★★★★</div>
                <p className="text-xs text-slate-600 leading-[1.6] mb-5">
                  Turtle Dove gave me the confidence to believe in myself. The
                  mentors are incredible — they truly care about every young
                  woman they work with and make you feel valued and seen.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={images.testimonialAvatarOne}
                    alt="Sarah Mitchell"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#0f172a]">Sarah Mitchell</h4>
                    <span className="text-[11px] text-slate-400 block">Programme Graduate</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Moves Left when swapped */}
              <div
                className={`swap-box ${isSwapped ? "move-left" : "move-origin"} bg-[#fef8ee] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.03)] h-full box-border text-left`}
              >
                <div className="text-[#e59b20] text-sm tracking-[2px] mb-3">★★★★★</div>
                <p className="text-xs text-slate-600 leading-[1.6] mb-5">
                  As a parent, I saw my daughter transform through the Turtle
                  Dove programme. She came out with real skills, new
                  friendships, and a purpose. I can't thank the team enough for
                  everything they do.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={images.testimonialAvatarTwo}
                    alt="Morgan Paul"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#0f172a]">Morgan Paul</h4>
                    <span className="text-[11px] text-slate-400 block">Parent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-4 max-[768px]:justify-center">
              <span className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${!isSwapped ? "!w-6 !rounded-[10px] bg-[#e59b20]" : "bg-slate-300"}`}></span>
              <span className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${isSwapped ? "!w-6 !rounded-[10px] bg-[#e59b20]" : "bg-slate-300"}`}></span>
            </div>
          </div>

          <div className="w-full h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[480px] rounded-[20px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <img
              src={images.testimonialWoman}
              alt="PCYC Partner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;