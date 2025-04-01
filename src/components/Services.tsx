import React from 'react'
import { FiCode, FiSmartphone, FiSearch, FiZap } from 'react-icons/fi'

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

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="sluzby">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] mb-6 relative inline-block">
                        Profesionální webové služby
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
                    </h2>
                    <p className="text-[#728087] text-lg max-w-2xl mx-auto">
                        Nabízím komplexní řešení pro vaši online přítomnost. Od návrhu až po implementaci zajistím, že váš web bude nejen vizuálně atraktivní, ale také efektivní a výkonný.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="text-[#2B81EB] mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#394042] mb-4 text-center">
                                {service.title}
                            </h3>
                            <p className="text-[#728087] text-lg text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">3x</h3>
                        <p className="text-[#728087] text-lg">Rychlejší načítání stránek díky moderní optimalizaci</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">100%</h3>
                        <p className="text-[#728087] text-lg">Responzivní design pro všechna zařízení</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services 