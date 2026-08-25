import  { useState } from 'react';
import '../style/navbar.css';
import { useImages } from '../data/images';

const NAV_ITEMS = [
  { label: 'Home', targetId: 'home' },
  { label: 'About Us', targetId: 'about' },
  { label: 'Program', targetId: 'program' },
  { label: 'Support', targetId: 'support' },
  { label: 'Contact us', targetId: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: images = {} } = useImages();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMenu();

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
    <header className="sticky top 0  custom-navbar ">
      <div className="nav-container">
        
        {/* Real Logo Image */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="brand-logo"
        >
          <img src={images.logo} alt="PCYC Logo" className="logo-image" />
        </a>

        {/* Desktop Links */}
        <div className="desktop-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => scrollToSection(e, item.targetId)}
              className="nav-item-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="desktop-cta">
          <a
            href="#donate"
            onClick={(e) => scrollToSection(e, 'donate')}
            className="pcyc-donate-btn"
          >
            Donate Now <span>→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="mobile-toggle-btn"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => scrollToSection(e, item.targetId)}
              className="mobile-item-link"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={(e) => scrollToSection(e, 'donate')}
            className="pcyc-donate-btn mobile-btn"
          >
            Donate Now →
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;