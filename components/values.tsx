"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users2, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about helping businesses grow and succeed in the digital world.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable results and tangible growth for your business.",
  },
  {
    icon: Users2,
    title: "Partnership",
    description: "We believe in building long-term partnerships and growing together with our clients.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly evolving and adapting to the latest digital trends and technologies.",
  },
]

export function Values() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-lg">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-primary-foreground/80">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

