import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[600px] w-full items-center justify-center overflow-hidden sm:min-h-[650px] lg:min-h-[700px]">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-36 sm:px-8 sm:py-6">
        <h1>Das Gesicht unseres IT Vereins</h1>
        <p>
          „Werde Teil der IT-Community aus Deutschland! Lerne, tausche
          Erfahrungen aus, erweitere deine Fähigkeiten und gestalte die digitale
          Welt von morgen.“
        </p>
      </div>
    </section>
  );
}
