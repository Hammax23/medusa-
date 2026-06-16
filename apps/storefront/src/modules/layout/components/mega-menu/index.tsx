"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"

const getCategoriesData = (t: (key: string) => string) => [
  {
    name: t("cat.indoor"),
    href: "/categories/indoor-plants",
    description: t("cat.indoorDesc"),
    icon: "🌿",
    items: [
      { name: t("subcat.shadePlants"), href: "/categories/shade-plants" },
      { name: t("subcat.hangingPlants"), href: "/categories/hanging-plants" },
      { name: t("subcat.airPurifying"), href: "/categories/air-purifying" },
      { name: t("subcat.smallPlants"), href: "/categories/small-plants" },
    ]
  },
  {
    name: t("cat.outdoor"),
    href: "/categories/outdoor-plants",
    description: t("cat.outdoorDesc"),
    icon: "🌳",
    items: [
      { name: t("subcat.ornamentalTrees"), href: "/categories/ornamental-trees" },
      { name: t("subcat.shrubs"), href: "/categories/shrubs" },
      { name: t("subcat.climbingPlants"), href: "/categories/climbing-plants" },
      { name: t("subcat.floweringPlants"), href: "/categories/flowering-plants" },
    ]
  },
  {
    name: t("cat.succulents"),
    href: "/categories/succulents",
    description: t("cat.succulentsDesc"),
    icon: "🌵",
    items: [
      { name: t("subcat.cactus"), href: "/categories/cactus" },
      { name: t("subcat.succulentPlants"), href: "/categories/succulents" },
      { name: t("subcat.succulentSets"), href: "/categories/succulent-sets" },
    ]
  },
  {
    name: t("cat.supplies"),
    href: "/categories/supplies",
    description: t("cat.suppliesDesc"),
    icon: "🪴",
    items: [
      { name: t("subcat.pots"), href: "/categories/pots" },
      { name: t("subcat.soilFertilizer"), href: "/categories/soil-fertilizer" },
      { name: t("subcat.tools"), href: "/categories/tools" },
      { name: t("subcat.watering"), href: "/categories/watering" },
    ]
  },
]

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const { t, dir } = useLanguage()
  
  const categories = getCategoriesData(t)

  return (
    <div 
      className="relative h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        className="flex items-center gap-2 px-4 py-2 h-full text-plant-800 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>{t("nav.categories")}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full w-[800px] bg-white rounded-xl shadow-2xl border border-plant-100 overflow-hidden z-50">
          <div className="flex">
            {/* Categories List */}
            <div className="w-64 bg-plant-50 p-4 border-l border-plant-100">
              <p className="text-xs text-plant-500 font-medium mb-3 text-right">{t("mega.browseCategories")}</p>
              <ul className="space-y-1">
                {categories.map((cat, index) => (
                  <li key={cat.name}>
                    <button
                      onMouseEnter={() => setActiveCategory(index)}
                      className={`w-full flex items-center justify-end gap-3 px-4 py-3 rounded-lg text-right transition-all ${
                        activeCategory === index 
                          ? 'bg-white text-plant-700 shadow-sm' 
                          : 'text-plant-600 hover:bg-white/50'
                      }`}
                    >
                      <div>
                        <p className="font-medium">{cat.name}</p>
                        <p className="text-xs text-plant-400">{cat.description}</p>
                      </div>
                      <span className="text-2xl">{cat.icon}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-end gap-3 mb-4 pb-4 border-b border-plant-100">
                <div className="text-right">
                  <h3 className="text-lg font-bold text-plant-800">
                    {categories[activeCategory].name}
                  </h3>
                  <p className="text-sm text-plant-500">
                    {categories[activeCategory].description}
                  </p>
                </div>
                <span className="text-4xl">{categories[activeCategory].icon}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {categories[activeCategory].items.map((item) => (
                  <LocalizedClientLink
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-end gap-2 p-3 rounded-lg hover:bg-plant-50 text-plant-700 hover:text-plant-600 transition-all group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <svg 
                      className="w-4 h-4 text-plant-400 group-hover:text-plant-600 transition-colors rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocalizedClientLink>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-6 pt-4 border-t border-plant-100">
                <LocalizedClientLink
                  href={categories[activeCategory].href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-plant-600 text-white rounded-lg hover:bg-plant-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{t("mega.viewAll")}</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </LocalizedClientLink>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-l from-plant-600 to-plant-700 p-4 flex items-center justify-between">
            <LocalizedClientLink
              href="/collections/new-arrivals"
              className="flex items-center gap-2 text-white hover:text-plant-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">{t("mega.shopNow")}</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LocalizedClientLink>
            <div className="text-right text-white">
              <p className="font-bold">🌱 {t("mega.newArrivals")}</p>
              <p className="text-sm text-plant-200">{t("mega.newArrivalsDesc")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MegaMenu
