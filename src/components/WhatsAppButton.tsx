import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { DEFAULT_MESSAGE } from "@/lib/config";

type WhatsAppButtonProps = {
  message?: string;
  children: ReactNode;
  variant?: "primary" | "light" | "link";
  size?: "md" | "lg";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-salvia-oscuro text-white hover:bg-[#4A6A5A] shadow-[0_8px_24px_-12px_rgba(30,45,36,0.45)]",
  light: "bg-lino text-bosque hover:bg-oliva/30 border border-oliva",
  link: "bg-transparent text-bosque underline-offset-4 hover:text-salvia-oscuro hover:underline",
} as const;

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
} as const;

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.49 0 .13 5.35.13 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.96 11.96 0 0 0 5.82 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.25-6.2-3.51-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhatsAppButton({
  message = DEFAULT_MESSAGE,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salvia-oscuro ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {variant === "link" ? <ArrowIcon /> : <WhatsAppIcon />}
      <span>{children}</span>
    </a>
  );
}