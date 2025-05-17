import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Leaf } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function AboutPreview() {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: 'Premium Quality',
      description: 'All our products undergo rigorous quality control to ensure the highest standards'
    },
    {
      icon: <Factory className="w-5 h-5 text-primary" />,
      title: 'Modern Manufacturing',
      description: 'State-of-the-art facilities with advanced technology for consistent production'
    },
    {
      icon: <Leaf className="w-5 h-5 text-primary" />,
      title: 'Environmentally Conscious',
      description: 'Sustainable manufacturing practices with minimal environmental impact'
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: 'ISO Certified',
      description: 'Internationally recognized quality management system certification'
    }
  ];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kanhaiya Chemicals facility"
                className="w-full h-full object-cover"
              />
              
              {/* Floating stats box */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">30+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-gray-600">Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/4 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Excellence in Sulfur Products Since 1992"
              subtitle="Kanhaiya Chemicals has been a trusted name in the sulfur industry for over three decades, known for premium quality, seamless delivery, and outstanding client satisfaction."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="mt-1 shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}