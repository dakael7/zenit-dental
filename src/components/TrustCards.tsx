import { BadgeCheck, Clock3, HeartHandshake, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const commitments = [
  {
    title: "Protocolo cero ansiedad",
    description: "Instalaciones relajantes, sin los ruidos ni olores tradicionales del dentista.",
    Icon: HeartHandshake,
  },
  {
    title: "Técnicas suaves",
    description: "Procedimientos mínimamente invasivos y máximo confort, siempre contigo al mando.",
    Icon: Sparkles,
  },
  {
    title: "Transparencia total",
    description: "Presupuestos claros, explicados al detalle desde la primera visita.",
    Icon: BadgeCheck,
  },
  {
    title: "Atención puntual",
    description: "Respetamos tu agenda. Sin esperas ni salas abarrotadas.",
    Icon: Clock3,
  },
];

const revealDelays = ["!delay-0", "!delay-100", "!delay-200", "!delay-300"] as const;

export default function TrustCards() {
  return (
    <section aria-labelledby="trust-title" className="bg-marfil py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-salvia-oscuro">
            LA EXPERIENCIA ZÉNIT
          </p>
          <h2 id="trust-title" className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bosque sm:text-5xl">
            Tu tranquilidad es nuestro primer compromiso.
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ title, description, Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <article className="h-full rounded-2xl border border-oliva/45 bg-lino px-5 py-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(30,45,36,0.45)]">
                <div className="flex size-12 items-center justify-center rounded-full bg-salvia/10 text-salvia">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-bosque">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bosque/80">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}