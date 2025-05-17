import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const industries = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    image: '/images/Agriculture.jpg',
    description: 'Our agricultural sulfur products improve soil health and crop yields while controlling fungal diseases.',
    products: ['Sulphur 80% WDG', 'Sulphur 90% WDG', 'Sulphur 85% DP']
  },
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals',
    image: '/images/Pharamceutical.jpg',
    description: 'High-purity sulfur and potassium products meeting stringent quality requirements for pharmaceutical applications.',
    products: ['Technical Sulphur Powder', 'Potassium Carbonate Powder']
  },
  {
    id: 'chemical',
    title: 'Chemical Industry',
    image: '/images/Chemical_Industry .jpg',
    description: 'Premium sulfur materials for various chemical manufacturing processes and specialty applications.',
    products: ['Industrial Sulphur Powder', 'Sulphur Pastilles']
  },
  {
    id: 'rubber',
    title: 'Rubber Manufacturing',
    image: '/images/Rubber_manufacturing.jpg',
    description: 'Specialized sulfur formulations for vulcanization and other rubber processing requirements.',
    products: ['Rubber Grade Sulphur Powder', 'Technical Sulphur Powder']
  },
  {
    id: 'industrial',
    title: 'Industrial Applications',
    image: '/images/Industrial_applications .jpg',
    description: 'Diverse range of sulfur products for multiple industrial processes and manufacturing needs.',
    products: ['Yellow Sulphur Granules', 'Industrial Sulphur Powder']
  }
];

export default function IndustriesSection() {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container">
        <SectionTitle
          title="Industries We Serve"
          subtitle="Our premium sulfur products are used across multiple industries worldwide, delivering consistent quality and performance for diverse applications."
          center
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 text-white">{industry.title}</h3>
                <p className="text-gray-200 mb-4 text-sm">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm text-gray-300 mb-2">Related Products:</h4>
                  <ul className="space-y-1">
                    {industry.products.map(product => (
                      <li key={product} className="text-sm text-primary">
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/products?industry=${industry.id}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span>View Products</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}