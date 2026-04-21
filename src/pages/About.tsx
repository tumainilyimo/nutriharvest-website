import { motion } from "framer-motion"
import { nutriHarvestContent } from "../data/content"

export default function About() {
  const { mission } = nutriHarvestContent

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 container mx-auto flex items-center justify-center">
      <motion.div 
        className="max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Story</h1>
        <div className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">{mission.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {mission.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
