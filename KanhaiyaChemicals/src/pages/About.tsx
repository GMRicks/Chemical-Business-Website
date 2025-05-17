import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, History, Users, Calendar, Briefcase, Clock, BarChart } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Kanhaiya Chemicals';
  }, []);

  const historyTimeline = [
    {
      year: '1992',
      title: 'Company Founded',
      description: 'Kanhaiya Chemicals was established as a sole proprietorship in Mumbai, Maharashtra.'
    },
    {
      year: '2000',
      title: 'Manufacturing Expansion',
      description: 'Expanded manufacturing capabilities with a new production facility.'
    },
    {
      year: '2008',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification for quality management systems.'
    },
    {
      year: '2015',
      title: 'Product Line Expansion',
      description: 'Introduced new sulfur-based products for agricultural and pharmaceutical industries.'
    },
    {
      year: '2020',
      title: 'Sustainable Manufacturing',
      description: 'Implemented eco-friendly manufacturing processes and gained ISO 14001 certification.'
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Quality Excellence',
      description: 'We are committed to delivering the highest quality products that meet international standards.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Customer Commitment',
      description: 'We prioritize customer satisfaction and build long-term relationships based on trust.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: 'Innovation',
      description: 'We continuously improve our products and processes to meet evolving industry needs.'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4344555/pexels-photo-4344555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Chemical manufacturing facility"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
              <p className="text-xl text-gray-100">
                Established in 1992, Kanhaiya Chemicals has become a trusted name in the sulphur industry, known for premium quality and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kanhaiya Chemicals facility"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="From humble beginnings to becoming a leading sulfur product manufacturer, our journey has been defined by quality, innovation, and customer satisfaction."
              />
              
              <p className="text-gray-700 mb-6">
                Founded in 1992 in Mumbai, Maharashtra, Kanhaiya Chemicals started as a small enterprise with a vision to provide high-quality sulfur products to the Indian market. Over three decades, we have grown into a respected manufacturer serving agriculture, pharmaceuticals, and various industries worldwide.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our commitment to excellence has earned us ISO 9001:2015 certification and a reputation for premium quality products, seamless delivery, and outstanding client satisfaction. With a team of experienced professionals and state-of-the-art manufacturing facilities, we continue to expand our product range and market reach.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">30+</p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Clients Worldwide</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">On-time Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Guided by our core principles, we strive to deliver exceptional value while maintaining the highest standards of quality and sustainability."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">M</span>
                </span>
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide high-quality sulfur products that meet the diverse needs of our customers across industries, ensuring consistent performance, timely delivery, and excellent service. We are committed to maintaining the highest standards of quality, safety, and environmental responsibility in all our operations.
              </p>
            </Card>
            
            <Card className="bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">V</span>
                </span>
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the preferred global supplier of sulfur-based products, recognized for innovation, reliability, and customer-centric solutions. We aspire to expand our market presence while maintaining our commitment to quality, developing sustainable manufacturing practices, and fostering strong relationships with customers, suppliers, and communities.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            subtitle="These fundamental principles guide our decisions and shape our company culture."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company History Timeline */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Journey"
            subtitle="From our founding to the present day, we've continually evolved to meet the changing needs of our customers and the industry."
            center
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0 hidden md:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {historyTimeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                      <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        <span className="inline-block px-4 py-1 bg-primary text-gray-900 font-bold rounded-full mb-2">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-5 h-5 rounded-full bg-primary z-10"></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-100 mb-8">
              Discover our wide range of high-quality sulfur products or request a custom formulation tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products" className="btn btn-primary">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 hover:border-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}