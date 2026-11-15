import styles from "./Hero.module.css";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 w-full overflow-hidden bg-[#07132f]"
    >
      {/* Ambient gradient */}
      <div
        className={`${styles["hero-bg-ambient"]} absolute -inset-[10%] sm:-inset-[15%] lg:-inset-[20%]`}
      />

      {/* Flowing lines */}
      <svg
        viewBox="0 0 1440 680"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-60 sm:opacity-70"
      >
        <defs>
          <linearGradient id="hero-bg-blue">
            <stop offset="0%" stopColor="#3987ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#3987ff" />
            <stop offset="100%" stopColor="#36d8f4" stopOpacity=".3" />
          </linearGradient>
        </defs>

        <path
          className={styles["hero-bg-wave"]}
          stroke="url(#hero-bg-blue)"
          d="M-80 240 C180 40 240 500 520 330 S920 150 1100 320 S1320 480 1520 210"
        />
        <path
          className={`${styles["hero-bg-wave"]} ${styles["hero-bg-wave-2"]}`}
          stroke="#625cff"
          d="M-80 440 C200 620 350 280 580 450 S900 610 1100 420 S1330 260 1520 470"
        />
        <path
          className={`${styles["hero-bg-wave"]} ${styles["hero-bg-wave-3"]}`}
          stroke="#34d4ef"
          d="M-80 110 C180 240 300 60 520 190 S900 350 1120 170 S1360 90 1520 160"
        />
      </svg>

      {/* Floating code editor */}
      <div
        className={`${styles["hero-bg-float"]} absolute left-3 top-4 w-[130px] -rotate-6 rounded-xl border border-blue-400/30 bg-blue-950/60 p-3 shadow-2xl backdrop-blur-xl sm:left-[4%] sm:top-[18%] sm:w-[175px] sm:rounded-2xl sm:p-4 lg:left-[6%] lg:top-[20%] lg:w-[205px]`}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 sm:pb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <div className="ml-1 h-1 w-8 rounded-full bg-blue-300/40 sm:ml-2 sm:w-12" />
        </div>
        <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
          <div className="h-1 w-[38%] rounded-full bg-cyan-300/90" />
          <div className="h-1 w-[78%] rounded-full bg-blue-400/90" />
          <div className="h-1 w-[60%] rounded-full bg-violet-400/90" />
          <div className="h-1 w-[92%] rounded-full bg-blue-300/80" />
          <div className="h-1 w-[50%] rounded-full bg-cyan-300/80" />
        </div>
      </div>

      {/* Learning card */}
      <div
        className={`${styles["hero-bg-float"]} ${styles["hero-bg-delay-2"]} absolute right-3 top-6 flex rotate-6 items-center gap-2 rounded-xl border border-violet-300/25 bg-indigo-950/60 p-3 shadow-xl backdrop-blur-xl sm:right-[5%] sm:top-[17%] sm:gap-3 sm:rounded-2xl sm:p-4 lg:right-[12%]`}
      >
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-400/15 sm:h-11 sm:w-11 sm:rounded-xl">
          <svg
            viewBox="0 0 48 48"
            className="h-7 w-7 fill-none stroke-violet-200 sm:h-8 sm:w-8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 17.5 24 7l20 10.5L24 28 4 17.5Z" />
            <path d="M12 22v10c7 6 17 6 24 0V22M43 18v12" />
            <circle cx="43" cy="33" r="2.5" />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="h-1 w-12 rounded-full bg-blue-300 sm:w-16" />
          <div className="h-1 w-9 rounded-full bg-indigo-300/70 sm:w-11" />
        </div>
      </div>

      {/* Community card */}
      <div
        className={`${styles["hero-bg-float"]} ${styles["hero-bg-delay-4"]} absolute bottom-6 right-3 flex -rotate-3 items-center gap-2 rounded-xl border border-blue-300/25 bg-blue-950/60 p-3 shadow-xl backdrop-blur-xl sm:bottom-[20%] sm:right-[4%] sm:gap-3 sm:rounded-2xl sm:p-4 lg:bottom-[24%] lg:right-[7%]`}
      >
        <div className="relative h-9 w-10 shrink-0 sm:h-10 sm:w-11">
          <span className="absolute bottom-0 left-0 h-4 w-4 rounded-t-full bg-blue-400/80" />
          <span className="absolute bottom-0 left-3 h-5 w-4 rounded-t-full bg-blue-300" />
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-t-full bg-blue-400/80" />
          <span className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
          <span className="absolute left-4 top-0 h-3 w-3 rounded-full bg-blue-200" />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
        </div>
        <div className="space-y-2">
          <div className="h-1 w-12 rounded-full bg-blue-300 sm:w-16" />
          <div className="h-1 w-9 rounded-full bg-blue-400/60 sm:w-11" />
        </div>
      </div>

      {/* Event card */}
      <div
        className={`${styles["hero-bg-float"]} ${styles["hero-bg-delay-1"]} absolute bottom-8 left-3 flex -rotate-3 items-center gap-2 rounded-xl border border-cyan-300/25 bg-blue-950/60 p-2.5 shadow-xl backdrop-blur-xl sm:bottom-[16%] sm:left-[10%] sm:gap-3 sm:rounded-2xl sm:p-3 lg:left-[14%]`}
      >
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-xl text-cyan-200 sm:h-9 sm:w-9 sm:rounded-xl sm:text-2xl">
          ↗
        </div>
        <div className="space-y-2">
          <div className="h-1 w-12 rounded-full bg-cyan-200/90 sm:w-16" />
          <div className="h-1 w-9 rounded-full bg-blue-400/70 sm:w-10" />
        </div>
        <span className="h-4 w-7 rounded border border-cyan-200/30 sm:w-9" />
      </div>

      {/* Glowing particles */}
      <span
        className={`${styles["hero-bg-pulse"]} absolute left-[27%] top-[37%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_20px_#3987ff] sm:h-2 sm:w-2`}
      />
      <span
        className={`${styles["hero-bg-pulse"]} ${styles["hero-bg-delay-2"]} absolute right-[28%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_#36d8f4]`}
      />
      <span
        className={`${styles["hero-bg-pulse"]} absolute bottom-[28%] right-[30%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_20px_#8b68ff] sm:h-2 sm:w-2`}
      />
      <span className="absolute left-[17%] top-[28%] h-1.5 w-1.5 rounded-sm bg-blue-500 sm:h-2 sm:w-2" />
      <span
        className={`${styles["hero-bg-pulse"]} absolute bottom-[35%] right-[17%] h-1.5 w-1.5 rounded-sm bg-cyan-400 sm:h-2 sm:w-2`}
      />
    </div>
  );
}
