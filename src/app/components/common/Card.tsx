import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  className?: string;
  children?: ReactNode;
  cardInfo: {
    id: string;
    title: string;
    children?: ReactNode;
    description: string;
    fotoUrl?: string;
    alt?: string;
    link?: string;
  };
};

export default function Card({
  className = "",
  cardInfo,
  children,
}: CardProps) {
  const cardStyles = twMerge(
    "flex flex-col h-full gap-3 justify-center relative",
    className,
  );

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
      <div className="flex gap-2 justify-between">
        <h3 className="text-[18px] md:text-xl">
          {cardInfo.link ? (
            <Link
              href={cardInfo.link}
              className="after:absolute after:inset-0 after:z-0"
            >
              {cardInfo.title}
            </Link>
          ) : (
            cardInfo.title
          )}
        </h3>
        {children}
      </div>
      <p className="text-left hyphens-auto z-10 relative pointer-events-none">
        {cardInfo.description}
      </p>
    </>
  );

  return <li className={cardStyles}>{cardContent}</li>;
}
