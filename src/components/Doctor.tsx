"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/config";

export default function Doctor() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <section aria-labelledby="doctor-title" className="bg-marfil py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="mx-auto w-full max-w-[30rem] lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[linear-gradient(145deg,#eadcc9_0%,#e2e4db_52%,#c4d0c4_100%)] shadow-[0_20px_60px_-24px_rgba(30,45,36,0.3)]">
            {!imageUnavailable && (
              <Image
                src={IMAGES.doctor.src}
                alt={IMAGES.doctor.alt}
                fill
                sizes="(max-width: 519px) calc(100vw - 2.5rem), 30rem"
                className="object-cover"
                onError={() => setImageUnavailable(true)}
              />
            )}
          </div>
        </Reveal>

        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-salvia-oscuro">
            QUIEN CUIDARÁ TU SONRISA
          </p>
          <h2 id="doctor-title" className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-bosque sm:text-6xl">
            Dra. Andrea Salazar
          </h2>
          <p className="mt-3 text-base font-medium text-salvia-oscuro">Odontología estética</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-bosque/85">
            Acompaño a pacientes que le tenían miedo al dentista. Soy licenciada en Odontología y cuento con X años de experiencia en el área estética. Una buena visita empieza escuchándote: te explico cada paso con calma para que te sientas en confianza.
          </p>
          <div className="mt-7">
            <span className="inline-flex min-h-11 items-center rounded-full border border-oliva/60 px-3 py-1.5 text-xs font-medium text-bosque/70">
              Perfil de ejemplo
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}