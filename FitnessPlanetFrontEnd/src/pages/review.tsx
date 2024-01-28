import './review.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DescriptionContent from './DescriptionContent.tsx';
import ReviewContent from './ReviewContent.tsx';
import ComparePop from './comparepop.tsx';

interface ItemDTO {
    itemId: number;
    productName: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ReviewProps {}

const Review: React.FC<ReviewProps> = () => {
    const { productId } = useParams<{ productId?: string }>();
    const selectedProductId: number | null = productId ? parseInt(productId, 10) : null;
    const [checked, setChecked] = useState(false);
    const [comparePopVisible, setComparePopVisible] = useState(false);
    const [itemDTO, setItemDTO] = useState<ItemDTO | null>(null);

    const handleToggle = () => {
        setChecked(!checked);
    };

    const handleCompareButtonClick = () => {
        setComparePopVisible(true);
    };

    const closeComparePop = () => {
        setComparePopVisible(false);
    };

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                if (selectedProductId !== null) {
                    const response = await fetch(`http://localhost:8080/item/getById/${selectedProductId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setItemDTO(data);
                        console.log('Image URL:', itemDTO?.imageUrl);

                    } else {
                        console.error('Error fetching product data:', response.status);
                    }
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [selectedProductId, itemDTO]);

    console.log('Image URL:', itemDTO?.imageUrl);

    return (
        <body className="reviewbody">
        <div className="page-body">
            <div className="top-buttons">
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </div>
            <button className="coamper" onClick={handleCompareButtonClick}>
                Compare
            </button>
            {comparePopVisible && <ComparePop onClose={closeComparePop} />}
            <div className="image">
                <img src={itemDTO?.imageUrl} width="400" height="400" alt={itemDTO?.productName} />
            </div>
            <div className="change-page">
                <form className="sliding-page">
                    <label className="switch">
                        <input type="checkbox" checked={checked} onChange={handleToggle} />
                        <span className="slider round"></span>
                    </label>
                    <p>
                        {checked ? (
                            <ReviewContent />
                        ) : (
                            <DescriptionContent productId={selectedProductId} />
                        )}
                    </p>
                </form>
            </div>
        </div>
        </body>
    );
};

export default Review;
