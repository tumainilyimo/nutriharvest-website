import { useEffect, type ReactNode, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import {
  ArrowRight,
  BadgeCheck,
  Bean,
  Blend,
  CheckCircle2,
  Clock3,
  ChevronRight,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wheat,
  Zap,
} from "lucide-react"

import logo from "../assets/nutriharvest-logo.png"
import productImage from "../assets/minevit-product.webp"
import { Button } from "../components/ui/button"
import { ingredients, nutriHarvestContent, nutritionFacts, preparationSteps } from "../data/content"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const iconClass = "h-5 w-5"

const highlightIcons = [Blend, Zap, Clock3, ShieldCheck]
const ingredientIcons = [Wheat, Bean, Sprout, Leaf, Sparkles]
const navItems = [
  { label: "Product", id: "product" },
  { label: "Nutrition", id: "nutrition" },
  { label: "Preparation", id: "prepare" },
  { label: "Story", id: "story" },
]

function HeritageDivider() {
  const stripes = [
    "bg-teal-700",
    "bg-slate-950",
    "bg-emerald-950",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-teal-700",
    "bg-slate-950",
    "bg-emerald-950",
  ]

  return (
    <div className="pointer-events-none flex h-4 w-full overflow-hidden" aria-hidden="true">
      {stripes.map((stripe, index) => (
        <span key={index} className={`h-full flex-1 ${stripe}`} />
      ))}
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-emerald-800 shadow-sm shadow-emerald-950/5 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-orange-500" />
      {children}
    </div>
  )
}

function AnimatedNumberCard({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-xl shadow-emerald-950/5 backdrop-blur-xl"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      <p className="font-display text-3xl font-black text-emerald-950">{value}</p>
      <p className="mt-1 text-sm font-bold text-emerald-900">{label}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </motion.div>
  )
}

function ProductAura() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden rounded-[3rem]">
      <div className="absolute left-12 top-8 h-48 w-48 rounded-full bg-orange-300/45 blur-3xl" />
      <div className="absolute bottom-8 right-10 h-56 w-56 rounded-full bg-emerald-400/35 blur-3xl" />
    </div>
  )
}

export default function LandingPage() {
  const { brand, contact, hero, mission, product, products, services, values } = nutriHarvestContent
  const [activeSection, setActiveSection] = useState("product")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const productY = useTransform(scrollYProgress, [0, 0.5], [0, -70])
  const productRotate = useTransform(scrollYProgress, [0, 0.5], [0, -3])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#fff9eb] text-slate-950">
      <motion.div className="fixed left-0 right-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-emerald-700 via-orange-500 to-lime-500" style={{ scaleX }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-[#fff9eb]/85 shadow-sm shadow-emerald-950/5 backdrop-blur-2xl">
        <nav className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-4" aria-label="Primary navigation">
          <div className="flex items-center justify-between gap-3">
            <a href="#top" className="flex min-w-0 items-center gap-3 sm:gap-4" aria-label="NutriHarvest home">
              <img src={logo} alt="NutriHarvest Agri-Food Processing logo" className="h-14 w-auto sm:h-16 md:h-[4.75rem]" />
              <div className="hidden sm:block">
                <p className="text-base font-black uppercase tracking-[0.32em] text-emerald-950 md:text-lg">NutriHarvest</p>
                <p className="text-sm font-semibold text-emerald-800/70">Agri-food processing</p>
              </div>
            </a>
            <div className="hidden items-center gap-2 rounded-full border border-emerald-900/10 bg-white/55 p-1 text-sm font-bold text-slate-700 shadow-sm shadow-emerald-950/5 backdrop-blur-xl md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`rounded-full px-4 py-2.5 transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-900 text-white shadow-lg shadow-emerald-950/15"
                        : "text-slate-700 hover:bg-white hover:text-emerald-900"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
            <Button asChild className="shrink-0 rounded-full bg-emerald-800 px-4 text-sm text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-900 sm:px-5 sm:text-base">
              <a href={`mailto:${contact.email}`}>Contact</a>
            </Button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto rounded-full border border-emerald-900/10 bg-white/65 p-1 text-xs font-bold text-slate-700 shadow-sm shadow-emerald-950/5 backdrop-blur-xl md:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`shrink-0 rounded-full px-3.5 py-2 transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-900 text-white shadow-md shadow-emerald-950/15"
                      : "text-slate-700 hover:bg-white hover:text-emerald-900"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-44 sm:pt-48 md:px-8 md:pt-40">
          <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-200/50 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-900 shadow-sm shadow-emerald-950/5 backdrop-blur-xl">
                <Leaf className="h-4 w-4 text-orange-500" />
                {hero.eyebrow} · {product.netWeight}
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display text-5xl font-black leading-[0.88] tracking-[-0.08em] text-emerald-950 sm:text-7xl md:text-8xl lg:text-9xl">
                {hero.headline}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                {hero.subheadline}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group h-14 w-full rounded-full bg-emerald-800 px-7 text-base text-white shadow-2xl shadow-emerald-900/20 hover:bg-emerald-900 sm:w-auto">
                  <a href="#product">
                    {hero.primaryCTA}
                    <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 w-full rounded-full border-emerald-900/15 bg-white/70 px-7 text-base text-emerald-950 backdrop-blur hover:bg-white sm:w-auto">
                  <a href="#nutrition">{hero.secondaryCTA}</a>
                </Button>
              </motion.div>

              <motion.div variants={stagger} className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {product.badges.map((badge) => (
                  <motion.div key={badge} variants={fadeUp} className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm font-semibold text-emerald-950 shadow-sm backdrop-blur">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-700" />
                    {badge}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[34rem]"
              initial={{ opacity: 0, x: 40, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y: productY, rotate: productRotate }}
            >
              <ProductAura />
              <motion.div
                className="absolute -left-4 top-20 z-20 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl md:-left-16"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Ready in</p>
                <p className="font-display text-4xl font-black text-orange-500">3</p>
                <p className="text-sm font-bold text-emerald-950">simple steps</p>
              </motion.div>
              <motion.img
                src={productImage}
                alt="MineVit Instant Porridge Flour 600g package"
                className="relative z-10 mx-auto w-full drop-shadow-[0_30px_60px_rgba(15,64,34,0.24)]"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </section>
        <HeritageDivider />

        <section id="product" className="relative overflow-hidden px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
                <motion.div variants={fadeUp}><SectionLabel>Product spotlight</SectionLabel></motion.div>
                <motion.h2 variants={fadeUp} className="font-display text-5xl font-black leading-[0.94] tracking-[-0.055em] text-emerald-950 md:text-7xl">
                  {product.fullName}
                </motion.h2>
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg leading-8 text-slate-700 md:text-xl">
                {product.promise} MineVit is a carefully crafted blend of quality ingredients designed to provide balanced nutrition for the whole family while staying familiar, warm, and easy to serve.
              </motion.p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {product.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index]
                return (
                  <motion.div key={highlight} variants={fadeUp} whileHover={{ y: -8 }} className="group rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-xl shadow-emerald-950/5 transition hover:shadow-2xl hover:shadow-emerald-950/10">
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-800 text-white transition group-hover:rotate-6 group-hover:bg-orange-500">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-black tracking-[-0.03em] text-emerald-950">{highlight}</h3>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-emerald-950 px-5 py-24 text-white md:px-8">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <SectionLabel>Food-to-food fortification</SectionLabel>
              <h2 className="font-display text-5xl font-black leading-none tracking-[-0.055em] md:text-7xl">Real crops. Better porridge.</h2>
              <p className="mt-7 text-lg leading-8 text-emerald-50/75">
                MineVit layers staple cereals with legumes, vegetables, moringa, and baobab. The result is a practical porridge that feels familiar while delivering a broader nutrient profile.
              </p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-4 sm:grid-cols-2">
              {ingredients.map((ingredient, index) => {
                const Icon = ingredientIcons[index]
                return (
                  <motion.article key={ingredient.name} variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:bg-white/[0.11]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">{ingredient.role}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{ingredient.name}</h3>
                    <p className="mt-3 leading-7 text-emerald-50/70">{ingredient.description}</p>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </section>
        <HeritageDivider />

        <section id="nutrition" className="relative overflow-hidden px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Nutrition facts per 100 g</SectionLabel>
              <h2 className="font-display text-5xl font-black leading-none tracking-[-0.055em] text-emerald-950 md:text-7xl">Small bowl. Serious nourishment.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Built from the label’s nutrition panel, expanded into clear benefits people can understand before they choose MineVit.
              </p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {nutritionFacts.map((fact) => (
                <AnimatedNumberCard key={fact.nutrient} value={fact.amount} label={fact.nutrient} detail={fact.benefit} />
              ))}
            </motion.div>
          </div>
        </section>
        <HeritageDivider />

        <section id="prepare" className="relative overflow-hidden px-5 py-24 md:px-8">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-[3rem] border border-emerald-900/10 bg-white p-6 shadow-2xl shadow-emerald-950/10">
              <img src={productImage} alt="MineVit pack showing instant porridge serving suggestion" className="mx-auto max-h-[42rem] w-full object-contain" />
            </motion.div>
            <div>
              <SectionLabel>Instant preparation</SectionLabel>
              <h2 className="font-display text-5xl font-black leading-none tracking-[-0.055em] text-emerald-950 md:text-7xl">Hot water is all you need.</h2>
              <div className="mt-10 space-y-4">
                {preparationSteps.map((step, index) => (
                  <motion.div key={step} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} viewport={{ once: true }} className="flex gap-4 rounded-[1.5rem] border border-white/70 bg-white/75 p-5 shadow-lg shadow-emerald-950/5 backdrop-blur">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-white">{index + 1}</div>
                    <p className="pt-2 text-lg leading-7 text-slate-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <HeritageDivider />

        <section id="story" className="relative overflow-hidden px-5 py-24 md:px-8">
          <div className="relative mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-white/90 p-8 shadow-2xl shadow-emerald-950/10 backdrop-blur md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <SectionLabel>Our mission</SectionLabel>
                <h2 className="font-display text-5xl font-black leading-none tracking-[-0.055em] text-emerald-950 md:text-7xl">{mission.title}</h2>
                <p className="mt-8 text-lg leading-8 text-slate-700">{mission.description}</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {values.map((value) => (
                    <div key={value.title} className="rounded-[1.5rem] bg-[#fff9eb] p-5">
                      <CheckCircle2 className="mb-4 h-6 w-6 text-emerald-700" />
                      <h3 className="font-black text-emerald-950">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2.5rem] bg-emerald-950 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">NutriHarvest services</p>
                <div className="mt-8 space-y-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.08] px-5 py-4">
                      <span className="font-semibold">{service}</span>
                      <ChevronRight className="h-5 w-5 text-orange-300" />
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-white p-6 text-emerald-950">
                  <p className="font-display text-4xl font-black tracking-[-0.05em]">{products.length}</p>
                  <p className="mt-1 font-bold">Product concepts: MineVit, ProMine, ProVita</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 px-5 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <img src={logo} alt="NutriHarvest logo" className="h-20 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-xl text-emerald-50/70">{brand.description} {brand.tagline}</p>
          </div>
          <div className="grid gap-4 text-sm md:grid-cols-3">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4 transition hover:bg-white/[0.12]"><Mail className={iconClass} />{contact.email}</a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4 transition hover:bg-white/[0.12]"><Phone className={iconClass} />{contact.phone}</a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4"><MapPin className={iconClass} />Arusha, Tanzania</div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-emerald-50/50 md:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{contact.address}</p>
        </div>
      </footer>
    </div>
  )
}
