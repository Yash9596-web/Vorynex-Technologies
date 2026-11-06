"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Sparkles, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, type Variants } from "motion/react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll-driven parallax progress for the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transformations for background, content, and depth layers
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "22%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.2]);
  const orbitalGlowOpacity = useTransform(smoothProgress, [0, 0.8], [0.8, 0.1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[720px] flex items-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#030712] border-b border-white/[0.08]"
    >
      {/* Scroll-Driven Parallax Background Asset */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none will-change-transform"
      >
        <Image
          src="/visuals/vorynex-hero-backdrop.webp"
          alt="Vorynex Technologies - Engineering Intelligence, Empowering Businesses"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center opacity-85 sm:opacity-95 lg:opacity-100"
        />

        {/* Ambient Animated Energy Orb */}
        <motion.div
          style={{ opacity: orbitalGlowOpacity }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#00D2FF]/20 via-[#3B82F6]/20 to-[#A855F7]/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Mobile/Tablet Adaptive Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent lg:via-[#030712]/40" />
        {/* Top/Bottom Vignette to seamlessly blend with Navbar and subsequent sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030712] to-transparent" />
      </motion.div>

      {/* Hero Foreground Content with Parallax Drift & Entrance Animations */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full"
      >
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          {/* Subtle Technology Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528]/80 border border-white/[0.12] backdrop-blur-md text-xs font-mono text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"
              />
              <span className="tracking-wider uppercase font-semibold">
                Vorynex Enterprise AI &amp; Software
              </span>
            </div>
          </motion.div>

          {/* Main Visual Headline Matching Exact Typography Reference */}
          <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-bold tracking-tight text-white leading-[1.08]">
              Engineering Intelligence.
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-bold tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#A855F7]">
              Empowering Businesses.
            </h2>
          </motion.div>

          {/* Subheading Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-[#CBD5E1] font-normal leading-relaxed max-w-xl"
          >
            We build intelligent software, AI-powered automation and digital solutions that help businesses work smarter, scale faster and innovate confidently.
          </motion.p>

          {/* Pill CTA Buttons with Micro-Interactions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#00A3FF] via-[#2563EB] to-[#9333EA] text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(0,163,255,0.4)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] transition-shadow duration-300 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white font-semibold text-sm sm:text-base border border-white/25 hover:border-white/50 backdrop-blur-md transition-colors duration-300 group"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Highlights Strip with Unified Palette */}
          <motion.div
            variants={itemVariants}
            className="pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 max-w-2xl"
          >
            {[
              { icon: Sparkles, label: "Production AI" },
              { icon: Layers, label: "Custom Software" },
              { icon: Cpu, label: "Autonomous Flow" },
              { icon: ShieldCheck, label: "Enterprise Grade" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1]"
              >
                <item.icon className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
