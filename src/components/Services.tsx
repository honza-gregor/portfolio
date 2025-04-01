import React from 'react'
import { FiCode, FiSmartphone, FiSearch, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Services: React.FC = () => {
    const services = [
        {
            icon: <FiCode className="w-8 h-8" />,
            title: "Webový vývoj",
            description: "Moderní a responzivní webové stránky šité na míru vašim potřebám. Používám nejnovější technologie pro maximální výkon a bezpečnost."
        },
        {
            icon: <FiSmartphone className="w-8 h-8" />,
            title: "Mobilní optimalizace",
            description: "Perfektní zobrazení na všech zařízeních. Vaše webové stránky budou vypadat skvěle jak na počítači, tak na mobilních zařízeních."
        },
        {
            icon: <FiSearch className="w-8 h-8" />,
            title: "SEO optimalizace",
            description: "Zlepšuji viditelnost vašeho webu ve vyhledávačích. Implementuji moderní SEO techniky pro lepší umístění ve výsledcích vyhledávání."
        },
        {
            icon: <FiZap className="w-8 h-8" />,
            title: "Výkonnostní optimalizace",
            description: "Maximální rychlost načítání a plynulý chod webu. Optimalizuji kód a využívám nejlepší praktiky pro rychlý výkon."
        }
    ]

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
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-200" id="sluzby">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] dark:text-white mb-6 relative inline-block">
                        Služby
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
                    </h2>
                    <p className="text-[#728087] dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Nabízím komplexní služby v oblasti webového vývoje a designu. Každý projekt je unikátní a přizpůsobuji se vašim specifickým potřebám.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div
                                className="text-[#2B81EB] mb-4 flex justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-[#394042] dark:text-white mb-4 text-center">
                                {service.title}
                            </h3>
                            <p className="text-[#728087] dark:text-gray-400 text-lg text-center">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    <motion.div
                        className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">3x</h3>
                        <p className="text-[#728087] dark:text-gray-400 text-lg">Rychlejší načítání stránek díky moderní optimalizaci</p>
                    </motion.div>
                    <motion.div
                        className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">100%</h3>
                        <p className="text-[#728087] dark:text-gray-400 text-lg">Responzivní design pro všechna zařízení</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Services 