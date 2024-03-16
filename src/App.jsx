import axios from 'axios';
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category ? `https://fakestoreapi.com/products/category/${category}`
          : 'https://fakestoreapi.com/products';
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <Navbar
        showNavbar={showNavbar}
        toggleNavbar={toggleNavbar}
      />
      <Banner
        category={category}
        searchTerm={searchTerm}
        showNavbar={showNavbar}
        handleSearch={handleSearch}
        toggleNavbar={toggleNavbar}
        handleCategoryChange={handleCategoryChange}
      />
      <h2 className="text-2xl font-bold my-4 flex justify-center">
        {category ? `Showing ${category} products` : 'All Products'}
      </h2>
      <ProductList products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
