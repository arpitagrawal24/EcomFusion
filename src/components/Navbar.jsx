
const Navbar = ({ showNavbar, toggleNavbar }) => {


    return (
        <div className="container mx-auto z-50  absolute top-0 left-0">
            {showNavbar && (
                <div className="absolute top-0 left-0 h-screen w-64 shadow-md bg-gray-800 bg-opacity-90 flex flex-col items-start space-y-2 p-4 rounded-br-lg">
                    <div>
                        <button className="text-white flex justify-end w-full" onClick={toggleNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <button className="text-white py-4 mx-auto">Home</button>
                    <button className="text-white py-4 mx-auto">Products</button>
                    <button className="text-white py-4 mx-auto">About</button>
                    <button className="text-white py-4 mx-auto">Contact</button>
                    <button className="text-white py-4 mx-auto">Login</button>
                    <button className="text-white py-4 mx-auto">Wishlist</button>
                    <button className="text-white py-4 mx-auto">Track Order</button>
                    <button className="text-white py-4 mx-auto">Help</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
