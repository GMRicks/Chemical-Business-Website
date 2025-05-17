import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const contactInfo = {
  phone: '+91 99305 44114',
  secondaryPhone: '+91 70211 36497',
  email: 'info@kanhaiyachemicals.com',
  whatsapp: '+91 99305 44114'
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Products', 
    path: '/products',
    dropdown: [
      { name: 'Sulphur Powder', path: '/products?category=powder' },
      { name: 'Sulphur Granules', path: '/products?category=granules' },
      { name: 'Agricultural Fertilizers', path: '/products?category=fertilizers' },
      { name: 'Sulphur WDG & Fungicides', path: '/products?category=fungicides' },
      { name: 'Potassium Carbonate', path: '/products?category=potassium' },
    ]
  },
  { name: 'Custom Request', path: '/custom-request' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container">
        {/* Top Bar with Contact Info */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-100 mb-4">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`tel:${contactInfo.secondaryPhone}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.secondaryPhone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors ${
                        isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </NavLink>
                  
                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                        >
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link 
            to="/custom-request" 
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary hover:bg-primary-dark text-gray-900 font-medium rounded-lg transition-colors"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="container py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-base font-medium ${
                            isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                          }`
                        }
                        onClick={closeMenu}
                      >
                        {link.name}
                      </NavLink>
                      
                      {/* Mobile dropdown items */}
                      {link.dropdown && (
                        <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-2 space-y-1">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              className="block px-3 py-1.5 text-base text-gray-600 hover:text-primary"
                              onClick={closeMenu}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Mobile Contact Info */}
                <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4">
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a href={`tel:${contactInfo.secondaryPhone}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.secondaryPhone}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <Link to="/custom-request" className="btn btn-primary mt-3" onClick={closeMenu}>
                    Request a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}