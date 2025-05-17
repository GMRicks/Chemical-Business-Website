import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="text-white font-medium text-sm">
              Starting from
            </p>
            <p className="text-primary font-bold text-xl mb-1">
              {product.price}
            </p>
            <p className="text-white text-xs opacity-80">
              Min. Order: {product.minOrderQuantity}
            </p>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {product.description.substring(0, 100)}...
          </p>
          
          <motion.div 
            className="flex items-center text-primary font-medium"
            animate={{ 
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}