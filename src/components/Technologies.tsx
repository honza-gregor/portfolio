import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// import { faFigma, faReact } from "";

const Technologies: React.FC = () => {
  const technologies = [
    {
      title: "Pro design dodržující praktiky UI/UX designu",
      description:
        "Mé pracovní postupy kombinují inovativní technologie a osvědčené metody pro maximální efektivitu.",
      icon: faShieldHalved,
    },
    {
      title: "Pro nejvyšší rychlost a responzivitu vašeho webu",
      description:
        "Používám nejmodernější technologie, které zajistí kvalitní a rychlé řešení.",
      icon: faShieldHalved,
    },
    {
      title: "Pro bezpečnost vašich dat a soukromých údajů na webu",
      description:
        "Dbám také na denní kontroly, abychom zjistili vaše data bezpečná.",
      icon: faShieldHalved,
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon
                  icon={tech.icon}
                  className="text-4xl md:text-5xl lg:text-6xl text-[#2B81EB]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#394042] mb-4">
                {tech.title}
              </h3>
              <p className="text-[#728087] mb-4">{tech.description}</p>
              <a
                href="#"
                className="text-[#2B81EB] hover:text-[#4D87C0] inline-flex items-center"
              >
                Zjistit více <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
