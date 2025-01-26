"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, AlertCircle } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    status: "Coming Soon",
    description: "Perfect for small businesses",
    features: ["Website Development", "Basic SEO Setup", "Social Media Setup", "Email Support", "Monthly Report"],
  },
  {
    name: "Professional",
    status: "Coming Soon",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "Advanced SEO",
      "Content Marketing",
      "Social Media Management",
      "Priority Support",
      "Weekly Reports",
    ],
  },
  {
    name: "Enterprise",
    status: "Custom Quote",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Custom Development",
      "Dedicated Manager",
      "24/7 Support",
      "Custom Reporting",
      "Strategy Consulting",
    ],
  },
]

export function ServicesPricing() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Flexible pricing options tailored to your business needs
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>New pricing packages launching soon!</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">{plan.status}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">Contact for Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

