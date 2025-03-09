import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    const fetchTrendingProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/trending`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1>Trending Canadian-Made Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <strong>{product.name}</strong> - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
