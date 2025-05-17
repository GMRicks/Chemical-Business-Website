import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Form from '../components/ui/Form';
import { contactFields } from '../utils/forms';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Contact Us - Kanhaiya Chemicals';
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const mapImage = document.createElement('img');
      mapImage.src = 'https://images.pexels.com/photos/12317128/pexels-photo-12317128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      mapImage.alt = 'Google Map showing Kanhaiya Chemicals locations';
      mapImage.className = 'w-full h-full object-cover rounded-lg';
      mapRef.current.appendChild(mapImage);
    }
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contact Kanhaiya Chemicals"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-gray-100">
                Get in touch with our team for inquiries, information, or assistance. We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Google Map Section */}
      <section className="section bg-white pt-0 -mt-16">
        <div className="container">
          <div 
            ref={mapRef} 
            className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200"
          ></div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you. Contact us using any of the methods below or fill out the form and we'll get back to you as soon as possible."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Head Office</h3>
              <p className="text-gray-600 mb-1">Kanhaiya Chemicals</p>
              <p className="text-gray-600">
                Andheri West, Mumbai, Maharashtra, India - 400053
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing Plant</h3>
              <p className="text-gray-600 mb-1">Kanhaiya Chemicals</p>
              <p className="text-gray-600">
                Taloja Industrial Area, Raigad, Maharashtra, India - 410208
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-1">Sales: +91 9876 543210</p>
              <p className="text-gray-600">Support: +91 9876 543211</p>
              <a 
                href="tel:+919876543210"
                className="inline-block mt-3 text-primary font-medium hover:text-primary-dark"
              >
                Call Us
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-1">Sales: sales@kanhaiyachemicals.com</p>
              <p className="text-gray-600">Info: info@kanhaiyachemicals.com</p>
              <a 
                href="mailto:info@kanhaiyachemicals.com"
                className="inline-block mt-3 text-primary font-medium hover:text-primary-dark"
              >
                Email Us
              </a>
            </motion.div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Business Hours</h3>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium">9:00 AM - 1:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Public Holidays:</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Have a question or need more information? Fill out the form below and we'll get back to you as soon as possible."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">Message Sent Successfully!</h3>
                <p className="text-lg">
                  Thank you for reaching out to us. We've received your message and will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <Form
                fields={contactFields}
                formType="contact"
                onSuccess={() => setFormSubmitted(true)}
                submitButtonText="Send Message"
                className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200"
              />
            )}
          </div>
        </div>
      </section>
      
      {/* WhatsApp & Connect Section */}
      <section className="section bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-100 mb-8">
              For immediate assistance, you can also reach out to us via WhatsApp or follow us on social media.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <a 
                href="https://wa.me/919876543210?text=Hello%20Kanhaiya%20Chemicals%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-lg hover:bg-[#128C7E] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              
              <a 
                href="mailto:info@kanhaiyachemicals.com"
                className="flex items-center justify-center gap-3 bg-primary text-gray-900 py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}