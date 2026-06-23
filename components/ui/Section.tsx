"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.34em] text-white/42">
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-white/58 sm:text-lg">
            {description}
          </p>
        ) : null}
      </motion.div>
      {children}
    </section>
  );
}
