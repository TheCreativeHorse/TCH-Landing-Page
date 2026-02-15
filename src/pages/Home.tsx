import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle, BarChart3, Users, PhoneCall } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-background-navy text-white py-20 md:py-32 relative overflow-hidden">
                {/* Background gradient hint */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-sky blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-blue blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                        Founder at <span className="text-primary-sky">The Creative Horse</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Building predictable inbound demand for local service businesses.<br />
                        <span className="text-gray-400 text-lg mt-4 block">Helping plumbing, HVAC, and construction companies turn inconsistent referrals into steady inbound call flow.</span>
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <Button onClick={() => window.location.href = '/strategy-call'} className="shadow-lg shadow-primary-blue/20">
                            Book a 15 Minute Strategy Call
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="border-white text-white hover:bg-white/10">
                            How It Works
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-6">The Challenge</div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-8">Most service businesses do great work.</h2>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        But lead flow often depends on referrals, repeat customers, and seasonality.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 max-w-2xl mx-auto">
                        <div className="p-6 bg-green-50 rounded-xl border border-green-100 flex items-center justify-center flex-col">
                            <CheckCircle className="text-green-500 mb-3" size={32} />
                            <p className="text-lg font-bold text-primary-navy">Some weeks are full.</p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-xl border border-red-100 flex items-center justify-center flex-col">
                            <div className="w-8 h-8 rounded-full border-2 border-red-400 flex items-center justify-center mb-3">
                                <span className="h-[2px] w-4 bg-red-400"></span>
                            </div>
                            <p className="text-lg font-bold text-primary-navy">Some weeks are slow.</p>
                        </div>
                    </div>

                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        That unpredictability makes scaling difficult and planning stressful.
                    </p>
                </div>
            </section>

            {/* What I Build */}
            <section id="what-i-build" className="py-24 bg-neutral-light border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary-blue font-medium text-sm mb-6"> The Solution</div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">What I Build</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            I build structured acquisition systems designed specifically for local service businesses.
                            <span className="block mt-2 font-semibold text-primary-blue">Not generic marketing.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Consistent Inbound Calls", icon: PhoneCall, desc: "Predictable lead flow directly to your phone." },
                            { title: "Local Search Visibility", icon: Users, desc: "Dominate the local pack and organic results." },
                            { title: "Paid Acquisition", icon: BarChart3, desc: "Campaigns with measurable ROI and clear attribution." },
                            { title: "Conversion Systems", icon: CheckCircle, desc: "Landing flows optimized for service inquiries." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary-blue">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-primary-navy mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg font-medium text-primary-navy flex items-center justify-center gap-2">
                            <CheckCircle size={20} className="text-secondary-lime fill-current" />
                            Everything is built around predictable demand.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">How It Works</h2>
                        <p className="text-2xl font-bold text-primary-blue mb-4">Clarity first.</p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We analyze your current demand sources, identify gaps in local search presence and paid visibility, then structure campaigns designed to generate high-intent service inquiries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "No unnecessary complexity",
                            "No long contracts",
                            "Just focused execution"
                        ].map((text, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-neutral-light text-center hover:border-primary-blue/30 transition-colors">
                                <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                    {i + 1}
                                </div>
                                <p className="font-bold text-primary-navy text-lg">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-24 bg-background-navy text-white relative overflow-hidden">
                {/* Abstract background element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-lime/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="md:flex items-center gap-16">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/10">About Me</div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Mustafa Petti</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I founded The Creative Horse, a growth studio focused on measurable demand generation for service businesses across Canada and the US.
                            </p>
                            <Button variant="tertiary" className="text-white hover:text-primary-sky p-0">
                                See my LinkedIn <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                                <h3 className="text-xl font-bold mb-6 text-primary-sky">The approach is simple</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-primary-blue/20 text-primary-sky flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">1</span>
                                        <span className="text-gray-200 text-lg">Understand the business</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-primary-blue/20 text-primary-sky flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">2</span>
                                        <span className="text-gray-200 text-lg">Build structured acquisition systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-primary-blue/20 text-primary-sky flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-sm font-bold">3</span>
                                        <span className="text-gray-200 text-lg">Measure performance consistently</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-8">
                        Ready for steady growth?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        If you want steady inbound demand instead of unpredictable slow weeks, let's talk.
                    </p>
                    <Button onClick={() => window.location.href = '/strategy-call'} size="lg" className="px-10 py-5 text-lg shadow-xl shadow-primary-blue/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                        Book a 15 Minute Strategy Call
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
