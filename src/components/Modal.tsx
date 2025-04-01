import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="relative max-w-[90vw] max-h-[90vh] mx-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.button
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </motion.button>
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal; 