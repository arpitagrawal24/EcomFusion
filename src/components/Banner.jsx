import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const Banner = ({ searchTerm, handleSearch, category, handleCategoryChange, toggleNavbar, showNavbar }) => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <div className="relative h-80 pb-2">
            <Carousel autoPlay infiniteLoop showThumbs={false} autoFocus={true} showStatus={false}>
                <div className="flex items-center justify-center">
                    <img src={image1} alt="Image 1" className="w-full object-cover h-80" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={image2} alt="Image 2" className="w-full object-cover h-80" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={image3} alt="Image 3" className="w-full object-cover h-80" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={image4} alt="Image 4" className="w-full object-cover h-80" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={image5} alt="Image 5" className="w-full object-cover h-80" />
                </div>
            </Carousel>

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-5 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Ecom Fusion</h1>

                <div className='flex flex-wrap justify-center items-center w-full mb-4'>
                    <button className="text-white border-0 bg-gray-800 p-2 rounded-md" onClick={toggleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <select
                        className="border border-gray-300 p-2 rounded-md m-2"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men\'s clothing">Men's Clothing</option>
                        <option value="women\'s clothing">Women's Clothing</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search products"
                        className="border w-1/2 border-gray-300 p-2 rounded-md m-2"
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <select
                        className="border border-gray-300 p-2 rounded-md m-2"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>

                    <button className="text-white border-0 bg-gray-800 p-2  m-2 rounded-md">
                        Add to Cart
                    </button>

                    <button className="text-white border-0 bg-gray-800 p-2 m-2 rounded-md">
                        Sign Up
                    </button>

                </div>

                <p className="text-white text-sm mb-2">Explore our wide range of products and find what you need!</p>

                <button className="bg-black text-white px-4 py-2 m-4 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
