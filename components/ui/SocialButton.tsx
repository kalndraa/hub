import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialButtonProps = {
  href: string;
  label: string;
  icon?: IconDefinition;
  variant?: "primary" | "secondary";
};

export function SocialButton({
  href,
  label,
  icon,
  variant = "secondary"
}: SocialButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-5 text-sm font-medium outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 ${
        isPrimary
          ? "border-white/14 bg-white text-black hover:bg-cyan-100"
          : "border-white/10 bg-white/[0.04] text-white hover:border-white/18 hover:bg-white/[0.08]"
      }`}
    >
      {icon ? (
        <FontAwesomeIcon
          aria-hidden="true"
          icon={icon}
          className={`h-4 w-4 transition duration-300 ${
            isPrimary ? "text-black" : "text-white/74 group-hover:text-white"
          }`}
        />
      ) : null}
      <span>{label}</span>
    </a>
  );
}
