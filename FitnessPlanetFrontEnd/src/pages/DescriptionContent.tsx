// DescriptionContent.tsx
import React, { useEffect, useState } from 'react';

interface DescriptionContentProps {
    productId: number;
}

const DescriptionContent: React.FC<DescriptionContentProps> = ({ productId }) => {
    const [productDetails, setProductDetails] = useState<any>(null);

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

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    // Render the product details
    return (
        <div>
            <h2>{productDetails.productName}</h2>
            <p>{productDetails.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default DescriptionContent;
