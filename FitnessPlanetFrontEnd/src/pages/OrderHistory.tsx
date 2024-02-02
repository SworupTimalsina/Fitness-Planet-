import React, { useState, useEffect } from 'react';
import TopBar from "./components/topbar.tsx";
import "./OrderHistory.css"

const OrderHistory: React.FC = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await fetch('http://localhost:8080/order/history');
                if (response.ok) {
                    const data = await response.json();
                    setOrderHistory(data);
                } else {
                    console.error('Error fetching order history:', response.status);
                }
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };

        fetchOrderHistory();
    }, []);

    return (
        <div className="seto-bag">
            <TopBar/>
            <h2 className="order-his">Order History</h2>
            <ul className="font-stuff">
                {orderHistory.map(order => (
                    // @ts-ignore
                    <li key={order.orderId}>
                        {/*@ts-ignore*/}
                        <p>Order ID: {order.orderId}</p>
                        {/*@ts-ignore*/}
                        <p>Product: {order.productName}</p>
                        {/*@ts-ignore*/}
                        <p>Price: Rs. {order.price}</p>
                        {/*@ts-ignore*/}
                        <p>Quantity: {order.quantity}</p>
                        {/*@ts-ignore*/}
                        <p>Total: Rs. {order.total}</p>
                        {/*@ts-ignore*/}
                        {/*<p>Order Date: {order.orderDate}</p>*/}
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;