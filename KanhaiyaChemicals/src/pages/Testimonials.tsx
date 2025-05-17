import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, Quote } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { testimonials, satisfactionMetrics } from '../data/testimonials';

export default function Testimonials() {
  const [selectedTestimonialId, setSelectedTestimonialId] = useState<number | null>(null);
  
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
  
  const getSelectedTestimonial = () => {
    return testimonials.find(t => t.id === selectedTestimonialId);
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Kanhaiya Chemicals Testimonials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Testimonials</h1>
              <p className="text-xl text-gray-100">
                See what our clients say about our products and services. We're proud of our 100% satisfaction rating.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Satisfaction Metrics */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="100% Customer Satisfaction"
            subtitle="Based on reviews from our customers across multiple platforms, we're proud to maintain a perfect satisfaction score in these key areas."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  className="bg-gray-50 rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{metric.label}</h3>
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
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-gray-700">
                <span className="font-semibold">IndiaMART Ratings:</span> Our client satisfaction scores are based on verified reviews from our IndiaMART profile and direct customer feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Read what our customers have to say about their experience working with us and using our products."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedTestimonialId(testimonial.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-10 h-10 text-primary/20" />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 line-clamp-4">
                    {testimonial.content}
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for full testimonial */}
      {selectedTestimonialId && (
        <div 
          className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonialId(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <Quote className="w-12 h-12 text-primary/20" />
              <div className="flex">
                {getSelectedTestimonial() && renderStars(getSelectedTestimonial()!.rating)}
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8">
              {getSelectedTestimonial()?.content}
            </p>
            
            <div>
              <p className="font-semibold text-gray-900 text-xl">
                {getSelectedTestimonial()?.name}
              </p>
              <p className="text-gray-600">
                {getSelectedTestimonial()?.position}, {getSelectedTestimonial()?.company}
              </p>
            </div>
            
            <button
              className="mt-8 px-6 py-2 bg-gray-200 rounded-lg text-gray-800 font-medium hover:bg-gray-300 transition-colors"
              onClick={() => setSelectedTestimonialId(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
      
      {/* Call to Action Section */}
      <section className="section bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Excellence</h2>
            <p className="text-lg text-gray-100 mb-8">
              Join our satisfied customers and discover why Kanhaiya Chemicals is the trusted choice for premium quality sulfur products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/products" className="btn btn-primary">
                Explore Our Products
              </a>
              <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 hover:border-white">
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}