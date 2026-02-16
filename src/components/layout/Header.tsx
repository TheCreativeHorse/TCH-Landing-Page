import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <span className="font-heading font-bold text-xl text-gray-900">
                            Mustafa Petti
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('problem')} className="text-gray-600 hover:text-gray-900 font-medium bg-transparent border-none cursor-pointer transition-colors">The Problem</button>
                        <button onClick={() => scrollToSection('what-i-build')} className="text-gray-600 hover:text-gray-900 font-medium bg-transparent border-none cursor-pointer transition-colors">What I Build</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 font-medium bg-transparent border-none cursor-pointer transition-colors">How It Works</button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 font-medium bg-transparent border-none cursor-pointer transition-colors">About</button>
                    </nav>

                    <div className="hidden md:flex items-center">
                        <Button onClick={() => navigate('/strategy-call')} size="sm">
                            Book a Call
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 bg-transparent border-none cursor-pointer p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50 animate-in slide-in-from-top duration-200">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <button
                            onClick={() => scrollToSection('problem')}
                            className="block w-full text-left px-3 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md bg-transparent border-none"
                        >
                            The Problem
                        </button>
                        <button
                            onClick={() => scrollToSection('what-i-build')}
                            className="block w-full text-left px-3 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md bg-transparent border-none"
                        >
                            What I Build
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className="block w-full text-left px-3 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md bg-transparent border-none"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left px-3 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md bg-transparent border-none"
                        >
                            About
                        </button>
                        <div className="pt-4 px-3">
                            <Button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/strategy-call');
                                }}
                                className="w-full justify-center"
                            >
                                Book a Call
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
