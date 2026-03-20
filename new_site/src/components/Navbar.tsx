"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LightDarkLogo from "./Logo";

// Custom hook for scroll detection
const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrolled;
};

export default function Navbar() {
  const scrolled = useScroll();
  const pathname = usePathname();

  const mainLinks = [
    { name: "SME", href: "/" },
    { name: "Enterprise", href: "/enterprise" },
  ];

  const secondaryLinks = [
    { name: "How it works", href: "/#how-inxource-helps" },
    { name: "FAQs", href: "/#faqs" },
    { name: "User Guide", href: "/user-guide" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border-main shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <LightDarkLogo className={cn('h-8 ', scrolled ? 'fill-black dark:fill-white' : 'fill-white dark:fill-black')} />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* SME / Enterprise Switcher */}
            <div className="flex items-center bg-zinc-100/50 dark:bg-zinc-800/50 p-1 rounded-full border border-border-main relative">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-1.5 text-sm font-semibold transition-colors z-10",
                      isActive ? "text-zinc-950 dark:text-white" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white dark:bg-zinc-950 rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Other Links */}
            <div className="flex items-center gap-6">
              {secondaryLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="hidden sm:block text-foreground/60 hover:text-foreground font-medium px-4 py-2 transition-colors cursor-pointer text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://dashboard.inxource.com/signin', '_blank')}
            >
              Log in
            </motion.button>
            <motion.button
              className="bw-button active:scale-95 !text-sm !py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://dashboard.inxource.com/signup', '_blank')}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
