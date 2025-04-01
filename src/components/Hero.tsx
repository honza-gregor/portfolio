import React from 'react'
import Scene3D from './Scene3D'
import { motion } from 'framer-motion'

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="hero">
            <Scene3D />
            <motion.div
                className="relative max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold text-[#394042] leading-tight mb-6"
                            variants={itemVariants}
                        >
                            Nejmodernější<br />webové řešení dělané<br />na míru pro vás
                        </motion.h1>
                        <motion.p
                            className="text-[#728087] text-lg mb-8"
                            variants={itemVariants}
                        >
                            Efektivní a inovativní webové stránky, které zajistí vaše očekávání a naplní komerční cíle, které dělají vaše podnikání úspěšné.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={itemVariants}
                        >
                            <motion.button
                                onClick={() => scrollToSection('kontakt')}
                                className="bg-[#2B81EB] text-white px-8 py-3 rounded-md hover:bg-[#4D87C0] transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Chci lepší web
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('sluzby')}
                                className="border-2 border-[#394042] text-[#394042] px-8 py-3 rounded-md hover:bg-[#394042] hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Zjistit více
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero 