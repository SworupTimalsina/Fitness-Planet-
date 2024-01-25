import React, {useEffect, useState} from 'react';
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
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '60%' ,color: 'black'}}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>

        </>
    );
};

export default Products;
