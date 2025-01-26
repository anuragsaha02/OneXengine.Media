"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe2, Users, Laptop, BarChart } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "We handle your social media accounts, ensuring consistent posting, engaging content, and steady follower growth.",
  },
  {
    icon: Laptop,
    title: "Website and Web App Optimization",
    description:
      "From creating user-friendly designs to improving performance, we optimize your digital platforms to achieve better results.",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description:
      "We strategize and execute marketing campaigns tailored to your goals, whether it's reaching new customers or increasing brand awareness.",
  },
  {
    icon: Globe2,
    title: "Online Presence Management",
    description:
      "Comprehensive management of your digital presence to ensure consistent brand messaging and maximum impact.",
  },
]

export function Journey() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Specialized services tailored to elevate your digital presence
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
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

