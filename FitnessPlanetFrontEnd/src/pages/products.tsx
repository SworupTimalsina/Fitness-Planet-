import React from 'react';
import "./products.css"


interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        {/* Add more product details as needed */}
        <button>Add to Cart</button>
    </div>
);

const Products = () => {
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        // Add more products as needed
        { id: 3, name: 'Product 3', price: 39.99 },
        { id: 4, name: 'Product 4', price: 49.99 },
        { id: 5, name: 'Product 5', price: 59.99 },
        { id: 6, name: 'Product 6', price: 69.99 },
        { id: 7, name: 'Product 7', price: 79.99 },
        { id: 8, name: 'Product 8', price: 89.99 },
        { id: 9, name: 'Product 9', price: 99.99 },
        { id: 10, name: 'Product 10', price: 109.99 },
    ];

    return (
        <>

            <div className="top-buttons">
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>

            </div>



        <div className="bg-pro">
            <div className="categories">
                categories goes here
            </div>
            <h1>Browse Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' , width: '60%'}}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <h2>Shopping Cart</h2>
            <ul>
                {/* Render your shopping cart items here if needed */}
            </ul>
        </div>

        </>
    );
};

export default Products;
