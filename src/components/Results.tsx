import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export default function Results() {
  return (
    <section aria-labelledby="results-title" className="bg-lino py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 id="results-title" className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bosque sm:text-5xl">
            Resultados que se ven. Pacientes que sonríen.
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <BeforeAfterSlider />
        </Reveal>
        <Testimonials />
      </div>
    </section>
  );
}