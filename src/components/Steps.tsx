import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "Escríbenos por WhatsApp",
    description: "El mensaje ya viene escrito. Solo tocas enviar.",
  },
  {
    title: "Coordinamos tu cita de valoración",
    description: "Te proponemos día y hora según tu agenda.",
  },
  {
    title: "Te recibimos con calma y puntualidad",
    description: "Conoces el espacio, resolvemos dudas y recibes un presupuesto claro.",
  },
];

export default function Steps() {
  return (
    <section aria-labelledby="steps-title" className="bg-marfil py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 id="steps-title" className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bosque sm:text-5xl">
            Tu primera visita en 3 pasos.
          </h2>
        </Reveal>

        <div className="relative mt-9">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-5 top-5 w-px bg-oliva md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-5 hidden h-px bg-oliva md:block"
          />
          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <Reveal className="flex w-full items-start gap-4 md:flex-col md:items-center md:gap-4 md:text-center">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center bg-marfil font-display text-4xl leading-none text-salvia">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 pb-1 pt-1 md:flex-none md:pt-0">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-bosque">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-bosque/80 md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}