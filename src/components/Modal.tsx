import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
            <div className="relative max-w-[90vw] max-h-[90vh] mx-4">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
                >
                    ✕
                </button>
                <div className="flex items-center justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal; 