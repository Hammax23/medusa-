import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import CategoriesShowcase from "@modules/home/components/categories-showcase"
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedProductsFallback from "@modules/home/components/featured-products/fallback"
import BenefitsSection from "@modules/home/components/benefits-section"
import TestimonialsSection from "@modules/home/components/testimonials-section"
import NewsletterSection from "@modules/home/components/newsletter-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Bayt Al-Nabat — Premium plant store in Saudi Arabia. Shop indoor plants, outdoor plants, succulents, and gardening supplies with fresh delivery guarantee.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!region) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-plant-600">Region not found. Please check your Medusa Admin settings.</p>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section with Video Background */}
      <Hero />
      
      {/* Categories Showcase */}
      <CategoriesShowcase />
      
      {/* Featured Products */}
      <div className="bg-plant-50 py-20">
        <div className="content-container">
          <ul className="flex flex-col">
            {collections && collections.length > 0 ? (
              <FeaturedProducts collections={collections} region={region} />
            ) : (
              <FeaturedProductsFallback
                countryCode={countryCode}
                region={region}
              />
            )}
          </ul>
        </div>
      </div>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
