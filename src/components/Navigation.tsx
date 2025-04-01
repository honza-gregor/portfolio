import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'

interface NavigationProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isDarkMode, toggleDarkMode } = useTheme()

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId)
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b dark:border-gray-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={() => handleNavClick('hero')}
                        className="text-2xl font-bold text-[#2B81EB] hover:text-[#4D87C0] transition-colors flex items-center gap-2"
                    >
                        <FontAwesomeIcon icon={faCode} className="text-xl md:hidden" />
                        <span className="hidden sm:inline">Honza Gregor</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavClick('sluzby')}
                            className={`${activeSection === 'sluzby' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Služby
                        </button>
                        <button
                            onClick={() => handleNavClick('omne')}
                            className={`${activeSection === 'omne' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            O mně
                        </button>
                        <button
                            onClick={() => handleNavClick('portfolio')}
                            className={`${activeSection === 'portfolio' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => handleNavClick('kontakt')}
                            className={`${activeSection === 'kontakt' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Kontakt
                        </button>
                    </div>

                    {/* Desktop Contact Button and Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={isDarkMode ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
                        >
                            <FontAwesomeIcon
                                icon={isDarkMode ? faSun : faMoon}
                                className="text-[#394042] dark:text-gray-300 text-xl"
                            />
                        </button>
                        <button
                            onClick={() => handleNavClick('kontakt')}
                            className="bg-[#2B81EB] text-white px-6 py-2 rounded-md hover:bg-[#4D87C0]"
                        >
                            Kontaktujte mě
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={handleMobileMenuClick}
                        className="md:hidden text-[#394042] dark:text-gray-300 hover:text-[#2B81EB]"
                    >
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-16' : '-translate-y-full'}`}>
                <div className="pt-8 px-4">
                    <div className="flex flex-col space-y-6">
                        <button
                            onClick={() => handleNavClick('sluzby')}
                            className={`text-xl ${activeSection === 'sluzby' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Služby
                        </button>
                        <button
                            onClick={() => handleNavClick('omne')}
                            className={`text-xl ${activeSection === 'omne' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            O mně
                        </button>
                        <button
                            onClick={() => handleNavClick('portfolio')}
                            className={`text-xl ${activeSection === 'portfolio' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => handleNavClick('kontakt')}
                            className={`text-xl ${activeSection === 'kontakt' ? 'text-[#2B81EB]' : 'text-[#394042] dark:text-gray-300'} hover:text-[#2B81EB]`}
                        >
                            Kontakt
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="text-xl text-[#394042] dark:text-gray-300 hover:text-[#2B81EB] flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
                            {isDarkMode ? "Světlý režim" : "Tmavý režim"}
                        </button>
                        <button
                            onClick={() => handleNavClick('kontakt')}
                            className="bg-[#2B81EB] text-white px-6 py-3 rounded-md hover:bg-[#4D87C0] mt-4"
                        >
                            Kontaktujte mě
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation 