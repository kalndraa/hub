"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navItems } from "@/data/site";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5 ${
          hasScrolled
            ? "border-white/10 bg-black/56 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            : "border-white/8 bg-white/[0.025] backdrop-blur-xl"
        }`}
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setIsOpen(false)}
        >
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
          <Image
            src="/projects/logo.jpeg"
            alt="Revin Logo"
              fill
            className="object-cover"
          />
        </div>

        <span className="text-xs font-semibold tracking-[0.22em] text-white/86 sm:text-sm">
          REVIN
        </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/58 outline-none transition hover:bg-white/[0.055] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-200/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white outline-none transition hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-cyan-200/70 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <span className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </motion.nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-[24px] border border-white/10 bg-black/72 p-2 backdrop-blur-2xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[18px] px-4 py-3 text-sm text-white/70 outline-none transition hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-200/70"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
