import { Suspense } from "react"

import PageHeader from "@modules/common/components/page-header"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <>
      <PageHeader
        label="Shop"
        labelAr="تسوق"
        title="All Plants"
        titleAr="جميع النباتات"
        description="Explore our complete collection of indoor plants, outdoor plants, succulents, and gardening supplies."
        descriptionAr="استكشف مجموعتنا الكاملة من النباتات الداخلية والخارجية والصبار ومستلزمات الزراعة."
      />
      <div
        className="flex flex-col small:flex-row small:items-start py-10 content-container bg-plant-50/30 min-h-[60vh]"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default StoreTemplate
