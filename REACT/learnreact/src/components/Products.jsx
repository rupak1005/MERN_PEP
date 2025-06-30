import React, { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
    }, []);


    return (
        <div className="container mx-auto p-6 bg-zinc-100 min-w-full">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">Products</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
                        <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            className="  m-auto w-fit h-48  object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-green-500 bg-green-100 py-1 px-2 rounded-full">
                                    ${product.price}
                                </span>
                                <span className="text-sm text-yellow-600 bg-yellow-100 rounded-full px-2 py-1">
                                    Rating: {product.rating}/5
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
