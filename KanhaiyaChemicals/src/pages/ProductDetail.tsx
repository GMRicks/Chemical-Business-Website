import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Download, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Form from '../components/ui/Form';
import { getProductById, getProductsByCategory, Product } from '../data/products';
import { productInquiryFields } from '../utils/forms';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    if (productId) {
      const productData = getProductById(productId);
      if (productData) {
        setProduct(productData);
        setSelectedImage(productData.imageUrl);
        document.title = `${productData.name} - Kanhaiya Chemicals`;
        
        // Get related products from same category
        const related = getProductsByCategory(productData.category)
          .filter(p => p.id !== productId)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/yellow-sulphur-granules-sulphur-pestiles.pdf';
    link.download = 'Kanhaiya-Chemicals-Product-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <p>Product not found. Please check the URL or return to products page.</p>
        <Link to="/products" className="text-primary hover:text-primary-dark underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* More images would go here in a real implementation */}
              <div className="grid grid-cols-4 gap-2">
                <button 
                  onClick={() => setSelectedImage(product.imageUrl)} 
                  className={`rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === product.imageUrl ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-20 object-cover"
                  />
                </button>
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full mb-4">
                {getProductsByCategory(product.category)[0]?.category === product.category 
                  ? { 
                    'powder': 'Sulphur Powder', 
                    'granules': 'Sulphur Granules', 
                    'fertilizers': 'Agricultural Fertilizers',
                    'fungicides': 'Sulphur WDG & Fungicides',
                    'potassium': 'Potassium Carbonate'
                  }[product.category] 
                  : 'Product'
                }
              </span>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-primary mb-1">{product.price}</p>
                <p className="text-gray-700">
                  Minimum Order Quantity: <span className="font-medium">{product.minOrderQuantity}</span>
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Key Applications</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4 mb-8">
                <Button 
                  href="#inquiry-form" 
                  variant="primary"
                  icon={<Send className="w-5 h-5" />}
                >
                  Request Quote
                </Button>
                <Button 
                  onClick={handleDownloadBrochure}
                  variant="outline"
                  icon={<Download className="w-5 h-5" />}
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Product Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Inquiry Form */}
          <div className="mt-16" id="inquiry-form">
            <SectionTitle
              title="Interested in this product?"
              subtitle="Fill out the form below to request a quote or more information about this product."
            />
            
            <div className="max-w-2xl mx-auto">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">Thank You for Your Inquiry!</h3>
                  <p>
                    We've received your request about {product.name} and our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <Form
                  fields={productInquiryFields}
                  formType="product_inquiry"
                  onSuccess={() => setFormSubmitted(true)}
                  submitButtonText="Send Inquiry"
                  className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200"
                />
              )}
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link 
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="card overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedProduct.imageUrl}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-primary font-medium">{relatedProduct.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}