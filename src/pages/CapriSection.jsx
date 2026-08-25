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
    <section className="capri-section">
      <div className="capri-container">
        
        {/* Header Content */}
        <div className="capri-header">
          <span className="capri-tag">
            <span className="dot">•</span> THE CAPRI
          </span>
          <h2 className="capri-title">
            A Stage for Creativity. A <br />
            Space for <span className="capri-script">Community</span>
          </h2>
          <p className="capri-description">
            The Capri is more than a theater. It is a welcoming North Minneapolis gathering place where artists, young people, families, and neighbors come together to experience and create art.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="capri-grid">
          {capriCardsData.map((card) => {
            if (card.type === "image") {
              return (
                <div key={card.id} className="capri-card image-card">
                  <img src={images[card.imageKey]} alt="Community" className="card-bg-img" />
                </div>
              );
            }

            return (
              <div key={card.id} className="capri-card info-card">
                <div className="icon-circle">
                  {card.icon}
                </div>
                <div className="info-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.description}</p>
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