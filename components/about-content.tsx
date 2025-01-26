"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutContent() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Welcome to OneXengine.Media
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by Anupam Saha in 2020, OneXengine.Media is a growing agency dedicated to helping individuals
                and small businesses effectively manage their online presence.
              </p>
              <p>
                While our official website is in the prototype phase, we continue to expand and enhance our services,
                building long-term partnerships and driving measurable growth for businesses like yours.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin%20profile.jpg-wNDOIsZIwksRv4deN0AzXyjywlpPxc.jpeg"
              alt="Anupam Saha - Founder of OneXengine.Media"
              width={600}
              height={800}
              className="rounded-2xl shadow-xl"
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-lg">Anupam Saha</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

