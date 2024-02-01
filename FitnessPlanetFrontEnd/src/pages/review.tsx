import './review.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DescriptionContent from './DescriptionContent.tsx';
import ReviewContent from './ReviewContent.tsx';
import ComparePop from './comparepop.tsx';
import TopBar from "./components/topbar.tsx";

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
                        const data: ItemDTO = await response.json();
                        setItemDTO(data);
                        console.log('Image URL:', data.imageUrl);
                    } else {
                        console.error('Error fetching product data:', response.status);
                    }
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [selectedProductId]);


    return (
        <body className="reviewbody">
        <div className="page-body">
        <TopBar/>
            <button className="coamper" onClick={handleCompareButtonClick}>
                Compare
            </button>
            {comparePopVisible && <ComparePop onClose={closeComparePop} />}
            <div className="image">
                <img src={itemDTO?.imageUrl} width="400" height="400" alt={itemDTO?.productName} className="img-prod"/>
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
                            //@ts-ignore
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
