import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-navy text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <span className="font-heading font-bold text-xl text-white">Mustafa Petti</span>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            Building predictable inbound demand for local service businesses.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4 text-white">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="https://linkedin.com/in/mustafapetti/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:mustafa@mustafapetti.com" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
                        </ul>
                    </div>
                    <div className="md:text-right">
                        <p className="text-sm text-gray-400 mt-8 md:mt-0">
                            © {new Date().getFullYear()} The Creative Horse. <br />All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
