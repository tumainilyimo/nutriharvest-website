import { motion } from "framer-motion";
import { nutriHarvestContent } from "../data/content";

/* ── FOOD GRAFFITI SVG ILLUSTRATIONS ── */

const WheatStalk = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 200V40" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <ellipse cx="40" cy="30" rx="9" ry="20" fill="currentColor" opacity="0.25" transform="rotate(-15 40 30)"/>
    <ellipse cx="40" cy="30" rx="9" ry="20" fill="currentColor" opacity="0.25" transform="rotate(15 40 30)"/>
    <ellipse cx="40" cy="58" rx="8" ry="17" fill="currentColor" opacity="0.2" transform="rotate(-22 40 58)"/>
    <ellipse cx="40" cy="58" rx="8" ry="17" fill="currentColor" opacity="0.2" transform="rotate(22 40 58)"/>
    <ellipse cx="40" cy="85" rx="7" ry="15" fill="currentColor" opacity="0.15" transform="rotate(-25 40 85)"/>
    <ellipse cx="40" cy="85" rx="7" ry="15" fill="currentColor" opacity="0.15" transform="rotate(25 40 85)"/>
    <ellipse cx="40" cy="110" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(-20 40 110)"/>
    <ellipse cx="40" cy="110" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(20 40 110)"/>
  </svg>
);

const AfricanLeaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 110C60 110 15 80 15 45C15 15 45 5 60 5C75 5 105 15 105 45C105 80 60 110 60 110Z" fill="currentColor" opacity="0.12"/>
    <path d="M60 105V15" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    <path d="M60 30C42 42 32 58 60 55" stroke="currentColor" strokeWidth="1.2" opacity="0.18"/>
    <path d="M60 48C78 58 88 68 60 72" stroke="currentColor" strokeWidth="1.2" opacity="0.18"/>
    <path d="M60 65C42 75 38 85 60 88" stroke="currentColor" strokeWidth="1.2" opacity="0.18"/>
  </svg>
);

const BowlMotif = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 35C15 35 15 85 70 85C125 85 125 35 125 35" stroke="currentColor" strokeWidth="2.5" opacity="0.2"/>
    <path d="M10 35H130" stroke="currentColor" strokeWidth="2.5" opacity="0.25"/>
    <circle cx="42" cy="22" r="5" fill="currentColor" opacity="0.15"/>
    <circle cx="70" cy="17" r="6" fill="currentColor" opacity="0.18"/>
    <circle cx="95" cy="22" r="4.5" fill="currentColor" opacity="0.15"/>
    <circle cx="56" cy="12" r="3.5" fill="currentColor" opacity="0.1"/>
    <circle cx="82" cy="14" r="3.5" fill="currentColor" opacity="0.1"/>
    <path d="M55 90C55 90 60 100 70 100C80 100 85 90 85 90" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
  </svg>
);

const Mortar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 45C20 45 15 110 50 110C85 110 80 45 80 45" stroke="currentColor" strokeWidth="2.5" opacity="0.2"/>
    <path d="M15 45H85" stroke="currentColor" strokeWidth="2.5" opacity="0.25"/>
    <path d="M60 40L75 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.2"/>
    <circle cx="77" cy="6" r="5" fill="currentColor" opacity="0.12"/>
  </svg>
);

const Cassava = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5C24 5 18 30 16 60C14 90 18 140 22 160C24 170 28 178 30 178C32 178 36 170 38 160C42 140 46 90 44 60C42 30 36 5 30 5Z" fill="currentColor" opacity="0.1"/>
    <path d="M30 5C24 5 18 30 16 60C14 90 18 140 22 160C24 170 28 178 30 178C32 178 36 170 38 160C42 140 46 90 44 60C42 30 36 5 30 5Z" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    <path d="M22 40H38" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <path d="M20 70H40" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <path d="M21 100H39" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <path d="M23 130H37" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
  </svg>
);

/* ── MORE GRAIN & SEED TYPES ── */

const MilletSeeds = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tiny round millet seeds */}
    <circle cx="15" cy="20" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="30" cy="12" r="2.5" fill="currentColor" opacity="0.18"/>
    <circle cx="48" cy="25" r="3" fill="currentColor" opacity="0.22"/>
    <circle cx="65" cy="15" r="2" fill="currentColor" opacity="0.15"/>
    <circle cx="80" cy="28" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="22" cy="50" r="2.5" fill="currentColor" opacity="0.18"/>
    <circle cx="42" cy="55" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="60" cy="45" r="2" fill="currentColor" opacity="0.15"/>
    <circle cx="78" cy="55" r="2.5" fill="currentColor" opacity="0.18"/>
    <circle cx="90" cy="42" r="2" fill="currentColor" opacity="0.15"/>
    <circle cx="10" cy="75" r="2.5" fill="currentColor" opacity="0.18"/>
    <circle cx="35" cy="80" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="55" cy="72" r="2" fill="currentColor" opacity="0.15"/>
    <circle cx="72" cy="82" r="2.5" fill="currentColor" opacity="0.18"/>
    <circle cx="88" cy="70" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="50" cy="90" r="2" fill="currentColor" opacity="0.15"/>
  </svg>
);

const SorghumHead = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M30 160V50" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
    {/* Seed cluster head */}
    <circle cx="30" cy="20" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="22" cy="25" r="3" fill="currentColor" opacity="0.18"/>
    <circle cx="38" cy="25" r="3" fill="currentColor" opacity="0.18"/>
    <circle cx="18" cy="32" r="2.5" fill="currentColor" opacity="0.16"/>
    <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="42" cy="32" r="2.5" fill="currentColor" opacity="0.16"/>
    <circle cx="24" cy="38" r="2.5" fill="currentColor" opacity="0.15"/>
    <circle cx="36" cy="38" r="2.5" fill="currentColor" opacity="0.15"/>
    <circle cx="30" cy="43" r="2" fill="currentColor" opacity="0.12"/>
    {/* Leaf */}
    <path d="M30 80C30 80 10 70 8 55" stroke="currentColor" strokeWidth="1.2" opacity="0.15"/>
    <path d="M30 100C30 100 50 90 52 75" stroke="currentColor" strokeWidth="1.2" opacity="0.15"/>
  </svg>
);

const RiceGrains = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Long slender rice grains */}
    <ellipse cx="20" cy="30" rx="3" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-35 20 30)"/>
    <ellipse cx="50" cy="18" rx="3" ry="8" fill="currentColor" opacity="0.18" transform="rotate(20 50 18)"/>
    <ellipse cx="85" cy="25" rx="3" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-15 85 25)"/>
    <ellipse cx="15" cy="65" rx="3" ry="8" fill="currentColor" opacity="0.18" transform="rotate(30 15 65)"/>
    <ellipse cx="45" cy="55" rx="3" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-25 45 55)"/>
    <ellipse cx="75" cy="60" rx="3" ry="8" fill="currentColor" opacity="0.18" transform="rotate(10 75 60)"/>
    <ellipse cx="100" cy="50" rx="3" ry="8" fill="currentColor" opacity="0.16" transform="rotate(-40 100 50)"/>
    <ellipse cx="30" cy="95" rx="3" ry="8" fill="currentColor" opacity="0.18" transform="rotate(15 30 95)"/>
    <ellipse cx="65" cy="88" rx="3" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-20 65 88)"/>
    <ellipse cx="95" cy="85" rx="3" ry="8" fill="currentColor" opacity="0.16" transform="rotate(35 95 85)"/>
  </svg>
);

const MaizeKernel = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Maize cob shape */}
    <path d="M50 15C35 15 25 35 25 70C25 105 35 125 50 125C65 125 75 105 75 70C75 35 65 15 50 15Z" fill="currentColor" opacity="0.08"/>
    <path d="M50 15C35 15 25 35 25 70C25 105 35 125 50 125C65 125 75 105 75 70C75 35 65 15 50 15Z" stroke="currentColor" strokeWidth="1.5" opacity="0.18"/>
    {/* Kernel rows */}
    <ellipse cx="40" cy="40" rx="4" ry="5" fill="currentColor" opacity="0.12"/>
    <ellipse cx="55" cy="42" rx="4" ry="5" fill="currentColor" opacity="0.12"/>
    <ellipse cx="42" cy="55" rx="4" ry="5" fill="currentColor" opacity="0.14"/>
    <ellipse cx="58" cy="57" rx="4" ry="5" fill="currentColor" opacity="0.14"/>
    <ellipse cx="40" cy="70" rx="4" ry="5" fill="currentColor" opacity="0.14"/>
    <ellipse cx="55" cy="72" rx="4" ry="5" fill="currentColor" opacity="0.14"/>
    <ellipse cx="42" cy="85" rx="4" ry="5" fill="currentColor" opacity="0.12"/>
    <ellipse cx="58" cy="87" rx="4" ry="5" fill="currentColor" opacity="0.12"/>
    <ellipse cx="45" cy="100" rx="4" ry="5" fill="currentColor" opacity="0.1"/>
    <ellipse cx="55" cy="100" rx="4" ry="5" fill="currentColor" opacity="0.1"/>
    {/* Husk leaves */}
    <path d="M25 50C25 50 10 40 5 25" stroke="currentColor" strokeWidth="1.2" opacity="0.15"/>
    <path d="M75 50C75 50 90 40 95 25" stroke="currentColor" strokeWidth="1.2" opacity="0.15"/>
  </svg>
);

const Sunflower = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.15"/>
    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle) => (
      <ellipse
        key={angle}
        cx={50 + 22 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 22 * Math.sin((angle * Math.PI) / 180)}
        rx="5"
        ry="10"
        fill="currentColor"
        opacity="0.1"
        transform={`rotate(${angle} ${50 + 22 * Math.cos((angle * Math.PI) / 180)} ${50 + 22 * Math.sin((angle * Math.PI) / 180)})`}
      />
    ))}
  </svg>
);

const SeedPod = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bean/seed pod */}
    <path d="M30 5C18 5 10 25 10 50C10 75 18 95 30 95C42 95 50 75 50 50C50 25 42 5 30 5Z" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    <path d="M30 10V90" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="30" cy="50" r="4" fill="currentColor" opacity="0.14"/>
    <circle cx="30" cy="70" r="4" fill="currentColor" opacity="0.12"/>
  </svg>
);

export default function ComingSoon() {
  const { mission, contact } = nutriHarvestContent;

  const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

  const letterReveal = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4 + i * 0.04, ease: easing },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: easing },
    }),
  };

  return (
    <div className="grain-overlay relative h-screen w-full bg-background text-foreground overflow-hidden">

      {/* KENTE BORDER — Top & Bottom accent only */}
      <div className="kente-border fixed top-0 left-0 w-full z-50" />
      <div className="kente-border fixed bottom-0 left-0 w-full z-50" />

      {/* FOOD GRAFFITI — Dense, varied grains & seeds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="pointer-events-none"
      >
        {/* Wheat */}
        <WheatStalk className="food-graffiti text-primary w-16 md:w-24 top-[5%] right-[5%] rotate-12" />
        <WheatStalk className="food-graffiti text-secondary/80 w-12 md:w-18 bottom-[8%] left-[3%] -rotate-[8deg]" />

        {/* Leaves */}
        <AfricanLeaf className="food-graffiti text-primary w-20 md:w-28 bottom-[15%] right-[2%] rotate-[20deg]" />
        <AfricanLeaf className="food-graffiti text-secondary/50 w-16 md:w-22 top-[3%] left-[8%] -rotate-[20deg]" />

        {/* Bowl */}
        <BowlMotif className="food-graffiti text-secondary w-24 md:w-32 bottom-[5%] right-[10%] rotate-2" />

        {/* Mortar */}
        <Mortar className="food-graffiti text-secondary/70 w-14 md:w-20 top-[25%] right-[3%] -rotate-[10deg]" />

        {/* Cassava */}
        <Cassava className="food-graffiti text-primary/70 w-8 md:w-12 bottom-[20%] left-[6%] rotate-[25deg]" />

        {/* Millet seeds — scattered clouds */}
        <MilletSeeds className="food-graffiti text-secondary w-28 md:w-44 top-[10%] left-[15%]" />
        <MilletSeeds className="food-graffiti text-primary w-24 md:w-36 bottom-[12%] right-[25%] rotate-45" />
        <MilletSeeds className="food-graffiti text-secondary/60 w-20 md:w-32 top-[55%] left-[0%] rotate-[20deg]" />

        {/* Sorghum heads */}
        <SorghumHead className="food-graffiti text-primary w-10 md:w-14 top-[8%] right-[25%] rotate-[15deg]" />
        <SorghumHead className="food-graffiti text-secondary/70 w-8 md:w-12 bottom-[25%] left-[15%] -rotate-[12deg]" />

        {/* Rice grains */}
        <RiceGrains className="food-graffiti text-primary/80 w-24 md:w-36 top-[40%] right-[0%] rotate-[10deg]" />
        <RiceGrains className="food-graffiti text-secondary/60 w-20 md:w-28 bottom-[0%] left-[20%] -rotate-[30deg]" />

        {/* Maize cobs */}
        <MaizeKernel className="food-graffiti text-secondary w-12 md:w-18 top-[30%] left-[2%] rotate-[15deg]" />
        <MaizeKernel className="food-graffiti text-primary/70 w-10 md:w-14 bottom-[3%] right-[35%] -rotate-[20deg]" />

        {/* Sunflower */}
        <Sunflower className="food-graffiti text-secondary/80 w-16 md:w-24 top-[60%] right-[5%]" />

        {/* Seed pods */}
        <SeedPod className="food-graffiti text-primary w-8 md:w-12 top-[45%] left-[5%] rotate-[30deg]" />
        <SeedPod className="food-graffiti text-secondary/70 w-6 md:w-10 top-[15%] right-[15%] -rotate-[15deg]" />
        <SeedPod className="food-graffiti text-primary/60 w-8 md:w-12 bottom-[35%] right-[18%] rotate-[45deg]" />
      </motion.div>

      {/* ═══════════════ MAIN CONTENT — All in one viewport ═══════════════ */}
      <main className="relative z-10 h-screen flex flex-col justify-center px-[5vw]">

        {/* ① NUTRIHARVEST LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easing }}
          className="mb-6 md:mb-8"
        >
          <img
            src="/nutrihavestlogo.png"
            alt="NutriHarvest"
            className="h-16 md:h-24 lg:h-28 w-auto object-contain"
          />
        </motion.div>

        {/* ② COMING SOON */}
        <div className="mb-6 md:mb-10 overflow-hidden">
          <div className="flex flex-wrap" style={{ lineHeight: '0.82' }}>
            {"COMING".split("").map((char, i) => (
              <motion.span
                key={`c-${i}`}
                custom={i}
                variants={letterReveal}
                initial="hidden"
                animate="visible"
                className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-black tracking-[-0.06em]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  color: 'hsl(38, 40%, 92%)',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap -mt-1 md:-mt-3" style={{ lineHeight: '0.82' }}>
            {"SOON".split("").map((char, i) => (
              <motion.span
                key={`s-${i}`}
                custom={i + 6}
                variants={letterReveal}
                initial="hidden"
                animate="visible"
                className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-black tracking-[-0.06em]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  WebkitTextStroke: '2px hsl(145, 50%, 35%)',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              custom={11}
              variants={letterReveal}
              initial="hidden"
              animate="visible"
              className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-black text-secondary"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              .
            </motion.span>
          </div>
        </div>

        {/* ③ OUR VISION — Compact editorial row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 mb-8">
          <motion.div
            custom={1.0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="h-1 w-12 bg-secondary mb-4" />
            <p className="text-base md:text-xl lg:text-2xl font-light leading-snug text-foreground/80 tracking-tight">
              Food-to-food fortification for{" "}
              <span
                className="font-bold italic text-secondary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                better nourishment
              </span>
              , anytime, anywhere.
            </p>
          </motion.div>

          <motion.div
            custom={1.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 lg:col-span-6 lg:col-start-7"
          >
            <div className="border-l-2 border-primary/40 pl-4 md:pl-8">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-primary block mb-3">
                Our Vision
              </span>
              <p className="text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                {mission.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ④ FOOTER — Inline at bottom */}
        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="h-px w-full bg-foreground/10 mb-4" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary">
                Get in Touch
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm md:text-lg font-medium text-foreground/70 hover:text-secondary transition-colors duration-500 tracking-tight"
              >
                {contact.email}
              </a>
            </div>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/20">
              © {new Date().getFullYear()} NutriHarvest
            </span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
