"use client";

import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { projects } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="A list of my creations."
      description="Created with the following skills."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-140px" }}
        className="mx-auto grid max-w-2xl gap-4 grid-cols-1 justify-center justify-items-center"

      >
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp} className="mx-auto w-full max-w-sm">
            <GlassCard className="group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-white/16 hover:bg-white/[0.068]">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-white/[0.03]">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1 text-xs text-white/54"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
