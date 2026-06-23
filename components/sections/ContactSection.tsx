"use client";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { contactLinks } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const iconMap = {
  discord: faDiscord,
  github: faGithub
} as const;

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something sharp."
      description="Reach Nael through Discord, GitHub, or email for collaborations, product work, and thoughtful web experiences."
      className="pb-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-140px" }}
        className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3"
      >
        {contactLinks.map((link) => (
          <motion.div key={link.label} variants={fadeUp}>
            <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.07]">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-white transition group-hover:bg-white group-hover:text-black">
                  {link.kind in iconMap ? (
                    <FontAwesomeIcon
                      aria-hidden="true"
                      icon={iconMap[link.kind as keyof typeof iconMap]}
                      className="h-5 w-5"
                    />
                  ) : (
                    <span className="font-mono text-sm">@</span>
                  )}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/38">
                  {link.label}
                </p>
                <p className="mt-3 break-words text-base font-medium text-white/82">
                  {link.value}
                </p>
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
