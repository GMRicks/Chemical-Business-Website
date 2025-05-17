import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Select a few featured products, one from each category
  const featuredProducts = [
    products.find(p => p.id === 'industrial-sulphur-powder'),
    products.find(p => p.id === 'yellow-sulphur-granules'),
    products.find(p => p.id === 'sulphur-80-wdg'),
    products.find(p => p.id === 'potassium-carbonate-powder')
  ].filter(Boolean);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Our Premium Products"
          subtitle="Discover our wide range of high-quality sulfur products designed for various industrial, agricultural, and pharmaceutical applications."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            product && (
              <Card 
                key={product.id} 
                padded={false}
                className="group overflow-hidden"
              >
                <Link 
                  to={`/products/${product.id}`}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-80" />
                    
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
                        x: hoveredId === product.id ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.div>
                  </div>
                </Link>
              </Card>
            )
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light font-medium transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}