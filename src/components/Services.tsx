import React from 'react'

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="sluzby">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                    Rychlost a úspěch na prvním místě
                </h2>
                <p className="text-[#728087] max-w-2xl mx-auto mb-12">
                    Mé služby se zaměřují na moderní a efektivní webové řešení. Vytvářím webové stránky, které nejen vypadají skvěle, ale také plně odpovídají.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
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