
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-black fixed w-full h-[91px] top-[-10px] border z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href='/'><img src={logo} alt="Logo" className="h-16 w-auto" /></a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Work
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            SignUp
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink
                            to="/work"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Work
                        </NavLink>
                        <NavLink
                            to="/services"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/register"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-white px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-[#f28125]' : 'hover:text-[#f28125] hover:underline'}`
                            }
                        >
                            SignUp
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
