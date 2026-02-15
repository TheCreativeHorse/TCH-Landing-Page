import React from 'react';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="font-heading font-bold text-2xl text-primary-navy">
                            Mustafa Petti
                        </span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('problem')} className="text-gray-600 hover:text-primary-blue font-medium bg-transparent border-none cursor-pointer">The Problem</button>
                        <button onClick={() => scrollToSection('what-i-build')} className="text-gray-600 hover:text-primary-blue font-medium bg-transparent border-none cursor-pointer">What I Build</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-primary-blue font-medium bg-transparent border-none cursor-pointer">How It Works</button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary-blue font-medium bg-transparent border-none cursor-pointer">About</button>
                    </nav>
                    <div className="flex items-center">
                        <Button onClick={() => window.location.href = '/strategy-call'}>
                            Book a 15 Minute Strategy Call
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
