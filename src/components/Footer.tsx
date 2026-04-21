import { Leaf } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">NutriHarvest</span>
          </Link>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap max-w-sm">
            Transforming everyday meals into nutrient-rich solutions through smart food-to-food fortification. Let's make nourishment accessible to everyone.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NutriHarvest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
