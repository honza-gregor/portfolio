import React from 'react'
import { FiMail, FiNavigation, FiSmartphone } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="kontakt">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] mb-6 relative inline-block">
                        Kontakt
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
                    </h2>
                    <p className="text-[#728087] text-lg max-w-2xl mx-auto">
                        Máte zájem o spolupráci nebo chcete vědět více? Neváhejte mě kontaktovat.
                    </p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-2 gap-16 items-start"
                    variants={containerVariants}
                >
                    <motion.div
                        className="space-y-10 bg-white p-8 rounded-2xl shadow-lg min-h-[400px]"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-[#394042] mb-4 flex items-center gap-2">
                                <FiMail className="text-[#2B81EB]" />
                                Napište mi
                            </h3>
                            <a
                                href="mailto:john.g22@seznam.cz"
                                className="text-[#728087] hover:text-[#2B81EB] transition-colors text-lg"
                            >
                                john.g22@seznam.cz
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-[#394042] mb-4 flex items-center gap-2">
                                <FiSmartphone className="text-[#2B81EB]" />
                                Zavolejte mi
                            </h3>
                            <a
                                href="tel:+420608682944"
                                className="text-[#728087] hover:text-[#2B81EB] transition-colors text-lg"
                            >
                                +420 608 082 944
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-[#394042] mb-4 flex items-center gap-2">
                                <FiNavigation className="text-[#2B81EB]" />
                                Kde mě najdete
                            </h3>
                            <p className="text-[#728087] text-lg">
                                Uherský Brod Nová 1 1263
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.521655656891!2d17.643845776886714!3d49.02501787141425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713706870c5b8b9%3A0x7c31dddea4cc7d89!2zTm92w6EgMTI2My8xLCA2ODggMDEgVWhlcnNrw70gQnJvZA!5e0!3m2!1scs!2scz!4v1710271144400!5m2!1scs!2scz"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa sídla"
                            className="w-full h-full min-h-[400px]"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact 