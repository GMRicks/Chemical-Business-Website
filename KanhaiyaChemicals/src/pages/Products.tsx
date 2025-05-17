import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory, getCategories, products } from '../data/products';

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  
  // Get category from URL on initial load
  useEffect(() => {
    document.title = 'Our Products - Kanhaiya Chemicals';
    
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
      const categoryProducts = getProductsByCategory(categoryParam);
      setFilteredProducts(categoryProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);
  
  // Handle category filter
  const handleCategoryFilter = (categoryId: string) => {
    if (activeCategory === categoryId) {
      // Clear filter if already active
      setActiveCategory(null);
      setFilteredProducts(products);
      navigate('/products');
    } else {
      setActiveCategory(categoryId);
      const categoryProducts = getProductsByCategory(categoryId);
      setFilteredProducts(categoryProducts);
      navigate(`/products?category=${categoryId}`);
    }
  };
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      if (activeCategory) {
        setFilteredProducts(getProductsByCategory(activeCategory));
      } else {
        setFilteredProducts(products);
      }
      return;
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    let productsToSearch = activeCategory ? getProductsByCategory(activeCategory) : products;
    
    const results = productsToSearch.filter(product => 
      product.name.toLowerCase().includes(searchTermLower) || 
      product.description.toLowerCase().includes(searchTermLower)
    );
    
    setFilteredProducts(results);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory(null);
    setFilteredProducts(products);
    navigate('/products');
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5412232/pexels-photo-5412232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Kanhaiya Chemicals Products"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
              <p className="text-xl text-gray-100">
                Discover our comprehensive range of high-quality sulfur products designed for various industrial, agricultural, and pharmaceutical applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search Products
                  </h3>
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products..."
                        className="input w-full"
                      />
                      <button 
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                      >
                        <Search className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryFilter(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category.id 
                            ? 'bg-primary text-gray-900 font-medium' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {(activeCategory || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 text-sm flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  {activeCategory 
                    ? categories.find(c => c.id === activeCategory)?.name 
                    : 'All Products'}
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} products found
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-2">No products found matching your criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:text-primary-dark underline"
                  >
                    Clear filters and try again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}