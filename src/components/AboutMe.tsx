import React from 'react'
import { FiZap, FiLayout, FiCode, FiTarget } from 'react-icons/fi'

const AboutMe: React.FC = () => {
    const features = [
        {
            title: "Blesková rychlost",
            description: "Weby, které se načítají okamžitě a přitahují více návštěvníků.",
            icon: FiZap,
            className: "md:col-span-2 bg-gradient-to-br from-blue-50 to-white"
        },
        {
            title: "Design, který zaujme",
            description: "Moderní a intuitivní rozhraní, které vaše zákazníky nadchne.",
            icon: FiLayout,
            className: "md:col-span-1 bg-gradient-to-br from-blue-100 to-white"
        },
        {
            title: "Špičkové technologie",
            description: "Využívám nejnovější technologie pro maximální výkon a bezpečnost.",
            icon: FiCode,
            className: "md:col-span-1 bg-gradient-to-br from-blue-50 to-white"
        },
        {
            title: "Váš úspěch je můj úspěch",
            description: "Individuální přístup a společné dosažení vašich cílů.",
            icon: FiTarget,
            className: "md:col-span-2 bg-gradient-to-br from-blue-100 to-white"
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="omne">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#394042] mb-6 text-center">
                        Proč zvolit mě?
                    </h2>
                    <p className="text-[#728087] max-w-2xl mx-auto text-center text-lg">
                        Jsem webový vývojář, který spojuje kreativitu s technickou precizností.
                        Vytvářím weby, které nejen vypadají skvěle, ale především fungují efektivně.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.className} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]`}
                        >
                            <div className="flex items-center mb-4">
                                <feature.icon className="w-8 h-8 text-blue-500 mr-3" />
                                <h3 className="text-xl font-semibold text-[#394042]">{feature.title}</h3>
                            </div>
                            <p className="text-[#728087] leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe 