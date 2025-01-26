"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart2, Smartphone, Globe, Shield, Search, Code, Users } from "lucide-react"

const features = [
  {
    title: "Lightning Fast Performance",
    description: "Optimized websites that load in milliseconds, ensuring the best user experience.",
    icon: Zap,
  },
  {
    title: "SEO Optimization",
    description: "Advanced search engine optimization to improve your visibility and rankings.",
    icon: Search,
  },
  {
    title: "Responsive Design",
    description: "Websites that look and work perfectly on all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Global Reach",
    description: "Connect with customers worldwide through strategic digital marketing.",
    icon: Globe,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security to protect your business and customer data.",
    icon: Shield,
  },
  {
    title: "Analytics & Insights",
    description: "Detailed analytics and reporting to track your digital success.",
    icon: BarChart2,
  },
  {
    title: "Custom Development",
    description: "Tailored solutions built with cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "Social Integration",
    description: "Seamless integration with all major social media platforms.",
    icon: Users,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Discover the features that make us stand out from the competition
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
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

