"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-oliva/40 bg-lino/90 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_8px_28px_-22px_rgba(30,45,36,0.55)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          aria-label="Zénit, inicio"
          className="inline-flex min-h-11 items-center font-display text-[1.8rem] font-semibold leading-none tracking-[0.16em] text-bosque focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salvia-oscuro"
        >
          ZÉNIT
        </Link>
        <WhatsAppButton size="md" className="px-4 sm:px-5">
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Consultar por WhatsApp</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}