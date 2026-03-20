"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const faqs = [
  {
    question: "How do I start using Inxource?",
    answer: "Just sign up using Gmail or email, create your business, upload your logo and details, and you're ready to go.",
  },
  {
    question: "How do I record sales?",
    answer: "You can record sales in three ways: Online orders (auto-records from your link), Online payment (via MTN, Airtel, Zamtel or card), or Using the POS (record a sale yourself).",
  },
  {
    question: "Do I need a smartphone or computer?",
    answer: "Yes, Inxource works seamlessly on any modern smartphone, tablet, or PC.",
  },
  {
    question: "How do customers order from me?",
    answer: "You get an online store automatically. Share your unique order link, and customers can browse and order anytime.",
  },
  {
    question: "How much does Inxource cost?",
    answer: "You only pay 3% of your total monthly sales, billed at month-end. There are absolutely no subscriptions or upfront payments.",
  },
  {
    question: "What if I don't sell anything this month?",
    answer: "You pay nothing. We only succeed when you do. No sales = no fees.",
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="bg-background selection:bg-red-500/20 selection:text-red-700 font-sans antialiased overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />

      {/* VALUE PROP SECTION */}
      <section id="why-data-matters" className="py-24 md:py-32 bg-white relative">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-2xl mb-16 md:mb-24"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight leading-tight">
              Get the direction you need to <span className="text-red-600">boost your sales.</span>
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Inxource helps you see what's going on in your shop so you know what needs attention,
              what's slowing you down, and where to put your effort to make more money.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Track every sale easily",
                desc: "Record sales from your phone in seconds. It's clear, simple, and always in your pocket.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              },
              {
                title: "Sell where they are",
                desc: "Share your unique order link on WhatsApp, Facebook, or Instagram and let customers buy 24/7.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              },
              {
                title: "AI Insights with Lenny",
                desc: "Lenny analyzes your data to tell you exactly what's working and where to focus your effort next.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-3xl bw-card hover:bg-zinc-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 border border-red-100 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-600">{card.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{card.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW / PHONE SECTION */}
      <section id="how-inxource-helps" className="py-24 md:py-32 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                To move forward, you first need to <span className="text-red-500">see where you are.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                Inxource helps you spot what's working, what's not, and what's slowing down your sales. Get a bird's-eye view of your business from anywhere.
              </p>

              <div className="space-y-6">
                {['Daily performance tracking', 'Customer behavior analysis', 'Real-time inventory management', 'Automated sales reporting'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-[320px]">
                {/* Modern Phone Frame */}
                <div className="relative z-10 bg-zinc-900 border-[8px] border-zinc-800 rounded-[3rem] aspect-[9/19] shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-800 rounded-b-3xl z-20 flex items-center justify-center">
                    <div className="w-16 h-1.5 bg-zinc-900 rounded-full" />
                  </div>

                  <div className="p-6 pt-14 h-full flex flex-col bg-zinc-950 relative">
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-lg" />
                      <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-zinc-600 rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-6 flex-1">
                      <div className="h-4 w-1/2 bg-zinc-800 rounded-full" />
                      <div className="h-8 w-3/4 bg-zinc-800 rounded-lg mb-4" />

                      <div className="h-40 w-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl flex items-center justify-center border border-white/5 shadow-inner">
                        <div className="relative w-24 h-24">
                          <svg className="w-full h-full text-zinc-700" viewBox="0 0 36 36">
                            <path className="stroke-current" fill="none" strokeWidth="3" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="stroke-red-500 animate-[spin_2s_ease-in-out_infinite]" fill="none" strokeWidth="3" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 hover:border-red-500/50 transition-colors cursor-pointer group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[10px] font-bold tracking-wider text-red-400">NEW ORDER</div>
                            <div className="text-[10px] text-zinc-500">Just now</div>
                          </div>
                          <div className="text-sm font-semibold text-white group-hover:text-red-100 transition-colors">K3,200.00 via WhatsApp</div>
                        </div>

                        <div className="p-4 bg-white rounded-2xl shadow-xl transform translate-x-2 -rotate-1">
                          <div className="text-[10px] font-bold tracking-wider text-zinc-400 mb-1">LENNY AI INSIGHT</div>
                          <div className="text-sm font-bold text-zinc-900">Peak sales hours are starting! Prepare inventory. 🔥</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-24 md:py-32 bg-zinc-50/50">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-500">Everything you need to know about getting started.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-[2rem] border border-border-main shadow-xl shadow-zinc-200/50 overflow-hidden"
            variants={fadeInUp}
          >
            <div className="divide-y divide-zinc-100">
              {faqs.map((faq, index) => (
                <div key={index} className={`transition-colors duration-300 ${activeFaq === index ? 'bg-zinc-50' : 'bg-white hover:bg-zinc-50/30'}`}>
                  <button
                    className="w-full flex justify-between items-center px-8 py-6 text-left group focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors ${activeFaq === index ? 'text-red-600' : 'text-zinc-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-red-50 text-red-600 rotate-180' : 'bg-zinc-100 text-zinc-400 group-hover:bg-red-50 group-hover:text-red-600'}`}>
                      <ChevronDown className="w-4 h-4" strokeWidth={3} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8">
                          <p className="text-zinc-600 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}