"use client";

import { faDiscord, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SocialButton } from "@/components/ui/SocialButton";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 items-center justify-center pb-20 pt-32 sm:pt-36"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-4xl text-center"
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl sm:h-[30rem] sm:w-[30rem]"
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.44, 0.74, 0.44]
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div variants={fadeUp}>
          <GlassCard className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/32 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-rose-300/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
            />

            <motion.p
              variants={fadeUp}
              className="mb-5 font-mono text-xs uppercase tracking-[0.42em] text-white/46"
            >
              Network
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-balance text-6xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg font-medium text-white/76 sm:text-xl"
            >
              {profile.role}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/58 sm:text-lg"
            >
              {profile.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <SocialButton
                href={profile.tiktokUrl}
                label="TikTok"
                icon={faTiktok}
                variant="primary"
              />
              <SocialButton
                href={profile.discordUrl}
                label="Discord"
                icon={faDiscord}
              />
            </motion.div>
          </GlassCard>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 text-left"
        >
          {["Design", "Code", "Ship"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-white/45 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
