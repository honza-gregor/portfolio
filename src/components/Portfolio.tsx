import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ecommerce from '../assets/e-commerce.png'
import ggt from '../assets/GGT.png'
import landingPage from '../assets/Landing-page-design.png'
import emdm from '../assets/eMDM.png'
import Modal from './Modal'

const Portfolio: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

    const handleImageClick = (image: string, title: string) => {
        setSelectedImage({ image, title });
    };

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
        <section className="py-20" id="portfolio">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] mb-6 relative inline-block">
                        Case study
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
                    </h2>
                    <p className="text-[#728087] text-lg max-w-2xl mx-auto mb-12">
                        Díky zkušenostem nejrůznějších projektů a řešení jsem vytvořil moderní webových stránek. Mé služby zahrnují design, programování a optimalizaci pro výkon.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full"
                    >
                        {[
                            {
                                title: "E-commerce Platform",
                                description: "Moderní e-shop s pokročilými funkcemi a optimalizovaným výkonem",
                                image: ecommerce
                            },
                            {
                                title: "GGT Project",
                                description: "Profesionální webová prezentace pro GGT",
                                image: ggt
                            },
                            {
                                title: "Landing Page Design",
                                description: "Kreativní landing page s moderním designem",
                                image: landingPage
                            },
                            {
                                title: "eMDM Solution",
                                description: "Enterprise MDM řešení pro správu dat",
                                image: emdm
                            }
                        ].map((project, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-sm"
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="aspect-video rounded-md mb-6 overflow-hidden cursor-pointer"
                                        onClick={() => handleImageClick(project.image, project.title)}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.h3
                                        className="text-xl font-semibold text-[#394042] mb-4"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-[#728087]">{project.description}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </motion.div>
            <Modal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                image={selectedImage?.image || ''}
                title={selectedImage?.title || ''}
            />
        </section>
    )
}

export default Portfolio 