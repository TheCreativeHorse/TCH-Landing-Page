import React from 'react';

const StrategyCall: React.FC = () => {
    return (
        <div className="py-24 bg-neutral-light min-h-[80vh]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                    Book a 15 Minute Strategy Call
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Select a time below to discuss how we can build predictable demand for your business.
                </p>

                {/* Placeholder for Calendly or styling for where the embed would go */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[500px] relative overflow-hidden">
                    <div className="text-center w-full">
                        {/* Visual placeholder */}
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center h-full">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-3xl">📅</div>
                            <h3 className="text-xl font-bold text-gray-400 mb-2">Calendar Integration</h3>
                            <p className="text-gray-400 max-w-sm">
                                Connect your Calendly or booking software here to allow visitors to schedule calls directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyCall;
