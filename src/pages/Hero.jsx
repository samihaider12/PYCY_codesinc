 import '../style/herobgDots.css';
 import { Play } from 'lucide-react';
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
      className="relative flex h-auto min-h-[calc(100svh-80px)] w-full flex-col overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat font-sans select-none aspect-[1.82]"
      style={{
        backgroundImage: images.homeBackground ? `url(${images.homeBackground})` : undefined,
      }}
    >
       <div className="full-bg-dots"></div>
      {/* Left Highlighted Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 items-start px-6 pb-[100px] pt-10 min-[577px]:px-8">
        <div className="max-w-[580px]">
          
          {/* Subtitle / Header Line */}
          <div className="mb-4">
            <span className="mb-1.5 block text-[13px] font-bold uppercase tracking-[2px] text-slate-300">
              WELCOME TO PCYC
            </span>
            <div className="h-0.5 w-10 bg-slate-300"></div>
          </div>

          {/* Main Title */}
          <h1 className="mb-5 font-serif text-[28px] font-normal leading-[1.15] tracking-tight text-white min-[577px]:text-[36px] min-[993px]:text-[46px]">
            Rooted in <span className="text-[#f1a829]">North</span> <br />
            <span className="text-[#f1a829]">Minneapolis.</span> Building <br />
            Futures. Inspiring Lives.
          </h1>

          {/* Paragraph */}
          <p className="mb-4 max-w-[440px] text-[15px] leading-[1.6] text-slate-300/90 max-[576px]:text-xs">
            For over 70 years, PCYC has been a place where young people, families, and
            neighbors connect, create, and grow together through education, arts, and
            community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-[18px] max-[576px]:flex-col max-[576px]:items-stretch">
            <a
              href="#program"
              onClick={(e) => scrollToSection(e, 'program')}
              className="rounded-full border-2 border-[#f1a829] bg-[#f1a829] px-[30px] py-3 text-sm font-bold text-[#112646] text-center shadow-[0_4px_15px_rgba(241,168,41,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-[#112646] hover:text-[#f1a829] hover:shadow-[0_8px_25px_rgba(241,168,41,0.45)] max-[576px]:w-full"
            >
              Explore Our Programs
            </a>

           <a
  href="#story"
  onClick={(e) => scrollToSection(e, 'story')}
  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-[26px] py-2.5 text-sm font-semibold text-white backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f1a829] hover:bg-[#f1a829]/[0.08] hover:text-[#f1a829] hover:shadow-[0_8px_20px_rgba(241,168,41,0.25)] max-[576px]:w-full"
>
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-[360deg] group-hover:scale-[1.15] group-hover:bg-[#f1a829] group-hover:shadow-[0_0_10px_rgba(241,168,41,0.6)]">
    <Play className="h-3.5 w-3.5 fill-black text-black ml-0.5 transition-colors duration-300" />
  </span>
  Watch Our Story
</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;