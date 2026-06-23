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
      title="Selected builds with a modern product feel."
      description="A compact showcase for web, Discord, and backend work. Swap the data file with real production links as the portfolio grows."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-140px" }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp}>
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
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] text-sm font-medium text-white/76 outline-none transition hover:bg-white/[0.085] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-200/70"
                  >
                    <FontAwesomeIcon aria-hidden="true" icon={faGithub} className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-white text-sm font-medium text-black outline-none transition hover:bg-cyan-100 focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
