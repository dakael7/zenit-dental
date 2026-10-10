import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  "Le tenía pánico al dentista hasta que vine a Zénit.",
  "Me explicaron todo y el presupuesto fue claro desde el inicio.",
  "Cero esperas y un ambiente que da mucha paz.",
];

export default function Testimonials() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Reveal key={testimonial}>
          <article className="h-full rounded-2xl border border-oliva/45 bg-marfil p-5 shadow-[0_12px_36px_-30px_rgba(30,45,36,0.45)]">
            <Quote aria-hidden="true" className="size-7 text-salvia" strokeWidth={1.7} />
            <blockquote className="mt-3 min-h-16 text-base leading-relaxed text-bosque">
              {testimonial}
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-salvia/15 text-xs font-semibold text-salvia-oscuro"
              >
                PE
              </span>
              <div>
                <p className="text-sm font-medium text-bosque">Paciente de ejemplo</p>
                <p className="text-xs text-bosque/65">Maracay</p>
              </div>
            </div>
            <p className="mt-4 inline-flex rounded-full border border-oliva/50 px-3 py-1 text-[10px] font-medium text-bosque/70">
              Testimonio de ejemplo
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}