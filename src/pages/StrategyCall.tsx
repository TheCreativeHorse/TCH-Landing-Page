import React from 'react';

// Declare Calendly on window object for TypeScript
declare global {
    interface Window {
        Calendly: any;
    }
}

const StrategyCall: React.FC = () => {
    return (
        <div className="py-12 md:py-20 bg-neutral-light min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                        {/* Left Column - Meeting Details */}
                        <div className="lg:col-span-2 p-8 md:p-12 bg-neutral-light border-r border-gray-200">
                            {/* Profile Image Placeholder */}
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-blue to-primary-sky flex items-center justify-center text-white text-sm font-bold mb-6">
                                Mustafa Petti
                            </div>

                            {/* Meeting Title */}
                            <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                                Book Your Free "No Obligation" Consultation Today!
                            </h1>

                            {/* Meeting Duration */}
                            <div className="flex items-center text-gray-600 mb-3">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">15 Mins</span>
                            </div>

                            {/* Meeting Date (Dynamic from Calendly) */}
                            <div className="flex items-center text-gray-600 mb-6">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="font-medium">Select a date & time →</span>
                            </div>

                            {/* Meeting Description */}
                            <p className="text-gray-700 leading-relaxed">
                                This discovery call will help us understand more about your business objectives and answer any questions you have.
                            </p>
                        </div>

                        <div className="lg:col-span-3 p-0 min-h-[700px]">
                            <iframe
                                src="https://calendly.com/mustafa-mustafapetti/30min?embed_domain=localhost&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=007BFF"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                title="Select a Date & Time - Calendly"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyCall;
