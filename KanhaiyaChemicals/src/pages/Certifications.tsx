import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  
  const handleCertificationClick = (id: string) => {
    setSelectedCertification(id === selectedCertification ? null : id);
  };
  
  const getSelectedCertification = () => {
    return certifications.find(cert => cert.id === selectedCertification);
  };
  
  const handlePrevious = () => {
    if (!selectedCertification) return;
    
    const currentIndex = certifications.findIndex(cert => cert.id === selectedCertification);
    if (currentIndex <= 0) {
      setSelectedCertification(certifications[certifications.length - 1].id);
    } else {
      setSelectedCertification(certifications[currentIndex - 1].id);
    }
  };
  
  const handleNext = () => {
    if (!selectedCertification) return;
    
    const currentIndex = certifications.findIndex(cert => cert.id === selectedCertification);
    if (currentIndex >= certifications.length - 1) {
      setSelectedCertification(certifications[0].id);
    } else {
      setSelectedCertification(certifications[currentIndex + 1].id);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Kanhaiya Chemicals Certifications"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Certifications</h1>
              <p className="text-xl text-gray-100">
                Quality assurance is at the heart of everything we do. Our certifications validate our commitment to excellence and industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Quality & Compliance Certifications"
            subtitle="At Kanhaiya Chemicals, we maintain rigorous quality control processes validated by internationally recognized certifications. These credentials demonstrate our commitment to excellence in every product we manufacture."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Our Certifications Matter</h3>
                  <p className="text-gray-700">
                    Our certifications ensure that our products and processes meet international standards for quality, safety, and environmental responsibility. When you choose Kanhaiya Chemicals, you're choosing a partner committed to excellence at every level.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">Validated quality management systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">Internationally recognized standards</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regular auditing and verification</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compliance with industry regulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Quality Credentials"
            subtitle="Click on any certification to view more details."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCertification === certification.id 
                      ? 'ring-2 ring-primary ring-offset-2' 
                      : ''
                  }`}
                  onClick={() => handleCertificationClick(certification.id)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{certification.name}</h3>
                    <p className="text-gray-600 mb-4">{certification.description}</p>
                    <p className="text-sm text-gray-500">Issued by: {certification.issuedBy}</p>
                    {certification.validUntil && (
                      <p className="text-sm text-gray-500 mt-1">
                        Valid until: {certification.validUntil}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for selected certification */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {getSelectedCertification() && (
                <div className="p-6">
                  <div className="relative">
                    <img
                      src={getSelectedCertification()?.imageUrl}
                      alt={getSelectedCertification()?.name}
                      className="w-full h-60 object-cover rounded-lg mb-6"
                    />
                    
                    {/* Navigation buttons */}
                    <button
                      onClick={handlePrevious}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">
                    {getSelectedCertification()?.name}
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                      {getSelectedCertification()?.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Issued by:</p>
                        <p className="font-medium">{getSelectedCertification()?.issuedBy}</p>
                      </div>
                      {getSelectedCertification()?.validUntil && (
                        <div>
                          <p className="text-sm text-gray-500">Valid until:</p>
                          <p className="font-medium">{getSelectedCertification()?.validUntil}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={() => setSelectedCertification(null)}
                      className="btn btn-outline"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quality Commitment Section */}
      <section className="section bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Commitment</h2>
            <p className="text-lg text-gray-100 mb-8">
              Beyond certifications, quality is embedded in our company culture. Every product we manufacture undergoes rigorous testing to ensure it meets our high standards before reaching your hands.
            </p>
            <p className="text-lg text-gray-100 mb-10">
              We continuously invest in quality improvement, staff training, and advanced manufacturing techniques to deliver excellence with every order.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Rigorous Testing</h3>
                <p className="text-gray-200">
                  Every batch is tested for purity, consistency, and performance
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Documented Processes</h3>
                <p className="text-gray-200">
                  Standardized procedures ensure consistent quality every time
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Improvement</h3>
                <p className="text-gray-200">
                  Regular audits and feedback drive ongoing enhancements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}