import React from 'react'
import { FaCode, FaMobileAlt, FaSearch, FaRocket } from 'react-icons/fa'

const Services: React.FC = () => {
    const services = [
        {
            icon: <FaCode className="w-8 h-8" />,
            title: "Webový vývoj",
            description: "Moderní a responzivní webové stránky šité na míru vašim potřebám. Používám nejnovější technologie pro maximální výkon a bezpečnost."
        },
        {
            icon: <FaMobileAlt className="w-8 h-8" />,
            title: "Mobilní optimalizace",
            description: "Perfektní zobrazení na všech zařízeních. Vaše webové stránky budou vypadat skvěle jak na počítači, tak na mobilních zařízeních."
        },
        {
            icon: <FaSearch className="w-8 h-8" />,
            title: "SEO optimalizace",
            description: "Zlepšuji viditelnost vašeho webu ve vyhledávačích. Implementuji moderní SEO techniky pro lepší umístění ve výsledcích vyhledávání."
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Výkonnostní optimalizace",
            description: "Maximální rychlost načítání a plynulý chod webu. Optimalizuji kód a využívám nejlepší praktiky pro rychlý výkon."
        }
    ]

    return (
        <section className="py-20 bg-gray-50" id="sluzby">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                        Profesionální webové služby
                    </h2>
                    <p className="text-[#728087] max-w-2xl mx-auto">
                        Nabízím komplexní řešení pro vaši online přítomnost. Od návrhu až po implementaci zajistím, že váš web bude nejen vizuálně atraktivní, ale také efektivní a výkonný.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-[#2B81EB] mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#394042] mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-[#728087] text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-lg shadow-sm">
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">50%</h3>
                        <p className="text-[#728087]">Zvýšení zisku díky přítomnosti v online službách</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-sm">
                        <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">50%</h3>
                        <p className="text-[#728087]">Efektivita při navazování a spravování webových stránek</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services 