import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";


interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-[#394042] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Navigation */}
          <div className="space-y-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold hover:text-[#2B81EB] transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faCode} className="text-xl" />
              <span>Honza Gregor</span>
            </button>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("sluzby")}
                className="text-gray-300 hover:text-[#2B81EB] text-sm transition-colors w-fit"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-[#2B81EB] text-sm transition-colors w-fit"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-gray-300 hover:text-[#2B81EB] text-sm transition-colors w-fit"
              >
                Kontakt
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontaktní údaje</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#2B81EB]" />
                <a
                  href="mailto:honza.gregor@email.cz"
                  className="hover:text-[#2B81EB] transition-colors"
                >
                  honza.gregor@email.cz
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faPhone} className="text-[#2B81EB]" />
                <a
                  href="tel:+420608682944"
                  className="hover:text-[#2B81EB] transition-colors"
                >
                  +420 608 082 944
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#2B81EB]"
                />
                <span>Uherský Brod Nová 1 1263</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Sociální sítě</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/honzagregor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#2B81EB] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://facebook.com/honza.gregor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#2B81EB] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/honza.gregor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#2B81EB] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Honza Gregor. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
