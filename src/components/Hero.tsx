"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { IMAGES } from "@/lib/config";
import Reveal from "@/components/Reveal";

const reassuranceNotes = [
  { label: "Atención puntual", position: "left-2 top-[15%]", delay: "0s" },
  { label: "Sin salas abarrotadas", position: "right-0 top-[48%]", delay: "1.4s" },
  { label: "Presupuesto claro", position: "left-1 bottom-[12%]", delay: "2.8s" },
];

export default function Hero() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-lino">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-44 -z-10 size-[32rem] rounded-full blur-3xl md:right-[8%]"
        style={{
          background:
            "radial-gradient(circle, rgba(122,154,139,0.17) 0%, rgba(122,154,139,0.07) 42%, rgba(122,154,139,0) 72%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 pb-10 pt-7 md:gap-12 md:pb-16 md:pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:py-12">
        <div className="relative z-10">
          <Reveal>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-salvia-oscuro sm:text-xs">
              ZÉNIT · ESTUDIO DENTAL Y BIENESTAR EN MARACAY
            </p>
            <h1 id="hero-title" className="max-w-[13ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight text-bosque sm:max-w-[15ch] sm:text-6xl lg:max-w-[12ch] lg:text-7xl lg:leading-[1.05]">
              Odontología de alta precisión en un espacio de total serenidad.
            </h1>
            <p className="mt-4 max-w-[44ch] text-[13px] leading-relaxed text-bosque/85 sm:text-base">
              Tratamientos estéticos suaves, tecnología de vanguardia y un entorno pensado para tu confort. Redescubre el placer de cuidar tu sonrisa, sin estrés.
            </p>
            <div className="mt-5 flex items-start gap-2 text-[10px] font-medium leading-relaxed text-bosque/80 sm:text-xs">
              <Check aria-hidden="true" className="mt-px size-4 shrink-0 text-salvia-oscuro" strokeWidth={2.25} />
              <p>Atención puntual · Te respondemos por WhatsApp · Maracay</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-[29rem] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-x-2 bottom-0 top-5 rounded-t-full rounded-b-3xl bg-[linear-gradient(145deg,#eadcc9_0%,#e2e4db_52%,#c4d0c4_100%)] shadow-[0_20px_60px_-24px_rgba(30,45,36,0.3)]"
          />
          <div className="relative aspect-[0.88] overflow-hidden rounded-t-full rounded-b-3xl bg-[linear-gradient(145deg,#eadcc9_0%,#e2e4db_52%,#c4d0c4_100%)] shadow-[0_20px_60px_-24px_rgba(30,45,36,0.3)]">
            {!imageUnavailable && (
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                sizes="(max-width: 504px) calc(100vw - 2.5rem), (max-width: 1023px) 29rem, (max-width: 1151px) calc((100vw - 5rem) / 2), 33rem"
                className="object-cover"
                onError={() => setImageUnavailable(true)}
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f2e7d7]/10 via-transparent to-[#1e2d24]/10"
            />
          </div>

          {reassuranceNotes.map((note) => (
            <div
              key={note.label}
              className={`absolute ${note.position} animate-float rounded-xl border border-oliva/70 bg-marfil/80 px-3 py-2 text-[11px] font-medium leading-tight text-bosque shadow-[0_12px_28px_-18px_rgba(30,45,36,0.5)] backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-xs`}
              style={{ animationDelay: note.delay }}
            >
              {note.label}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}