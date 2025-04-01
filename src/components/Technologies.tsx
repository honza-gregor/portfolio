import React from "react";
import { SiFigma, SiReact, SiAuth0 } from "react-icons/si";

const Technologies: React.FC = () => {
  const technologies = [
    {
      title: "Pro design dodržující praktiky UI/UX designu",
      description:
        "Mé pracovní postupy kombinují inovativní technologie a osvědčené metody pro maximální efektivitu.",
      icon: SiFigma,
    },
    {
      title: "Pro nejvyšší rychlost a responzivitu vašeho webu",
      description:
        "Používám nejmodernější technologie, které zajistí kvalitní a rychlé řešení.",
      icon: SiReact,
    },
    {
      title: "Pro bezpečnost vašich dat a soukromých údajů na webu",
      description:
        "Dbám také na denní kontroly, abychom zjistili vaše data bezpečná.",
      icon: SiAuth0,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#394042] mb-6 relative inline-block">
            Jaké technologie používám pro váš úspěch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-[#F5F9FF] p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                  <tech.icon
                    className="text-4xl md:text-5xl lg:text-6xl text-[#2B81EB]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#394042] mb-4">
                {tech.title}
              </h3>
              <p className="text-[#728087] text-lg mb-6 flex-grow">
                {tech.description}
              </p>
              <div className="mt-auto flex justify-center">
                <button
                  className="border-2 border-[#2B81EB] text-[#2B81EB] px-6 py-2 rounded-full hover:bg-[#2B81EB] hover:text-white transition-all duration-300 inline-flex items-center group bg-white"
                >
                  Zjistit více
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
