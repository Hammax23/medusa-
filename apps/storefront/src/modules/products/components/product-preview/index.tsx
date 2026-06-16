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
      <article data-testid="product-wrapper" className="h-full">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="mt-5 space-y-2">
          {product.collection && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-600">
              {product.collection.title}
            </p>
          )}
          <div className="flex items-start justify-between gap-3">
            <Text
              className="text-sm font-medium text-whet-900 group-hover:text-gold-600 transition-colors line-clamp-2"
              data-testid="product-title"
            >
              {product.title}
            </Text>
            <div className="shrink-0">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
          <div className="h-px w-0 bg-gold-500 group-hover:w-full transition-all duration-300" />
        </div>
      </article>
    </LocalizedClientLink>
  )
}
