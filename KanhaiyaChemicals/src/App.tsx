import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Loader from './components/ui/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Products = lazy(() => import('./pages/Products.tsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.tsx'));
const CustomRequest = lazy(() => import('./pages/CustomRequest.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Certifications = lazy(() => import('./pages/Certifications.tsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.tsx'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-20">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/custom-request" element={<CustomRequest />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;