import React from "react";
import { FiMail, FiSmartphone, FiNavigation } from "react-icons/fi";
import { FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
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
    <motion.footer
      className="bg-[#394042] text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Navigation */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold hover:text-[#2B81EB] transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Honza Gregor</span>
            </motion.button>
            <div className="flex flex-col space-y-3">
              {["sluzby", "portfolio", "kontakt"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-100 hover:text-[#2B81EB] text-sm transition-colors w-fit"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold">Kontaktní údaje</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 text-gray-100"
                whileHover={{ x: 5 }}
              >
                <FiMail className="text-[#2B81EB]" />
                <a
                  href="mailto:john.g22@seznam.cz"
                  className="hover:text-[#2B81EB] transition-colors"
                >
                  john.g22@seznam.cz
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-100"
                whileHover={{ x: 5 }}
              >
                <FiSmartphone className="text-[#2B81EB]" />
                <a
                  href="tel:+420608682944"
                  className="hover:text-[#2B81EB] transition-colors"
                >
                  +420 608 082 944
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-100"
                whileHover={{ x: 5 }}
              >
                <FiNavigation className="text-[#2B81EB]" />
                <span>Uherský Brod Nová 1 1263</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold">Sociální sítě</h3>
            <div className="flex gap-6">
              {[
                { icon: FaGithub, href: "https://github.com/JohnG22" },
                { icon: FaGlobe, href: "https://webni.cz/" },
                { icon: FaInstagram, href: "https://www.instagram.com/honza.g22?igsh=MXFoeHVjY204cDEwZg==" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#2B81EB] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-700 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} Honza Gregor. Všechna práva vyhrazena.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
