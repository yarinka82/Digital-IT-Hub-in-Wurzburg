import Image from "next/image";

const logos = [
  {
    src: "/logos/cairo-thws.jpg",
    alt: "cairo-thws",
  },
  {
    src: "/logos/cmyk.jpg",
    alt: "cmyk",
  },
  {
    src: "/logos/dakk.jpg",
    alt: "dakk",
  },
  {
    src: "/logos/duwei.png",
    alt: "duwei",
  },
  {
    src: "/logos/efre.png",
    alt: "efre",
  },
  {
    src: "/logos/hyko.png",
    alt: "hyko",
  },
  {
    src: "/logos/it-cluster.svg",
    alt: "it-cluster",
  },
  {
    src: "/logos/techin.svg",
    alt: "techin",
  },
  {
    src: "/logos/uni-wurzburg.jpg",
    alt: "uniwersitat wurzburg",
  },
  {
    src: "/logos/visarsoft.svg",
    alt: "visarsoft",
  },
];
export default function Partners() {
  return (
    <section className="bg-white" aria-labelledby="logos-heading">
      <h2 id="logos-heading" className="sr-only">
        Our partners
      </h2>
      <div className="mx-auto max-w-6xl px-4 bg-white">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="relative mx-auto h-12 w-32 sm:h-14 sm:w-36"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(min-width: 640px) 144px, 128px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
