import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { ContactMap } from "@/components/contact-map"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </>
  )
}

