import React, { useState } from 'react';

interface EllipticalButtonProps {
    buttonText: string;
}

const EllipticalButton: React.FC<EllipticalButtonProps> = ({ buttonText }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className="res" onClick={openModal}>
                {buttonText}
            </button>

            {isModalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Your pop-up content goes here.</p>
                </div>
            )}

            {isModalOpen && <div className="overlay" onClick={closeModal}></div>}
        </div>
    );
};

export default EllipticalButton;