import { useState, useEffect } from "react";
import "../style/Testimonials.css";
import { useImages } from '../data/images';

const Testimonials = () => {
  const { data: images = {} } = useImages();
  // Top Cards Circular Array Order: Default = [0, 1, 2]
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

      // 1 2 3 → 2 3 1
      const firstItem = newOrder.shift();

      newOrder.push(firstItem);

      return newOrder;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [isTopHovered]);
  // 2. Bottom Testimonials Position Swap Timer (Every 3 seconds)
  useEffect(() => {
    if (isBottomHovered) return;
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isBottomHovered]);

  return (
    <div className="section-place-testimonials">
      {/* TOP SECTION: CIRCULAR ROTATING BOUNCE CARDS */}
      <section className="place-section container-wrapper">
        <h2 className="place-heading">
          There’s a Place for You at <br /> PCYC
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
        className={`place-card position-${position}`}
      >
        <div className="icon-circle">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#e59b20"
          >
            <path d={item.svgPath} />
          </svg>
        </div>

        <h3>{item.title}</h3>

        <p>{item.desc}</p>

        <a href="#link" className="card-link">
          {item.linkText}
        </a>
      </div>
    );
  })}
</div>
      </section>

      {/* BOTTOM SECTION: SIDE-BY-SIDE SWAPPING TESTIMONIALS */}
      <section className="testimonials-section container-wrapper">
        <div className="testimonials-grid">
          <div className="testimonials-content">
            <div className="pill-tag">• Testimonials</div>
            <h2 className="heading-main">
              Your Partner In <br />
              Personal Growth And <br />
              <span className="cursive-accent">Well-Being</span>
            </h2>

            {/* Testimonial Cards Swap Track */}
            <div
              className="testimonial-swap-wrapper"
              onMouseEnter={() => setIsBottomHovered(true)}
              onMouseLeave={() => setIsBottomHovered(false)}>
              {/* Card 1: Moves Right when swapped */}
              <div
                className={`testimonial-card swap-box ${isSwapped ? "move-right" : "move-origin"}`}>
                <div className="stars">★★★★★</div>
                <p>
                  Turtle Dove gave me the confidence to believe in myself. The
                  mentors are incredible — they truly care about every young
                  woman they work with and make you feel valued and seen.
                </p>
                <div className="user-info">
                  <img
                    src={images.testimonialAvatarOne}
                    alt="Sarah Mitchell"
                  />
                  <div>
                    <h4>Sarah Mitchell</h4>
                    <span>Programme Graduate</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Moves Left when swapped */}
              <div
                className={`testimonial-card swap-box ${isSwapped ? "move-left" : "move-origin"}`}>
                <div className="stars">★★★★★</div>
                <p>
                  As a parent, I saw my daughter transform through the Turtle
                  Dove programme. She came out with real skills, new
                  friendships, and a purpose. I can't thank the team enough for
                  everything they do.
                </p>
                <div className="user-info">
                  <img
                    src={images.testimonialAvatarTwo}
                    alt="Morgan Paul"
                  />
                  <div>
                    <h4>Morgan Paul</h4>
                    <span>Parent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="dots-pagination">
              <span className={`dot ${!isSwapped ? "active" : ""}`}></span>
              <span className={`dot ${isSwapped ? "active" : ""}`}></span>
            </div>
          </div>

          <div className="testimonials-image-box">
            <img
              src={images.testimonialWoman}
              alt="PCYC Partner"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
