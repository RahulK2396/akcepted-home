import Reac, { useState } from 'react';
import logo from '../assets/logo.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {

    const [activeTab, setActiveTab] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetActiveTab = (tab) => {
        setActiveTab(tab);
        setIsMenuOpen(false); // Close the menu on tab click
    };

    return (

        <header className="bg-black w-full h-[91px] flex justify-between items-center relative px-4 sm:px-8">
            {/* Logo for Desktop */}
            <div className="absolute top-[16px] left-[16px] sm:left-[101px]">
                <img src={logo} alt="Akcepted Logo" className="w-[123px] h-[52px]" />
            </div>

            {/* Menu Icon for Mobile */}
            <div className="absolute top-4 right-4 sm:hidden z-20">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                    {isMenuOpen ? <HiX size={24} color="white" /> : <HiMenu size={24} color="white" />}
                </button>
            </div>

            {/* Navbar for Desktop */}
            <nav className="hidden sm:flex absolute top-[25px] right-[101px] space-x-8">
                <ul className="flex gap-4">
                    {['work', 'services', 'about', 'contact'].map((tab) => (
                        <li key={tab}>
                            <a
                                href={`#${tab}`}
                                className={`hover:text-[#f28125] ${activeTab === tab ? 'text-[#f28125]' : 'text-white'}`}
                                onClick={() => handleSetActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Navbar for Mobile */}
            <nav className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {/* Cross Icon for Mobile Menu */}
                <div className="absolute top-4 right-4 z-20">
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                        <HiX size={24} color="white" />
                    </button>
                </div>
                {/* Logo in Mobile View */}
                <div className="mb-6 flex items-center">
                    <img src={logo} alt="Akcepted Logo" className="w-[123px] h-[52px]" />
                </div>
                {/* Menu Items */}
                <ul className="flex flex-col gap-4 text-lg font-medium items-center">
                    {['work', 'services', 'about', 'contact'].map((tab) => (
                        <li key={tab}>
                            <a
                                href={`#${tab}`}
                                className={`hover:text-[#f28125] ${activeTab === tab ? 'text-[#f28125]' : 'text-white'}`}
                                onClick={() => handleSetActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    );
};

export default Header;

