import { TextRotator } from "@/components/text-rotator"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <>
      <TextRotator />
      <Stats />
      <Services />
      <Features />
      <Projects />
      <ContactForm />
    </>
  )
}

