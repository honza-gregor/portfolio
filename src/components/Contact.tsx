import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="kontakt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                    Kontakt
                </h2>
                <p className="text-[#728087] mb-12">
                    Máte zájem o spolupráci nebo chcete vědět více? Neváhejte mě kontaktovat.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Napište mi</h3>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#2B81EB]" />
                                <a href="mailto:honza.gregor@email.cz" className="text-[#728087] hover:text-[#2B81EB] transition-colors">
                                    honza.gregor@email.cz
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Zavolejte mi</h3>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="text-[#2B81EB]" />
                                <a href="tel:+420608682944" className="text-[#728087] hover:text-[#2B81EB] transition-colors">
                                    +420 608 682 944
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Kde mě najdete</h3>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#2B81EB]" />
                                <span className="text-[#728087]">Uherský Brod Nová 1 1263</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.521655656891!2d17.643845776886714!3d49.02501787141425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713706870c5b8b9%3A0x7c31dddea4cc7d89!2zTm92w6EgMTI2My8xLCA2ODggMDEgVWhlcnNrw70gQnJvZA!5e0!3m2!1scs!2scz!4v1710271144400!5m2!1scs!2scz"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa sídla"
                            className="w-full h-full min-h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 