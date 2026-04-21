import { motion } from "framer-motion"
import { nutriHarvestContent } from "../data/content"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function Contact() {
  const { contact } = nutriHarvestContent

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 container mx-auto flex items-center justify-center">
      <motion.div 
        className="max-w-xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            {contact.cta}
          </p>
        </div>

        <form className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="How can we help you?" 
            />
          </div>
          <Button type="button" size="lg" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-center text-muted-foreground">
          <p>{contact.address}</p>
          <p className="mt-2 font-medium text-foreground">{contact.email}</p>
        </div>
      </motion.div>
    </div>
  )
}
