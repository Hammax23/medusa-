import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts?.length) {
    return null
  }

  return (
    <div className="py-12 small:py-16">
      <div className="flex justify-between items-end mb-10 border-b border-plant-200 pb-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-plant-500 mb-1">
            🌿 Collection
          </p>
          <Text className="font-display text-2xl small:text-3xl text-plant-900 font-semibold">
            {collection.title}
          </Text>
        </div>
        <LocalizedClientLink
          href={`/collections/${collection.handle}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-plant-600 hover:text-plant-500 transition-colors"
        >
          <span>View all</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </LocalizedClientLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 large:grid-cols-4 gap-x-6 gap-y-12 small:gap-y-16">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
