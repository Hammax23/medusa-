import { Metadata } from "next"

import CtaBanner from "@modules/home/components/cta-banner"
import EnterpriseStrip from "@modules/home/components/enterprise-strip"
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedProductsFallback from "@modules/home/components/featured-products/fallback"
import Features from "@modules/home/components/features"
import Hero from "@modules/home/components/hero"
import TrustBar from "@modules/home/components/trust-bar"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Whetstonez Ecommerce — precision-crafted commerce for modern enterprise. Shop premium products with enterprise-grade reliability.",
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

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <TrustBar />
      <EnterpriseStrip />
      <div className="bg-white">
        <div className="content-container pt-16 pb-4">
          <div className="text-center mb-4">
            <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Featured
            </p>
            <h2 className="font-display text-3xl small:text-4xl text-whet-900 font-semibold">
              Our Collections
            </h2>
          </div>
        </div>
        <ul className="flex flex-col">
          {collections.length > 0 ? (
            <FeaturedProducts collections={collections} region={region} />
          ) : (
            <FeaturedProductsFallback
              countryCode={countryCode}
              region={region}
            />
          )}
        </ul>
      </div>
      <Features />
      <CtaBanner />
    </>
  )
}
