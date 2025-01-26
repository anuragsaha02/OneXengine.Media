"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, BarChart, Share2, Globe, Search, Users, Code, Megaphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Laptop,
    title: "Website Development",
    description: "Custom website development solutions with modern technologies and responsive design.",
    price: "Contact for Custom Quote",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic to your website.",
    price: "Packages Coming Soon",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media strategy and content management.",
    price: "Flexible Plans Available",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Full-service digital marketing campaigns to grow your business.",
    price: "Custom Solutions",
  },
  {
    icon: Code,
    title: "Web App Development",
    description: "Custom web applications tailored to your business needs.",
    price: "Project-based Pricing",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Strategic content creation and marketing to engage your audience.",
    price: "Contact for Details",
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <p className="font-medium text-primary">{service.price}</p>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
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

