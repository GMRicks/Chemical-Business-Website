import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from '../ui/Logo';

const contactInfo = {
  phone: '+91 99305 44114',
  email: 'info@kanhaiyachemicals.com',
  whatsapp: '+91 99305 44114',
  address: 'Andheri West, Mumbai, Maharashtra, India'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-gray-400 mt-4">
              Established in 1992, Kanhaiya Chemicals is a leading manufacturer of premium quality 
              sulphur products, serving agriculture, pharmaceuticals & industries worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Website</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-400 hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/custom-request" className="text-gray-400 hover:text-primary transition-colors">
                  Custom Requests
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=powder" className="text-gray-400 hover:text-primary transition-colors">
                  Sulphur Powder
                </Link>
              </li>
              <li>
                <Link to="/products?category=granules" className="text-gray-400 hover:text-primary transition-colors">
                  Sulphur Granules
                </Link>
              </li>
              <li>
                <Link to="/products?category=fertilizers" className="text-gray-400 hover:text-primary transition-colors">
                  Agricultural Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/products?category=fungicides" className="text-gray-400 hover:text-primary transition-colors">
                  Sulphur WDG & Fungicides
                </Link>
              </li>
              <li>
                <Link to="/products?category=potassium" className="text-gray-400 hover:text-primary transition-colors">
                  Potassium Carbonate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Kanhaiya Chemicals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}