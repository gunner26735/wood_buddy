import { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-amber-700' : 'text-white'}`}>
              <Hammer size={32} strokeWidth={2} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`}>
                Wood Buddy
              </h1>
              <p className={`text-xs tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-amber-700' : 'text-amber-100'
              }`}>
                Crafting Excellence in Wood
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-stone-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-stone-800' : 'text-white'} size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-stone-800' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-stone-700 font-medium hover:bg-amber-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
