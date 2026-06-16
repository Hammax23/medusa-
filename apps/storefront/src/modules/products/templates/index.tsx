import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="bg-whet-50/30 border-b border-whet-100">
        <div
          className="content-container flex flex-col small:flex-row small:items-start py-10 small:py-14 gap-8 small:gap-12"
          data-testid="product-container"
        >
          <div className="flex flex-col small:sticky small:top-28 small:max-w-[320px] w-full gap-y-8">
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>
          <div className="block w-full relative flex-1">
            <div className="enterprise-card-elevated overflow-hidden">
              <ImageGallery images={images} />
            </div>
          </div>
          <div className="flex flex-col small:sticky small:top-28 small:max-w-[320px] w-full gap-y-6">
            <div className="enterprise-card-elevated p-6">
              <p className="enterprise-section-label mb-4">Purchase</p>
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
            </div>
            <div className="border border-whet-100 bg-white p-5 space-y-3">
              {[
                "Secure encrypted checkout",
                "Enterprise shipping options",
                "Dedicated support available",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-2 text-xs text-whet-600"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-24"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
