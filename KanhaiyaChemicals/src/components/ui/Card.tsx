import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padded?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hoverable = true,
  padded = true 
}: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-xl shadow-md overflow-hidden border border-gray-100
        ${hoverable ? 'transition-all duration-300 hover:shadow-lg' : ''}
        ${padded ? 'p-6' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}