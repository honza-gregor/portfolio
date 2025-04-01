import React from 'react'
import Scene3D from './Scene3D'

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="hero">
            <Scene3D />
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#394042] leading-tight mb-6">
                            Nejmodernější<br />webové řešení dělané<br />na míru pro vás
                        </h1>
                        <p className="text-[#728087] text-lg mb-8">
                            Efektivní a inovativní webové stránky, které zajistí vaše očekávání a naplní komerční cíle, které dělají vaše podnikání úspěšné.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('kontakt')}
                                className="bg-[#2B81EB] text-white px-8 py-3 rounded-md hover:bg-[#4D87C0] transition-colors duration-300"
                            >
                                Chci lepší web
                            </button>
                            <button
                                onClick={() => scrollToSection('sluzby')}
                                className="border-2 border-[#394042] text-[#394042] px-8 py-3 rounded-md hover:bg-[#394042] hover:text-white transition-colors duration-300"
                            >Zjistit více
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 