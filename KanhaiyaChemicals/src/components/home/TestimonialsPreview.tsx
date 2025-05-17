import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, StarHalf } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { testimonials, satisfactionMetrics } from '../../data/testimonials';

export default function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-primary text-primary" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-primary text-primary" />);
    }
    
    return stars;
  };

  return (
    <section className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="We take pride in our 100% customer satisfaction rating across response time, product quality, and delivery reliability."
          center
        />
        
        {/* Satisfaction Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Response Rate', value: satisfactionMetrics.response },
            { label: 'Product Quality', value: satisfactionMetrics.quality },
            { label: 'Delivery Reliability', value: satisfactionMetrics.delivery }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-medium text-gray-700 mb-3">{metric.label}</h3>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
              <p className="mt-2 text-right font-medium text-primary">{metric.value}%</p>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Carousel */}
        <div 
          ref={testimonialRef}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-8">
            <div className="flex">
              {renderStars(testimonials[activeIndex].rating)}
            </div>
          </div>
          
          <div className="text-5xl text-primary/20 font-serif">"</div>
          
          <div className="min-h-[180px] flex items-center justify-center">
            <motion.div
              key={activeIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-700 italic mb-6">
                {testimonials[activeIndex].content}
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/testimonials" 
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light font-medium transition-colors"
          >
            View All Testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}