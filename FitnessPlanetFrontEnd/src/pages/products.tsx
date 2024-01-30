import React, {useEffect, useState} from 'react';
import "./products.css"
import DescriptionContent from "./DescriptionContent.tsx";
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";


interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewClick }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', maxHeight:'350px'}}>
        <img src={product.imageUrl} alt={product.productName} style={{width: '150px', height: '150px', marginBottom: '10px', marginLeft: '25px' }} />
        <p className="pro-naam">{product.productName}</p>
        <p>Price: Rs.{product.price}</p>
        <p>Category: {product.category}</p>
        <button onClick={() => onViewClick(product.id)}>View</button>
    </div>
);

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filterProductsByCategory = (category: string | null) => {
        if (category) {
            return products.filter((product) => product.category === category);
        }
        return products;
    };

    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const handleViewClick = (productId: number) => {
        setSelectedProductId(productId);
    };


    return (
        <>

<TopBar/>



            <div className="bg-pro">
                <div className="categories">
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Dumbbells')}>Dumbbells</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Treadmill')}>Treadmill</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Home Gyms')}>Home Gyms</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Jump Ropes')}>Jump Ropes</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Exercise Bikes')}>Exercise Bikes</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Rowing Machines')}>Rowing Machines</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Pull Up and Push Up Bar')}>Pull Up and Push Up Bar</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Core and Abdominal Trainers')}>Core and Abdominal Trainers</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory(null)}>All</button>
                </div>

                <div className="pro-dis" style={{ display: 'flex', flexWrap: 'wrap', width: '70%', color: 'black' }}>
                    {filterProductsByCategory(selectedCategory).map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick} />
                    ))}
                </div>
            </div>

            {selectedProductId && <DescriptionContent productId={selectedProductId} />}
            <BottomBar/>
        </TopBar>
    );
};

export default Products;