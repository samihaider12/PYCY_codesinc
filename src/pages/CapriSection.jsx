import '../style/capriSection.css';
import { useImages } from '../data/images';

const capriCardsData = [
  {
    id: 1,
    type: "image",
    imageKey: 'capri',
  },
  {
    id: 2,
    type: "info",
    title: "Performances",
    description: "Experience inspiring local and visiting artists.",
    imageKey: 'capri',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    )
  },
  {
    id: 3,
    type: "info",
    title: "Performances",
    description: "Experience inspiring local and visiting artists.",
    imageKey: 'programCapri',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    )
  },
  {
    id: 4,
    type: "info",
    title: "Community Events",
    description: "A welcoming space for gatherings, celebrations, and connection..",
    imageKey: 'supportGroup',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    )
  }
];

const CapriSection = () => {
  const { data: images = {} } = useImages();

  return (
    <section className="w-full pt-20 pb-[100px] px-6 bg-white flex justify-center">
      <div className="max-w-[1140px] w-full flex flex-col items-center">

        {/* Header Content */}
        <div className="text-center max-w-[650px] mb-[50px] flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 bg-[#fef3e2] text-[#e59b20] text-[11px] font-extrabold tracking-[1.5px] px-4 py-1.5 rounded-full uppercase mb-5">
            <span className="text-sm leading-none">•</span> THE CAPRI
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#262626] leading-[1.15] mb-[18px]">
            A Stage for Creativity. A <br />
            Space for <span className="[font-family:'Dancing_Script'] text-[#e59b20] font-normal text-[36px] sm:text-[48px]">Community</span>
          </h2>
          <p className="text-sm text-slate-500 leading-[1.6]">
            The Capri is more than a theater. It is a welcoming North Minneapolis gathering place where artists, young people, families, and neighbors come together to experience and create art.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 max-[992px]:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {capriCardsData.map((card) => {
            if (card.type === "image") {
              return (
                <div
                  key={card.id}
                  className="capri-card h-[340px] rounded-3xl relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-[400ms] ease-in-out hover:-translate-y-2 group"
                >
                  <img
                    src={images[card.imageKey]}
                    alt="Community"
                    className="w-full h-full  transition-transform duration-500 ease-in-out group-hover:scale-[1.06]"
                  />
                </div>
              );
            }

            return (
              <div
                key={card.id}
                className="info-card capri-card group h-[340px] rounded-3xl bg-gradient-to-b from-white from-50% to-[#fff7ea] to-100% border border-gray-100 p-6 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-[400ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_14px_35px_rgba(229,155,32,0.12)] hover:border-[#fce8cd]"
              >
                <img
                  src={images[card.imageKey]}
                  alt={card.title}
                  className="card-hover-image absolute inset-0 w-full h-full object-cover"
                />
                <div className="card-hover-overlay absolute inset-0" />
                <div className="icon-circle relative z-10 w-[46px] h-[46px] rounded-2xl bg-[#fef3e2] text-[#e59b20] flex items-center justify-center shadow-[0_6px_15px_rgba(229,155,32,0.25)] [animation:bounceLeftRight_1.6s_ease-in-out_infinite_alternate]">
                  {card.icon}
                </div>
                <div className="card-hover-content absolute inset-x-0 bottom-0 z-10 p-6">
                  <h3 className="text-lg font-extrabold text-white mb-2">{card.title}</h3>
                  <p className="text-[13px] text-white/90 leading-[1.5]">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapriSection;