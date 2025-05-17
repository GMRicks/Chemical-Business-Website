import { ArrowRight, FileText, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="section bg-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Sulphur Formulation?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto">
              Can't find exactly what you need? We specialize in custom sulphur products tailored to your specific requirements. Our expert team is ready to develop the perfect solution for your industry needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/custom-request" 
                variant="primary"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
              >
                Request Custom Solution
              </Button>
              <Button 
                href="/contact" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:text-gray-900 hover:border-white hover:bg-white"
                icon={<Headset className="w-5 h-5" />}
              >
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary-light rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-gray-900 flex items-center justify-center font-bold text-xl mx-auto mb-3">1</div>
                <h4 className="font-medium mb-2">Share Your Requirements</h4>
                <p className="text-sm text-gray-200">Tell us your specifications and application needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-gray-900 flex items-center justify-center font-bold text-xl mx-auto mb-3">2</div>
                <h4 className="font-medium mb-2">Get a Custom Quote</h4>
                <p className="text-sm text-gray-200">Receive a detailed proposal tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-gray-900 flex items-center justify-center font-bold text-xl mx-auto mb-3">3</div>
                <h4 className="font-medium mb-2">Production & Delivery</h4>
                <p className="text-sm text-gray-200">We manufacture to your specifications and deliver on time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}