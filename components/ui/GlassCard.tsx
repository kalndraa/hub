import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  subtle?: boolean;
};

export function GlassCard({
  children,
  className = "",
  subtle = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`${subtle ? "glass-muted" : "glass-surface"} rounded-[28px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
