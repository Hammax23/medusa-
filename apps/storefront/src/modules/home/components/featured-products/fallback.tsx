import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function FeaturedProductsFallback({
  countryCode,
  region,
}: {
  countryCode: string
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products },
  } = await listProducts({
    countryCode,
    queryParams: {
      limit: 8,
      fields: "*variants.calculated_price",
    },
  })

  if (!products?.length) {
    return (
      <div className="content-container py-12 text-center">
        <p className="text-whet-500 text-sm">
          No products available yet. Add products in the admin dashboard to
          populate this section.
        </p>
      </div>
    )
  }

  return (
    <div className="content-container py-12 small:py-16">
      <div className="flex justify-between items-end mb-10 border-b border-whet-100 pb-6">
        <div>
          <p className="enterprise-section-label mb-1">Featured</p>
          <h3 className="font-display text-2xl small:text-3xl text-whet-900 font-semibold">
            Top Products
          </h3>
        </div>
        <LocalizedClientLink
          href="/store"
          className="text-sm font-medium text-whet-600 hover:text-gold-600 uppercase tracking-wide transition-colors"
        >
          View catalog →
        </LocalizedClientLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
