import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '+91 99305 44114';
  const message = encodeURIComponent('Hello Kanhaiya Chemicals, I would like to inquire about your products.');
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}