import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutPreview from '../components/home/AboutPreview';
import IndustriesSection from '../components/home/IndustriesSection';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = 'Kanhaiya Chemicals - Premium Sulphur Products Manufacturer';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <IndustriesSection />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}