import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, BarChart, Share2 } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom website development solutions, both code-based and no-code, tailored to your needs.",
    icon: Laptop,
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to boost your online presence and reach your target audience.",
    icon: BarChart,
  },
  {
    title: "Social Media",
    description: "Comprehensive social media management to engage your audience and build brand awareness.",
    icon: Share2,
  },
]

export function Services() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="relative overflow-hidden group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

