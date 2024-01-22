import React from 'react';
import './adminpanel.css';


const Admin: React.FC = () => {
    return (
        <>
            <div className="admin-bg">
                <div className="holder">
                    <div className="button-holder">
                        <button> Add Product</button>
                        <button> Update Product</button>
                        <button> Delete Product</button>
                        <div className="content">

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Admin;