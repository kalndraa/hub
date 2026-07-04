"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

type FloatingItem = {
  id: number;
  label: "Revin" | "REVIN" | "revin";
  left: number;
  top: number;
  opacity: number;
  scale: number;
  rotate: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

const labels: FloatingItem["label"][] = ["Revin", "REVIN", "revin"];

function seededRandom(seed: number) {
  let value = seed % 2147483647;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function createFloatingItems(count = 34): FloatingItem[] {
  const random = seededRandom(74021);

  return Array.from({ length: count }, (_, id) => ({
    id,
    label: labels[Math.floor(random() * labels.length)],
    left: random() * 100,
    top: random() * 100,
    opacity: 0.018 + random() * 0.038,
    scale: 0.64 + random() * 1.35,
    rotate: -18 + random() * 36,
    duration: 22 + random() * 26,
    delay: random() * -28,
    driftX: -18 + random() * 36,
    driftY: -22 + random() * 44
  }));
}

export function FloatingBackground() {
  const reducedMotion = useReducedMotion();
  const parallax = useMouseParallax(22);
  const items = useMemo(() => createFloatingItems(), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={
          reducedMotion
            ? undefined
            : {
                x: parallax.x,
                y: parallax.y
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 28, mass: 1.1 }}
      >
        {items.map((item) => (
          <motion.span
            key={item.id}
            className="absolute select-none font-mono text-[clamp(2.4rem,8vw,9rem)] font-black uppercase leading-none tracking-[0.18em] text-white will-change-transform layer-accelerated"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              opacity: item.opacity,
            }}
            initial={
              reducedMotion
                ? { scale: item.scale, rotate: item.rotate, x: "-50%", y: "-50%" }
                : false
            }
            animate={
              reducedMotion
                ? undefined
                : {
                    x: ["-50%", `calc(-50% + ${item.driftX}px)`, "-50%"],
                    y: ["-50%", `calc(-50% + ${item.driftY}px)`, "-50%"],
                    rotate: [item.rotate, item.rotate + 4, item.rotate],
                    scale: item.scale,
                  }
            }
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            {item.label}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
