"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Web Development", "Digital Marketing", "Social Media"]

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg",
    description: "Custom e-commerce solution with advanced features",
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    image: "/placeholder.svg",
    description: "Increased organic traffic by 150%",
  },
  {
    title: "Social Media Strategy",
    category: "Social Media",
    image: "/placeholder.svg",
    description: "Boosted engagement across all platforms",
  },
  // Add more projects...
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Latest Work</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore our portfolio of successful projects
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button variant="secondary">View Project</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2">{project.category}</Badge>
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

