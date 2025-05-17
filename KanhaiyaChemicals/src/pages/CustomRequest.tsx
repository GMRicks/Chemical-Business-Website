import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, BookMarked, Beaker, TruckIcon, ClipboardCheck } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Form from '../components/ui/Form';
import { customRequestFields } from '../utils/forms';

export default function CustomRequest() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const steps = [
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-primary" />,
      title: 'Submit Your Requirements',
      description: 'Fill out our custom request form with your specific chemical needs and specifications.'
    },
    {
      icon: <BookMarked className="w-12 h-12 text-primary" />,
      title: 'Get a Custom Quote',
      description: 'Our team will review your requirements and provide a detailed quote within 24-48 hours.'
    },
    {
      icon: <Beaker className="w-12 h-12 text-primary" />,
      title: 'Product Development',
      description: 'Once approved, we develop your custom formulation according to your specifications.'
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: 'Quality Assurance',
      description: 'All custom products undergo rigorous testing to ensure they meet your requirements.'
    },
    {
      icon: <TruckIcon className="w-12 h-12 text-primary" />,
      title: 'Delivery',
      description: 'Your custom product is carefully packaged and delivered to your specified location.'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5699495/pexels-photo-5699495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Laboratory chemicals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Custom Chemical Solutions
              </h1>
              <p className="text-xl text-gray-100">
                Can't find exactly what you need? We specialize in developing custom sulfur formulations tailored to your specific requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Tailored Solutions for Your Unique Needs"
            subtitle="At Kanhaiya Chemicals, we understand that standard products don't always meet specialized requirements. Our custom formulation service offers tailored solutions specifically designed for your unique applications."
            center
          />
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              With over 30 years of experience in sulfur chemistry, our team of experts can develop custom formulations with precise specifications for a wide range of industries including agriculture, pharmaceuticals, rubber manufacturing, and more.
            </p>
            
            <p className="text-gray-700 mb-10">
              Whether you need a specific purity level, particle size, formulation type, or packaging configuration, we work closely with you to create a product that perfectly matches your requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Precise Specifications</h3>
                <p className="text-gray-600">
                  Custom purity levels, particle sizes, and formulations to match your exact needs
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Expert Formulation</h3>
                <p className="text-gray-600">
                  Developed by our team with decades of experience in sulfur chemistry
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-gray-600">
                  Rigorous testing and quality control for every custom product we develop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Custom Solution Process"
            subtitle="From inquiry to delivery, we provide a streamlined process to bring your custom chemical needs to reality."
            center
          />
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex justify-center items-center relative z-10">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 m-2 md:max-w-md">
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-white">
                          <span className="text-xs font-bold text-gray-900">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Request Form Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Request Your Custom Solution"
            subtitle="Fill out the form below with your specific requirements, and our team will get back to you within 24 hours."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">Thank You for Your Request!</h3>
                <p className="text-lg mb-6">
                  We've received your custom product inquiry and our team will review your requirements promptly.
                </p>
                <p>
                  A member of our technical team will contact you within 24 hours to discuss your needs in more detail and provide information about the next steps.
                </p>
              </motion.div>
            ) : (
              <Form
                fields={customRequestFields}
                formType="custom_request"
                onSuccess={() => setFormSubmitted(true)}
                submitButtonText="Submit Custom Request"
                className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}