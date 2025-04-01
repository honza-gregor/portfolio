import React from "react";
import { SiFigma, SiReact, SiAuth0 } from "react-icons/si";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Jaké technologie používám pro váš úspěch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#2B81EB] rounded-full"></span>
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full">
                  <tech.icon
                    className="text-4xl md:text-5xl lg:text-6xl text-[#2B81EB]"
                  />
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {tech.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 flex-grow">
                {tech.description}
              </p>
              <div className="mt-auto flex justify-center">
                <motion.button
                  className="border-2 border-[#2B81EB] text-[#2B81EB] px-6 py-2 rounded-full hover:bg-[#2B81EB] hover:text-white transition-all duration-300 inline-flex items-center group bg-white dark:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Zjistit více
                  <motion.span
                    className="ml-2"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
