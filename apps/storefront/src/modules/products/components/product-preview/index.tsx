import { Text } from "@modules/common/components/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <article data-testid="product-wrapper" className="h-full bg-white rounded-2xl overflow-hidden border border-plant-100 hover:border-plant-300 hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-plant-900/0 group-hover:bg-plant-900/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-plant-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              View Details
            </span>
          </div>
        </div>
        <div className="p-4 space-y-2">
          {product.collection && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-plant-500">
              🌿 {product.collection.title}
            </p>
          )}
          <div className="flex items-start justify-between gap-3">
            <Text
              className="text-sm font-semibold text-plant-900 group-hover:text-plant-600 transition-colors line-clamp-2"
              data-testid="product-title"
            >
              {product.title}
            </Text>
            <div className="shrink-0">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
          <div className="h-0.5 w-0 bg-plant-500 rounded-full group-hover:w-full transition-all duration-300" />
        </div>
      </article>
    </LocalizedClientLink>
  )
}
