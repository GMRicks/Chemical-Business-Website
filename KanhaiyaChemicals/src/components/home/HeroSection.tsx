import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const heroImages = [
  {
    url: '/images/Hero-page.jpg',
    alt: 'Kanhaiya Chemicals manufacturing facility'
  },
  {
    url: '/images/Manufacturer_Photo.jpeg',
    alt: 'Our manufacturing process'
  },
  {
    url: '/images/Chemical_Industry .jpg',
    alt: 'Chemical industry applications'
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
          </div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm rounded-full bg-primary text-gray-900 font-medium">
            ISO Certified Manufacturer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Premium Sulphur Products for Global Industries
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-xl">
            Trusted since 1992, Kanhaiya Chemicals delivers exceptional quality sulphur-based products to agriculture, pharmaceuticals & industries worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              href="/products" 
              variant="primary" 
              size="lg"
            >
              View Products
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button 
              href="/custom-request" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 hover:border-white"
            >
              Request a Quote
            </Button>
          </div>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-x-8 gap-y-4 mt-12 -mb-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-gray-900 font-bold">30+</span>
            </div>
            <p className="text-white font-medium">Years of Excellence</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-gray-900 font-bold">ISO</span>
            </div>
            <p className="text-white font-medium">Certified Manufacturer</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-gray-900 font-bold">100%</span>
            </div>
            <p className="text-white font-medium">Customer Satisfaction</p>
          </div>
        </motion.div>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}