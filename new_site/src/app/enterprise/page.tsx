"use client";

import { useState, useEffect } from "react";

export default function Enterprise() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSlides = [
    {
      title: "We build and run your online sales systems.",
      lines: ["Online ordering, payments, and customer tracking", "Built for high-volume organizations"]
    },
    {
      title: "We only earn when you make sales.",
      lines: ["No setup fees. No maintenance fees.", "Just 3% of sales processed"]
    },
    {
      title: "Low risk. Clear ownership. Long-term partnership.",
      lines: ["You own your domain and third-party services", "We maintain and improve the sales systems"]
    }
  ];

  const industries = [
    {
      title: "Salons & Barber Shops",
      image: "/images/industries image one.jpeg",
      text: "We build a booking website where clients book time slots online, track repeat customers, and manage daily sales in one place."
    },
    {
      title: "Bars & Lounges",
      image: "/images/industries image two.jpeg",
      text: "Track daily sales, popular items, and peak hours. Accept online reservations and payments where needed."
    },
    {
      title: "Clothing & Jewelry Stores",
      image: "/images/industries image 5.jpeg",
      text: "We create an online catalogue where customers browse products, place orders, and pay online — while you track sales and customers."
    },
    {
        title: "Food Businesses",
        image: "/images/industries image three.jpeg",
        text: "We build mobile-friendly ordering systems so customers reorder easily, while you monitor sales, repeat orders, and peak demand."
    }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  return (
    <main className="bg-white selection:bg-red-100 selection:text-red-600">
      {/* ENTERPRISE HERO */}
      <section className="relative bg-zinc-950 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-3/5 text-left min-h-[400px] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-semibold mb-6">
                Enterprise Partnership Program
              </div>
              
              <div className="relative h-48 md:h-64 mb-8">
                {heroSlides.map((slide, i) => (
                  <div 
                    key={i} 
                    className={`absolute inset-0 transition-all duration-700 ${
                        i === heroIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                      {slide.title}
                    </h1>
                    <div className="space-y-2">
                        {slide.lines.map((line, j) => (
                            <p key={j} className="text-xl md:text-2xl text-zinc-400">{line}</p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  className="bg-[#ea1b2c] hover:bg-[#cc1826] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply for Partnership
                </button>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 text-zinc-400 text-sm">
                    <span className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800" />
                        ))}
                    </span>
                    Trusted by high-volume brands
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <div 
                    className="flex transition-transform duration-700 h-full"
                    style={{ transform: `translateX(-${heroIndex * 100}%)` }}
                >
                    <img src="/images/enterprsie hero image one.png" alt="Hero 1" className="min-w-full object-cover grayscale-[0.2]" />
                    <img src="/images/enterprsie hero image two.png" alt="Hero 2" className="min-w-full object-cover grayscale-[0.2]" />
                    <img src="/images/enterprise hero image three.png" alt="Hero 3" className="min-w-full object-cover grayscale-[0.2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="enterprise-fit" className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">Is this the right fit?</h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              This is a long-term sales systems partnership — not a general software service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-3xl border border-zinc-100 bg-zinc-50/50">
              <h3 className="text-2xl font-bold text-zinc-950 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                Designed For
              </h3>
              <ul className="space-y-5">
                {[
                  "High-volume businesses with regular transactions",
                  "Organizations selling products/subscriptions online",
                  "Companies wanting a single partner for sales systems",
                  "Teams preferring performance-based pricing",
                  "Long-term growth strategies"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-zinc-700 font-medium">
                    <span className="text-green-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-3xl border border-zinc-100 bg-zinc-950 text-white">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center text-sm">×</div>
                Not For
              </h3>
              <ul className="space-y-5">
                {[
                  "General software development or unrelated systems",
                  "Internal tools not connected to sales/customers",
                  "One-off projects with no commitment",
                  "Hardware or non-digital products",
                  "Hidden or offline-only sales flows"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-zinc-400 font-medium">
                    <span className="text-red-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE DEAL */}
      <section id="enterprise-pricing" className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-8 tracking-tight leading-tight">
                The 3% Performance Deal.
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                Our incentives are aligned with your revenue. 
                <span className="text-zinc-950 font-bold block mt-4">If you don’t sell, we don’t earn.</span>
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-zinc-200 flex items-center gap-6 group hover:border-red-600/30 transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 bg-zinc-100 rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">1</div>
                    <div>
                        <h4 className="font-bold text-zinc-950">Transparent Tracking</h4>
                        <p className="text-zinc-500 text-sm">Every sale processed is clearly visible in your portal.</p>
                    </div>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-zinc-200 flex items-center gap-6 group hover:border-red-600/30 transition-colors">
                    <div className="w-12 h-12 flex-shrink-0 bg-zinc-100 rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">2</div>
                    <div>
                        <h4 className="font-bold text-zinc-950">Zero Maintenance Fees</h4>
                        <p className="text-zinc-500 text-sm">We handle all hosting, updates, and improvements.</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative p-1 bg-white rounded-[2rem] border border-zinc-200 shadow-xl">
                <div className="p-10 bg-zinc-950 text-white rounded-[1.8rem]">
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-10">MONTHLY EXAMPLE</div>
                    <div className="space-y-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-zinc-500 text-sm mb-1">Total Sales Processed</div>
                                <div className="text-4xl font-bold">K 100,000</div>
                            </div>
                            <div className="text-zinc-600 italic">100%</div>
                        </div>
                        <div className="flex justify-between items-end border-l-4 border-red-600 pl-6 py-2">
                            <div>
                                <div className="text-red-500 text-sm mb-1 font-bold">InXource Platform Fee</div>
                                <div className="text-4xl font-bold text-white">K 3,000</div>
                            </div>
                            <div className="text-red-500 font-bold">3%</div>
                        </div>
                        <div className="pt-8 border-t border-zinc-800 flex justify-between items-center">
                            <div className="text-2xl font-bold">Net Profit Kept</div>
                            <div className="text-3xl font-bold">K 97,000</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SLIDER */}
      <section className="py-24 md:py-32 overflow-hidden bg-white">
        <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-zinc-950 mb-16 text-center">Industries we specialize in</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((item, i) => (
                    <button 
                        key={i}
                        onClick={() => setIndustryIndex(i)}
                        className={`p-6 text-left rounded-3xl border transition-all duration-300 ${
                            i === industryIndex 
                                ? 'bg-zinc-950 border-zinc-950 text-white shadow-lg translate-y-[-4px]' 
                                : 'bg-zinc-50 border-zinc-100 text-zinc-600 hover:bg-zinc-100'
                        }`}
                    >
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className={`text-xs leading-relaxed ${i === industryIndex ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {item.text}
                        </p>
                    </button>
                ))}
            </div>
            
            <div className="mt-12 relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-zinc-200 group">
                <img 
                    src={industries[industryIndex].image} 
                    alt={industries[industryIndex].title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                    <h3 className="text-3xl md:text-5xl font-bold text-white">{industries[industryIndex].title}</h3>
                </div>
            </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-4 animate-in fade-in duration-300">
            <div className="bg-white p-10 rounded-[2rem] max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300">
                <button 
                    onClick={() => setIsModalOpen(false)} 
                    className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h3 className="text-3xl font-bold text-zinc-950 mb-2 tracking-tight">Enterprise Access</h3>
                <p className="text-zinc-500 mb-8 text-sm">Tell us about your business and our team will reach out within 24 hours.</p>
                <form className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Company</label>
                        <input type="text" placeholder="Name of your business" className="w-full bg-zinc-50 border-zinc-100 rounded-xl p-4 text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all" required />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Email</label>
                        <input type="email" placeholder="Business email address" className="w-full bg-zinc-50 border-zinc-100 rounded-xl p-4 text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all" required />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Phone</label>
                        <input type="tel" placeholder="+260..." className="w-full bg-zinc-50 border-zinc-100 rounded-xl p-4 text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all" required />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">About</label>
                        <textarea placeholder="Describe your sales volume and needs" className="w-full bg-zinc-50 border-zinc-100 rounded-xl p-4 text-sm h-32 resize-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all" required></textarea>
                    </div>
                    <button className="w-full bg-[#ea1b2c] hover:bg-[#cc1826] text-white py-5 rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-red-600/20 mt-4">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
      )}
    </main>
  );
}
