import { notFound } from "next/navigation"
import { Suspense } from "react"

import PageHeader from "@modules/common/components/page-header"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  const parentTrail = [...parents].reverse()

  return (
    <>
      <PageHeader
        label="Category"
        labelAr="القسم"
        title={category.name}
        description={
          category.description ||
          `Browse ${category.name} plants and products in our collection.`
        }
        descriptionAr={`تصفح منتجات ${category.name} في مجموعتنا`}
      />
      <div
        className="flex flex-col small:flex-row small:items-start py-10 content-container bg-plant-50/30 min-h-[60vh]"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} data-testid="sort-by-container" />
        <div className="w-full">
          {parentTrail.length > 0 && (
            <nav className="mb-6 text-xs uppercase tracking-wide text-plant-500">
              {parentTrail.map((parent) => (
                <span key={parent.id}>
                  <LocalizedClientLink
                    className="hover:text-plant-600 transition-colors"
                    href={`/categories/${parent.handle}`}
                    data-testid="sort-by-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span className="mx-2 text-plant-300">/</span>
                </span>
              ))}
              <span className="text-plant-900 font-medium">{category.name}</span>
            </nav>
          )}
          {category.category_children && category.category_children.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="px-3 py-1.5 bg-white border border-plant-200 rounded-lg text-xs uppercase tracking-wide text-plant-600 hover:border-plant-500 hover:text-plant-500 hover:bg-plant-50 transition-colors"
                >
                  {c.name}
                </LocalizedClientLink>
              ))}
            </div>
          )}
          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={category.products?.length ?? 8}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}
