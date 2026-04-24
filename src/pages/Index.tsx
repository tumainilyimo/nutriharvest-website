import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Clock, Leaf, MapPin, ArrowRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { nutriHarvestContent } from "../data/content"
import GrainFieldBackground from "../components/GrainFieldBackground"

// Helper map to convert string names to components
const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-8 h-8 text-primary" />,
  Leaf: <Leaf className="w-8 h-8 text-primary" />,
  MapPin: <MapPin className="w-8 h-8 text-primary" />
}

export default function Index() {
  const { hero, mission, features } = nutriHarvestContent

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <GrainFieldBackground className="absolute inset-0 h-full w-full pointer-events-none opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-4xl relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {hero.subheadline}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" asChild className="text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/20">
              <Link to="/products">{hero.primaryCTA}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 rounded-full">
              <Link to="/about">{hero.secondaryCTA}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{mission.title}</h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            {mission.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why NutriHarvest?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our food-to-food fortification guarantees that you don't compromise health for convenience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="mb-4 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                      {iconMap[feature.icon]}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Ready for Better Nourishment?</h2>
            <Button size="lg" asChild className="rounded-full">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
         </div>
      </section>
    </div>
  )
}
