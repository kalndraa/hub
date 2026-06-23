"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/site";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Here's what i'm able to do."
      description="Personally learnt by spending my 24 hours."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto grid max-w-4xl gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={scaleIn} className="w-full max-w-sm mx-auto">
            <GlassCard
              className="group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.07]"
              subtle
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${skill.accent} opacity-0 blur-2xl transition duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-5 h-1.5 w-10 rounded-full bg-white/70 shadow-[0_0_22px_rgba(255,255,255,0.22)] transition duration-300 group-hover:w-14 group-hover:bg-cyan-200" />
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
                  {skill.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  {skill.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
