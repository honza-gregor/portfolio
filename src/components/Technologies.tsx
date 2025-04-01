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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-12">
          Jaké technologie používám pro váš úspěch.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
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
              <p className="text-[#728087] mb-4 flex-grow">
                {tech.description}
              </p>
              <div className="mt-auto">
                <button
                  className="border-2 border-[#2B81EB] text-[#2B81EB] px-6 py-2 rounded-full hover:bg-[#2B81EB] hover:text-white transition-all duration-300 inline-flex items-center group"
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
