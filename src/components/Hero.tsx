import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Lazy load Scene3D to improve initial load time
const Scene3D = lazy(() => import('./Scene3D'))

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
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
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200" id="hero">
            <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
                <Scene3D />
            </Suspense>
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#394042] dark:text-white mb-6">
                        Honza Gregor
                    </h1>
                    <h2 className="text-3xl md:text-4xl text-[#728087] dark:text-gray-300 mb-8">
                        Web Developer & Designer
                    </h2>
                    <p className="text-xl text-[#728087] dark:text-gray-400 max-w-2xl mx-auto mb-12">
                        Vytvářím moderní a responzivní webové stránky, které kombinují estetiku s funkcionalitou. Specializuji se na vývoj webových aplikací s důrazem na výkon a uživatelskou zkušenost.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={itemVariants}
                    role="group"
                    aria-label="Hlavní akce"
                >
                    <motion.button
                        onClick={() => scrollToSection('kontakt')}
                        className="bg-[#2B81EB] text-white px-8 py-3 rounded-md hover:bg-[#4D87C0] transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Chci lepší web - přejít na kontaktní formulář"
                        role="button"
                    >
                        Chci lepší web
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection('sluzby')}
                        className="border-2 border-[#394042] dark:border-white text-[#394042] dark:text-white px-8 py-3 rounded-md hover:bg-[#394042] dark:hover:bg-white hover:text-white dark:hover:text-[#394042] transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Zjistit více o službách - přejít na sekci služeb"
                        role="button"
                    >
                        Zjistit více
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero 