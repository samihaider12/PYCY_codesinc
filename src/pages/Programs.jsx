import '../style/programs.css';
 import Impact from '../pages/Impect';
import { useImages } from '../data/images';

const programsData = [
  {
    id: 1,
    title: "PYC Arts & Technology High School",
    description: "A positive, rigorous, and community-connected high school experience",
    imageKey: 'programHighSchool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 3.8L20 20H4l8-14.2z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "PCYC Summer Freedom School",
    description: "A free summer literacy and enrichment experience helping elementary scholars.",
    imageKey: 'programFreedomSchool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "The Capri",
    description: "A historic theater and vibrant community arts center",
    imageKey: 'programCapri',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    )
  }
];

const Programs = () => {
  const { data: images = {} } = useImages();

  return (
    <div className="w-full">
      {/* 1. Programs Section */}
      <section className="w-full pt-[90px] pb-[70px] px-6 bg-[#faf5ee] flex justify-center" id="program">
        <div className="max-w-[1200px] w-full flex flex-col items-center">

          {/* Top Tag & Title */}
          <div className="text-center mb-[50px]">
            <span className="inline-flex items-center gap-1.5 bg-[#fcecd7] text-[#212529] text-[11px] font-extrabold tracking-[1.5px] px-4 py-1.5 rounded-full uppercase mb-4">
              <span className="text-[#f1a829] text-base leading-none">•</span> OUR PROGRAM
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0f172a]">
              Programs That Open{' '}
              <span className="[font-family:'Dancing_Script'] text-[#f1a829] font-normal text-[36px] sm:text-[48px] ml-1">
                Doors
              </span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full mb-9">
            {programsData.map((item) => (
              <div
                key={item.id}
                className="program-card relative h-[380px] rounded-[28px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.06)] cursor-pointer p-[3px] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[10px] hover:shadow-[0_18px_35px_rgba(241,168,41,0.25)] group"
              >
                <div className="w-full h-full rounded-[25px] overflow-hidden relative bg-white">
                  <img
                    src={images[item.imageKey]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  />
                </div>

                {/* Overlay White Badge Card */}
                <div className="card-overlay-badge absolute bottom-4 left-4 right-4 bg-white rounded-[20px] p-4 flex items-start gap-3.5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden z-10 transition-[transform,box-shadow] duration-[400ms] ease-in-out group-hover:-translate-y-[3px] group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <div className="relative z-[2] w-10 h-10 min-w-[40px] bg-[#f1a829] text-white rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="relative z-[2]">
                    <h3 className="text-[15px] font-bold text-[#0f172a] mb-1 leading-[1.25]">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-[1.4]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-6 h-2 rounded-xl bg-[#f1a829] transition-all duration-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300 transition-all duration-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300 transition-all duration-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300 transition-all duration-300 cursor-pointer"></span>
          </div>

          {/* Bottom Review & Rating Section */}
          <div className="text-center flex flex-col items-center gap-3">
            <p className="text-sm text-slate-700 font-medium">
              Join our team and help weave innovation, quality, and success together worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-extrabold text-[#0f172a]">4.9/5</span>
              <div className="text-[#f1a829] tracking-[2px] text-base">
                ★★★★★
              </div>
              <span className="font-bold text-[#0f172a]">Our 4200 Review</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Impact Section Below Programs */}
      <Impact />
    </div>
  );
};

export default Programs;