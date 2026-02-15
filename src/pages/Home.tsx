import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle, BarChart3, Users, PhoneCall } from 'lucide-react';

const GrowingGraph = () => (
    <svg className="w-6 h-6 text-secondary-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="14" width="4" height="6" className="animate-bar-1" />
        <rect x="10" y="8" width="4" height="12" className="animate-bar-2" />
        <rect x="17" y="4" width="4" height="16" className="animate-bar-3" />
    </svg>
);

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="relative z-10">
                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-gray-900">
                                Are your inbound service calls consistent every week?
                            </h1>

                            {/* Subheadline */}
                            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                                Most plumbing and HVAC companies rely heavily on referrals which creates slow weeks. There is a more predictable way.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => navigate('/strategy-call')}
                                    size="lg"
                                    className="text-base"
                                >
                                    Book a 15 min Strategy call <ArrowRight size={18} className="ml-2" />
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                                    size="lg"
                                    className="text-base"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Right Gradient Visual */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                            {/* Gradient Shape */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-full h-full"
                                    style={{
                                        background: 'linear-gradient(135deg, #007BFF 0%, #00CFFF 100%)',
                                        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                        borderRadius: '24px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="py-20 md:py-28 bg-neutral-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-semibold text-sm mb-6">The Challenge</div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Most service businesses do great work.</h2>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                        But lead flow often depends on referrals, repeat customers, and seasonality.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 max-w-2xl mx-auto">
                        <div className="p-8 bg-white rounded-2xl border border-green-200 flex items-center justify-center flex-col shadow-sm">
                            <CheckCircle className="text-green-500 mb-4" size={36} />
                            <p className="text-lg font-semibold text-gray-900">Some weeks are full.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-red-200 flex items-center justify-center flex-col shadow-sm">
                            <div className="w-9 h-9 rounded-full border-2 border-red-400 flex items-center justify-center mb-4">
                                <span className="h-[2px] w-5 bg-red-400"></span>
                            </div>
                            <p className="text-lg font-semibold text-gray-900">Some weeks are slow.</p>
                        </div>
                    </div>

                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        That unpredictability makes scaling difficult and planning stressful.
                    </p>
                </div>
            </section>

            {/* What I Build */}
            <section id="what-i-build" className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">The Solution</div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">What I Build</h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            I build structured acquisition systems designed specifically for local service businesses.
                            <span className="block mt-2 font-semibold text-gray-900">Not generic marketing.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Consistent Inbound Calls", icon: PhoneCall, desc: "Predictable lead flow directly to your phone." },
                            { title: "Local Search Visibility", icon: Users, desc: "Dominate the local pack and organic results." },
                            { title: "Paid Acquisition", icon: BarChart3, desc: "Campaigns with measurable ROI and clear attribution." },
                            { title: "Conversion Systems", icon: CheckCircle, desc: "Landing flows optimized for service inquiries." }
                        ].map((item, index) => (
                            <div key={index} className="bg-neutral-light p-8 rounded-2xl border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-sky rounded-xl flex items-center justify-center mb-6 text-white">
                                    <item.icon size={24} strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg font-medium text-primary-navy flex items-center justify-center gap-3">
                            <GrowingGraph />
                            Everything is built around predictable demand.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 md:py-32 bg-neutral-light overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-primary-blue mb-6">
                                The Process
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
                                How It Works
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-xl">
                                <p className="font-semibold text-gray-900">
                                    You do solid work.
                                </p>
                                <p>
                                    But some weeks are busy and some weeks are slow. When referrals slow down, your schedule slows down.
                                </p>
                                <p className="p-6 bg-white rounded-2xl border-l-4 border-primary-blue italic shadow-sm">
                                    "You cannot run a 5 to 15 person team on unpredictability."
                                </p>
                                <p className="font-medium text-gray-800">
                                    Here is what changes.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 relative">
                            {/* Process Steps */}
                            {[
                                {
                                    title: "We look at how you are currently getting jobs",
                                    desc: "Where your calls are coming from and where they are not.",
                                    icon: "1"
                                },
                                {
                                    title: "We find the gaps",
                                    desc: "Why certain weeks slow down and where potential opportunities are being missed.",
                                    icon: "2"
                                },
                                {
                                    title: "We put a system in place to bring steady inbound calls",
                                    desc: "So your schedule stays more consistent and you are not depending only on word of mouth.",
                                    icon: "3"
                                }
                            ].map((step, i) => (
                                <div key={i} className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                                    <div className="flex gap-6 items-start relative z-10">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-sky text-white flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-blue-50">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Decorative subtle background gradient */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Punchline */}
                    <div className="pt-12 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <div className="flex flex-wrap gap-4 text-lg font-semibold">
                                <span className="flex items-center gap-2 text-gray-900">
                                    <CheckCircle size={20} className="text-primary-blue" /> No marketing jargon
                                </span>
                                <span className="flex items-center gap-2 text-gray-900">
                                    <CheckCircle size={20} className="text-primary-blue" /> No long contracts
                                </span>
                                <span className="flex items-center gap-2 text-gray-900 font-bold bg-gradient-to-r from-primary-blue to-primary-sky bg-clip-text text-transparent">
                                    Just focused execution
                                </span>
                            </div>
                            <Button
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                variant="secondary"
                            >
                                Learn About My Approach
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex items-center gap-16">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-light border border-gray-200 text-gray-700 font-semibold text-sm mb-6">About Me</div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Mustafa Petti</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                I founded The Creative Horse, a growth studio focused on measurable demand generation for service businesses across Canada and the US.
                            </p>
                            <Button
                                variant="tertiary"
                                className="text-gray-900 hover:text-gray-600 p-0"
                                onClick={() => window.open('https://linkedin.com/in/mustafapetti/?skipRedirect=true', '_blank')}
                            >
                                See my LinkedIn <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-neutral-light p-10 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-semibold mb-6 text-gray-900">The approach is simple</h3>
                                <ul className="space-y-5">
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-primary-sky text-white flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">1</span>
                                        <span className="text-gray-700 text-lg">Understand the business</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-primary-sky text-white flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">2</span>
                                        <span className="text-gray-700 text-lg">Build structured acquisition systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gradient-purple to-gradient-pink text-white flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">3</span>
                                        <span className="text-gray-700 text-lg">Measure performance consistently</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book a Call Section with Calendly */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                            Ready for steady growth?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            If you want steady inbound demand instead of unpredictable slow weeks, let's talk.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                            {/* Left Column - Meeting Details */}
                            <div className="lg:col-span-2 p-8 md:p-12 bg-neutral-light border-r border-gray-200">
                                {/* Profile Image */}
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-blue to-primary-sky flex items-center justify-center text-white text-sm font-bold mb-6">
                                    Mustafa Petti
                                </div>

                                {/* Meeting Title */}
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                                    Book Your Free "No Obligation" Consultation Today!
                                </h3>

                                {/* Meeting Duration */}
                                <div className="flex items-center text-gray-600 mb-3">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">15 Mins</span>
                                </div>

                                {/* Meeting Date */}
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

                            {/* Right Column - Calendly Widget Isolated via Iframe */}
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
            </section>
        </div>
    );
};

export default Home;
