import { motion } from "framer-motion"
import { nutriHarvestContent } from "../data/content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Products() {
  const { products } = nutriHarvestContent

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Products</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover our range of nutrient-rich fortified instant porridge solutions.
        </p>

        <div className="grid gap-12">
          {products.map((product, i) => (
            <Card key={i} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={product.imagePlaceholder} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="md:w-3/5 p-2 flex flex-col justify-center">
                  <CardHeader>
                    <CardTitle className="text-3xl">{product.name}</CardTitle>
                    <CardDescription className="text-lg mt-2 text-primary font-medium">{product.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <Button size="lg" className="rounded-full w-full md:w-auto">
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
