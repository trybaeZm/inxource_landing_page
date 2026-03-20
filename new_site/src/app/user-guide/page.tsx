"use client";

import Image from "next/image";

export default function UserGuide() {
  const sections = [
    {
      title: "1. Getting Started",
      content: "Every great business starts with clarity. When you sign up for Inxource, you're not just creating an account — you're building the command center for your business. It takes only a few minutes to register your name, email, and password, and from that moment on, you'll have your own dashboard — where everything that matters about your business lives.",
      image: "/images/create account.webp",
      tag: "SETUP"
    },
    {
      title: "2. Choosing How You Get Paid",
      content: "Inxource gives you flexibility — because every business works differently. You can use the Inxource Wallet for secure, integrated payments, or transact outside the wallet via direct mobile money or cash. Every order still shows up on your dashboard for seamless tracking and analytics.",
      image: "/images/pay option.webp",
      tag: "PAYMENTS"
    },
    {
      title: "3. Multi-Business Management",
      content: "Manage multiple businesses or store locations under one account. Perfect for owners who wear many hats and need a full view of their empire at a glance.",
      image: "/images/create business.webp",
      tag: "SCALING"
    },
    {
      title: "4. Products and Services",
      content: "Create detailed listings with images, descriptions, and prices. Whether you're selling physical goods or professional services, Inxource organizes everything beautifully for your customers.",
      image: "/images/create product.webp",
      tag: "INVENTORY"
    },
    {
      title: "5. Automated Inventory Tracking",
      content: "No more notebooks or guesswork. Stocks update in real-time as sales happen. Know exactly what's selling fast and what needs restocking instantly.",
      image: "/images/inventory.webp",
      tag: "INVENTORY"
    },
    {
        title: "6. Quick Sales Recording (POS)",
        content: "Record in-store sales in less than 5 seconds with our internal Point of Sale system. Fast, clean, and secure data entry for busy environments.",
        image: "/images/pos.webp",
        tag: "SALES"
    },
    {
        title: "7. Your Unique Online Store",
        content: "Share your dedicated order link on WhatsApp, Facebook, or Instagram. Customers browse, order, and pay — all through one sleek interface.",
        image: "/images/order link.webp",
        tag: "SALES"
    },
    {
        title: "8. Growth Analytics",
        content: "Spot trends, identify repeat customers, and understand your profit margins with automated data analysis. Inxource acts as your silent business advisor.",
        image: "/images/orders.webp",
        tag: "ANALYTICS"
    },
    {
        title: "9. Meet Lenny AI",
        content: "Your AI business companion. Ask Lenny about your performance, ask for advice, or get reports simply by talking to her. She handles the thinking so you can handle the doing.",
        image: "/images/lenny.webp",
        tag: "AI ASSISTANT"
    },
    {
        title: "10. Secure Withdrawals",
        content: "Funds stay protected in your wallet until you're ready to withdraw. Develop healthier financial habits by keeping business money separate from personal spending.",
        image: "/images/withdraw.webp",
        tag: "WALLET"
    }
  ];

  return (
    <main className="bg-zinc-50 selection:bg-red-100 selection:text-red-600">
      {/* HEADER */}
      <header className="bg-zinc-950 pt-40 pb-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">The Complete Guide to Inxource</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Everything you need to understand, grow, and manage your business with confidence.
            </p>
        </div>
      </header>

      {/* CONTENT SECTIONS */}
      <div className="container max-w-5xl mx-auto py-24 px-6">
        <div className="grid gap-24">
            {sections.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-16 items-center group">
                <div className={`w-full md:w-1/2 space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-zinc-200 text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
                        {section.tag}
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-950 tracking-tight leading-tight">
                        {section.title}
                    </h2>
                    <p className="text-zinc-600 leading-relaxed text-lg">
                        {section.content}
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-zinc-200 bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                        <img 
                            src={section.image} 
                            alt={section.title} 
                            className="w-full h-full object-cover rounded-[1.5rem]" 
                        />
                    </div>
                </div>
            </section>
            ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-white border-t border-zinc-200 text-center">
        <div className="container max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 text-red-600 rounded-2xl mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-6 tracking-tight">Ready to transform your business?</h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl mx-auto">
                Join thousands of business owners who are using data to increase their sales every day.
            </p>
            <button 
                className="bg-[#ea1b2c] hover:bg-[#cc1826] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-[0.98] shadow-lg shadow-red-600/20"
                onClick={() => window.open('https://dashboard.inxource.com', '_blank')}
            >
                Get Started for Free
            </button>
        </div>
      </section>
    </main>
  );
}
