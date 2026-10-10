"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/config";

const services = [
  {
    name: "Diseño de sonrisa y carillas",
    description: "Armonía y luminosidad natural, adaptadas a tus facciones.",
    image: IMAGES.services.smileDesign,
  },
  {
    name: "Ortodoncia invisible",
    description: "Alineación discreta y cómoda, sin alambres molestos.",
    image: IMAGES.services.invisibleOrthodontics,
  },
  {
    name: "Blanqueamiento avanzado",
    description: "Aclarado seguro y eficaz, sin sensibilidad.",
    image: IMAGES.services.whitening,
  },
  {
    name: "Cuidado preventivo y estética",
    description: "Higiene profunda y restauraciones imperceptibles.",
    image: IMAGES.services.preventiveCare,
  },
];

export default function Services() {
  const [unavailableImages, setUnavailableImages] = useState<Record<string, boolean>>({});

  return (
    <section aria-labelledby="services-title" className="bg-lino py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-salvia-oscuro">
            SOLUCIONES ESTÉTICAS
          </p>
          <h2 id="services-title" className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bosque sm:text-5xl">
            Diseñadas a tu medida.
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.name}>
              <article className="group h-full">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#eadcc9_0%,#e2e4db_52%,#c4d0c4_100%)]">
                  {!unavailableImages[service.image.src] && (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc((100vw - 3.75rem) / 2), (max-width: 1151px) calc((100vw - 6.25rem) / 4), 16.5rem"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={() =>
                        setUnavailableImages((current) => ({
                          ...current,
                          [service.image.src]: true,
                        }))
                      }
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-bosque">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bosque/80">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}