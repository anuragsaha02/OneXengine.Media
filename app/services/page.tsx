import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ServicesPricing } from "@/components/services-pricing"
import { CTA } from "@/components/cta"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <CTA />
    </>
  )
}

