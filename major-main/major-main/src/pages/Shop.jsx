import React from 'react';

const Shop = () => {
  const products = [
    { name: 'Shirt' },
    { name: 'Shorts' },
    { name: 'Bucket' },
  ];

  // Add to Cart action
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart successfully!`);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-12">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-[#111] text-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center space-y-6"
          >
            {/* Product Name */}
            <h2 className="text-2xl font-semibold">{product.name}</h2>

            {/* Size Selection */}
            <div className="flex flex-col items-start space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>Small</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>Medium</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>Large</span>
              </label>
            </div>

            {/* Quantity Selection */}
            <div className="flex flex-col items-start space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>1 Piece</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>2 Pieces</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#E63946]" />
                <span>3 Pieces</span>
              </label>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-6 bg-[#E63946] hover:bg-[#DF3844] text-white font-semibold py-2 px-6 rounded-md transition-all"
              onClick={() => handleAddToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
