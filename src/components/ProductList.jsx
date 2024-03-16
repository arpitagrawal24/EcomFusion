/* eslint-disable react/prop-types */
const ProductList = ({ products }) => {
    const getColorFromRating = (rating) => {
        if (rating >= 4.5) {
            return 'bg-green-500';
        } else if (rating >= 3) {
            return 'bg-yellow-500';
        } else {
            return 'bg-red-500';
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover object-center rounded-md mb-4"
                    />
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-600">${product.price}</p>
                        <p className={`${getColorFromRating(product.rating.rate)} rounded-md px-1 flex items-center`}>
                            {product.rating.rate} ⭐
                        </p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
