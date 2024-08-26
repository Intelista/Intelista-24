import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const must = "/images/must.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnScroll = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', closeMenuOnScroll);
        return () => {
            window.removeEventListener('scroll', closeMenuOnScroll);
        };
    }, []);

    return (
        <header className="p-4 bg-black bg-opacity-85 text-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to="/event" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">Event</Link>
                    </li>
                </ul>
                <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={must} alt="Logo" className="w-8 h-8" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400">About Us</Link>
                    </li>
                    <li className="flex">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfMQcQkRg3zTcEdklQJ3LgZ2YQMCfKadP2LxDfQGU6qJedfCw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400"
                        >
                            Register
                        </a>
                    </li>
                </ul>

                <button
                    title="Menu"
                    type="button"
                    className="p-4 md:hidden"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-white-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul className={`absolute top-16 left-0 w-full bg-black bg-opacity-70 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className="flex">
                    <Link to="/" className="flex items-center px-4 py-2 text-gray-300 dark:text-gray-300 border-b-2 border-transparent dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}><strong>Home</strong></Link>
                </li>
                <li className="flex">
                    <Link to="/event" className="flex items-center px-4 py-2 text-gray-300 dark:text-gray-300 border-b-2 border-transparent dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}><strong>Event</strong></Link>
                </li>
                <li className="flex">
                    <Link to="/about" className="flex items-center px-4 py-2 text-gray-300 dark:text-gray-300 border-b-2 border-transparent dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}><strong>About Us</strong></Link>
                </li>
                <li className="flex">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfMQcQkRg3zTcEdklQJ3LgZ2YQMCfKadP2LxDfQGU6qJedfCw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-gray-300 dark:text-gray-300 border-b-2 border-transparent dark:border-gray-700 hover:text-violet-400"
                        onClick={toggleMenu}
                    > <strong>
                        Register
                    </strong>
                        
                    </a>
                </li>
            </ul>
        </header>
    );
}
