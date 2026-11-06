"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Work", href: "/work" },
  { name: "Agency Partners", href: "/agency-partnership" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global scroll progress for the top indicator
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#A855F7] origin-left z-50 pointer-events-none"
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          scrolled
            ? "bg-[#070A0F]/90 backdrop-blur-md border-white/10 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-white/[0.06] py-4.5"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with Spring Hover */}
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#F1F5F9] group-hover:text-white transition-colors">
              VORYNEX<span className="text-[#38BDF8]">.</span>
            </span>
            <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase hidden sm:inline-block">
              TECHNOLOGIES
            </span>
          </Link>

          {/* Desktop Navigation Links with Animated Pill Underline */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-xs sm:text-sm tracking-normal transition-colors",
                    isActive
                      ? "text-[#F8FAFC] font-medium"
                      : "text-[#94A3B8] hover:text-[#F8FAFC]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/10"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold tracking-wide bg-[#0B111A] hover:bg-[#121A26] text-[#F1F5F9] border border-white/10 hover:border-[#38BDF8] transition-all group shadow-sm"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#94A3B8] hover:text-[#F1F5F9] rounded border border-white/10 bg-[#0B111A]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Slide-Down Menu with Animated Stagger */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden bg-[#070A0F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm transition-colors",
                        pathname === item.href
                          ? "bg-white/[0.06] text-[#38BDF8] font-medium"
                          : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#38BDF8] text-[#070A0F] shadow-sm"
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
