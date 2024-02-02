import React, { useEffect, useState } from 'react';
import "./DescriptionContent.css"
import { useNavigate } from "react-router-dom";

interface DescriptionContentProps {
    productId: number;
}

const DescriptionContent: React.FC<DescriptionContentProps> = ({ productId }) => {

    const navigate = useNavigate();

    const [productDetails, setProductDetails] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Fetch data for the given productId and update productDetails state
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/item/getById/${productId}`);
                if (response.ok) {
                    const data = await response.json();
                    setProductDetails(data);
                } else {
                    console.error('Error fetching product details:', response.status);
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10) || 1; // Ensure a positive integer
        setQuantity(newQuantity);
    };

    const handleBuyClick = async () => {
        try {
            const response = await fetch('http://localhost:8080/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: productDetails.productName,
                    price: productDetails.price,
                    quantity: quantity,
                    total: productDetails.price * quantity,
                }),
            });

            if (response.ok) {
                alert('Purchase successful!');

                navigate('/products');
            } else {
                console.error('Error processing purchase:', response.status);
            }
        } catch (error) {
            console.error('Error processing purchase:', error);
        }
    };

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="details">
            <h3>{productDetails.productName}</h3>
            <label>Rs. {productDetails.price}</label>
            <p style={{ marginLeft: "100px" }}>
                Description: <br />
                {productDetails.description}
            </p>
            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                />
            </label>

            <button style={{ width: "90px", backgroundColor: "red", marginLeft: "300px", marginTop: "20px" }} onClick={handleBuyClick}>Buy</button>

        </div>
    );
};

export default DescriptionContent;