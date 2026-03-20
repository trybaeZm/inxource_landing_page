"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center py-20 bg-zinc-950 pt-32 pb-32 md:pt-40 md:pb-48">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Hero Copy */}
                    <motion.div
                        className="text-center flex flex-col items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold mb-8 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Now available for all SMEs
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight max-w-2xl mx-auto">
                            Create your online store <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
                                in minutes.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed mx-auto">
                            Launch your store, accept online payments, and manage everything in one simple app.
                            <strong className="text-zinc-200 font-medium ml-1"> No developer. No stress.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="red-button text-lg px-8 py-4 active:scale-95 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('https://dashboard.inxource.com/signin', '_blank')}
                            >
                                Start free — no charges today
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                className="group bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('why-data-matters')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                How it works
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group max-w-md lg:max-w-none">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent z-10" />
                            <img
                                src="/images/woman_bakery.webp"
                                alt="Bakery owner using Inxource"
                                className="w-full h-auto object-cover grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
