import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./products.css"
import DescriptionContent from "./DescriptionContent.tsx";
import TopBar from "./components/topbar.tsx";


interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}


interface Order {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    total: number;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (data: { productId: number; quantity: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewClick }) => {
    const [quantity, setQuantity] = useState(1);
    const [isBuyClicked, setIsBuyClicked] = useState(false);
    // const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const navigate = useNavigate();

    const handleBuyClick = () => {
        onViewClick({ productId: product.id, quantity: 1 });
        // Navigate to the review page with the selected product's ID as a parameter
        navigate(`/review/${product.id}`);
    };


    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
    };

    // const handleBuyClick = () => {
    //     setIsBuyClicked(true);
    //     setSelectedProductId(product.id); // Set the selectedProductId for this card
    // };

    const handleConfirmBuyClick = () => {
        onViewClick({ productId: product.id, quantity });
        setIsBuyClicked(false);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', maxHeight: '350px' }}>
            <img src={product.imageUrl} alt={product.productName} style={{ width: '150px', height: '150px', marginBottom: '10px', marginLeft: '25px' }} />
            <p className="pro-naam">{product.productName}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Category: {product.category}</p>

            {isBuyClicked ? (
                <>
                    <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                    <input
                        type="number"
                        id={`quantity-${product.id}`}
                        value={quantity}
                        onChange={handleQuantityChange}
                        min={1}
                    />
                    <button onClick={handleConfirmBuyClick}>Confirm Buy</button>
                </>
            ) : (
                <button onClick={handleBuyClick}>Buy</button>
            )}
        </div>
    );
};
const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const filterProducts = () => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    };

    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);

            const order: Order = {
                productId: selectedProduct.id,
                productName: selectedProduct.productName,
                price: selectedProduct.price,
                quantity: data.quantity,
                total: selectedProduct.price * data.quantity,
            };

            setOrders([...orders, order]);
            alert(`You have selected ${data.quantity} ${selectedProduct.productName}(s). Final Price: Rs.${order.total}`);
        }
    };

    const handleConfirmOrders = () => {
        // Send orders to the server
        fetch('http://localhost:8080/order/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orders),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle response from the server if needed
                console.log('Orders successfully submitted:', data);
                setOrders([]); // Clear orders after submitting
            })
            .catch((error) => console.error('Error submitting orders:', error));
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

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-inp"/>

                <div className="pro-dis" style={{ display: 'flex', flexWrap: 'wrap', width: '70%', color: 'black' }}>
                    {filterProducts().map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick} />
                    ))}
                </div>
                <button onClick={handleConfirmOrders}>Confirm Orders</button>
            </div>

            {selectedProductId && <DescriptionContent productId={selectedProductId} />}
        </>
    );
};

export default Products;