import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustCards from "@/components/TrustCards";
import Services from "@/components/Services";
import Doctor from "@/components/Doctor";
import Results from "@/components/Results";
import Steps from "@/components/Steps";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustCards />
        <Services />
        <Doctor />
        <Results />
        <Steps />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}