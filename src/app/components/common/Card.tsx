import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CardProps = {
  className?: string;

  cardInfo: {
    id: string;
    title: string;
    description: string;
    fotoUrl?: string;
    alt?: string;
    link?: string;
  };
};

export default function Card({ className = "", cardInfo }: CardProps) {
  const cardStyles = twMerge("flex flex-col h-full gap-3 justify-center", className);

  const cardContent = (
    <>
      {cardInfo.fotoUrl && (
        <Image
          src={cardInfo.fotoUrl}
          alt={cardInfo.alt ? cardInfo.alt : cardInfo.title}
          width={245}
          height={184}
          className="w-full aspect-245/184 object-cover rounded-t-xl"
        />
      )}
      <h3 className="text-[18px] md:text-xl">{cardInfo.title}</h3>
      <p className="text-left hyphens-auto" >{cardInfo.description}</p>
    </>
  );

  return (
    <li className={!cardInfo.link ? cardStyles : ""}>
      {cardInfo.link ? (
        <Link href={cardInfo.link} className={cardStyles}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </li>
  );
}
