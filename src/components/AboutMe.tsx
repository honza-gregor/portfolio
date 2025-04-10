import React from 'react'
import { FiZap, FiLayout, FiCode, FiTarget } from 'react-icons/fi'
import { motion } from 'framer-motion'

const AboutMe: React.FC = () => {
    const features = [
        {
            title: "Blesková rychlost",
            description: "Weby, které se načítají okamžitě a přitahují více návštěvníků.",
            icon: FiZap,
            className: "md:col-span-2 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
        },
        {
            title: "Design, který zaujme",
            description: "Moderní a intuitivní rozhraní, které vaše zákazníky nadchne.",
            icon: FiLayout,
            className: "md:col-span-1 bg-gradient-to-br from-blue-100 to-white dark:from-gray-700 dark:to-gray-800"
        },
        {
            title: "Špičkové technologie",
            description: "Využívám nejnovější technologie pro maximální výkon a bezpečnost.",
            icon: FiCode,
            className: "md:col-span-1 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
        },
        {
            title: "Váš úspěch je můj úspěch",
            description: "Individuální přístup a společné dosažení vašich cílů.",
            icon: FiTarget,
            className: "md:col-span-2 bg-gradient-to-br from-blue-100 to-white dark:from-gray-700 dark:to-gray-800"
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
        <section className="py-32" id="omne">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] dark:text-white mb-6 relative inline-block">
                        O mně
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
                    </h2>
                    <p className="text-[#728087] dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Jsem vášnivý webový vývojář s více než 5 lety zkušeností. Specializuji se na vytváření moderních a výkonných webových aplikací, které pomáhají firmám růst.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`${feature.className} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <motion.div
                                className="flex items-center mb-4"
                                whileHover={{ x: 5 }}
                            >
                                <feature.icon className="w-8 h-8 text-[#2B81EB] mr-3" />
                                <h3 className="text-xl font-semibold text-[#394042] dark:text-white">{feature.title}</h3>
                            </motion.div>
                            <p className="text-[#728087] dark:text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default AboutMe 