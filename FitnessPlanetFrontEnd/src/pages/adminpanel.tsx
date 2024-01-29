import React, {useState} from 'react';
import './adminpanel.css';
import DeletePro from "./deleteproduct.tsx";
import AddPro from "./addproduct.tsx";
import UpdatePro from "./updateproducts.tsx";



const Admin: React.FC = () => {

    const [selectedComponent, setSelectedComponent] = useState('add'); // Default is 'Add Product'

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'add':
                return <AddPro />;
            case 'update':
                return <UpdatePro />;
            case 'delete':
                return <DeletePro />;
            default:
                return <AddPro />;
        }
    };
    return (
        <>
                <nav className="top-buttons">
                    <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                    <div className="buttons">
                        <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                        <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    </div>
                </nav>

            <div className="admin-bg">
                <div className="holder">
                    <div className="button-holder">
                        <button className="admin-button" onClick={() => setSelectedComponent('add')}> Add Product</button>
                        <button className="admin-button" onClick={() => setSelectedComponent('update')}> Update Product</button>
                        <button className="admin-button" onClick={() => setSelectedComponent('delete')}> Delete Product</button>

                    </div>


                    {renderComponent()}


                </div>
            </div>

        </>
    );
};

export default Admin;