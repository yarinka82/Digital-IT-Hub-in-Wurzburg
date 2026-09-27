import Icon from "./common/Icon";
import { twMerge } from "tailwind-merge";
import NavLink from "./common/NavLink";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <NavLink
      href={"/"}
      className={twMerge(
        "group perspective-[1000px] text-[#00aaff] after:opacity-0 flex items-center gap-3 font-normal transition-transform duration-200",
        className,
      )}
    >
      <div className="logo start-logo-anim">
        <Icon
          src="/images/logo.webp"
          width={40}
          height={40}
          className="logo start-logo-spin"
        />
      </div>
      <div className="relative w-48 h-12 subpixel-antialiased group-hover:animate-barrel">
        <div className="absolute inset-0 gap-0.5 flex flex-col justify-center items-center tracking-wider backface-hidden ">
          <span className="text-xl font-black tracking-wider text-blue-400 whitespace-nowrap lg:text-2xl start-text1-anim animate-text-pulse">
            Digital IT Hub
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-300 whitespace-nowrap start-text1-anim">
            Würzburg e.V.
          </span>
        </div>

        <div className="absolute inset-0 gap-0.5 flex flex-col justify-center items-center tracking-wider backface-hidden transform-[rotateX(180deg)]">
          <span className="text-xl font-black tracking-wider text-blue-400 whitespace-nowrap lg:text-2xl">
            Digital IT Hub
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-blue-300 whitespace-nowrap">
            Würzburg e.V.
          </span>
        </div>
      </div>
    </NavLink>
  );
}
