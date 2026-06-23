"use client";

import { useEffect, useState } from "react";

type MouseParallax = {
  x: number;
  y: number;
};

export function useMouseParallax(strength = 1): MouseParallax {
  const [offset, setOffset] = useState<MouseParallax>({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * strength;
        const y = (event.clientY / window.innerHeight - 0.5) * strength;
        setOffset({ x, y });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [strength]);

  return offset;
}
