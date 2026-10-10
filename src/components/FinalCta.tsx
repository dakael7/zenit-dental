"use client";

import Image from "next/image";
import { Clock3, CreditCard, MapPin } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CONTACT, IMAGES } from "@/lib/config";

const contactDetails = [
  { title: "Ubicación", Icon: MapPin },
  { title: "Horarios", Icon: Clock3 },
  { title: "Pagos", Icon: CreditCard },
];

export default function FinalCta() {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.location)}`;

  return (
    <section aria-labelledby="final-cta-title" className="relative isolate overflow-hidden bg-bosque py-16 md:py-24">
      {!imageUnavailable && (
        <Image
          src={IMAGES.ambiente.src}
          alt={IMAGES.ambiente.alt}
          fill
          sizes="100vw"
          className="-z-10 object-cover"
          onError={() => setImageUnavailable(true)}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bosque/[0.88]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="max-w-3xl">
            <h2 id="final-cta-title" className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-lino sm:text-5xl">
              ¿Tienes alguna duda sobre tu sonrisa?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-lino/90">
              Atención puntual, presupuestos claros y orientación serena para cuidar tu sonrisa.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {contactDetails.map(({ title, Icon }) => (
            <Reveal key={title}>
              <div className="h-full rounded-2xl border border-lino/15 bg-lino/[0.08] p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-oliva">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
                  <h3 className="text-xs font-medium uppercase tracking-[0.12em]">{title}</h3>
                </div>
                {title === "Ubicación" && (
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center text-sm text-lino underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lino"
                  >
                    {CONTACT.location}
                  </a>
                )}
                {title === "Horarios" && (
                  <p className="mt-3 text-sm leading-relaxed text-lino">{CONTACT.hours}</p>
                )}
                {title === "Pagos" && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {CONTACT.payments.map((payment) => (
                      <li
                        key={payment}
                        className="rounded-full border border-lino/20 bg-lino/10 px-2.5 py-1 text-xs text-lino"
                      >
                        {payment}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}