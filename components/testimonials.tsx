"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "OneXengine.Media transformed our online presence completely. Our traffic has increased by 200% since working with them.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/placeholder.svg",
  },
  {
    quote: "The team's expertise in digital marketing helped us reach new markets we never thought possible.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "/placeholder.svg",
  },
  {
    quote:
      "Professional, responsive, and delivers results. Couldn't be happier with our new website and marketing strategy.",
    author: "Emma Williams",
    role: "Founder, EcoStyle",
    image: "/placeholder.svg",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Quote className="h-12 w-12 text-primary" />
                    <p className="text-xl md:text-2xl italic">{testimonials[current].quote}</p>
                    <div className="mt-4">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        width={64}
                        height={64}
                        className="rounded-full mx-auto mb-2"
                      />
                      <div className="font-semibold">{testimonials[current].author}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

