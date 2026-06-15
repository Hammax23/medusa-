import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
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

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-16">
      <div className="flex justify-between items-end mb-10 border-b border-whet-100 pb-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 mb-1">
            Collection
          </p>
          <Text className="font-display text-2xl small:text-3xl text-whet-900 font-semibold">
            {collection.title}
          </Text>
        </div>
        <InteractiveLink
          href={`/collections/${collection.handle}`}
          className="text-sm font-medium text-whet-600 hover:text-gold-600 uppercase tracking-wide transition-colors"
        >
          View all →
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-12 small:gap-y-16">
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
