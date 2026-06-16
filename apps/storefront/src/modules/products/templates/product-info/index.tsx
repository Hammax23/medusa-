import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-plant-600 hover:text-plant-500 transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-plant-500 rounded-full"></span>
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h1"
          className="font-display text-3xl small:text-4xl leading-tight text-plant-900 font-bold"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-base text-plant-600 leading-relaxed whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
