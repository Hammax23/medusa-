"use client"

import { useLanguage } from "@lib/context/language-context"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const NavLinks = () => {
  const { t } = useLanguage()

  return (
    <>
      <LocalizedClientLink
        className="px-4 py-2 text-plant-800 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all font-medium"
        href="/store"
      >
        {t("nav.allPlants")}
      </LocalizedClientLink>
      <LocalizedClientLink
        className="px-4 py-2 text-plant-800 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all font-medium"
        href="/collections/offers"
      >
        {t("nav.offers")}
      </LocalizedClientLink>
      <LocalizedClientLink
        className="px-4 py-2 text-plant-800 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all font-medium"
        href="/blog"
      >
        {t("nav.careGuide")}
      </LocalizedClientLink>
    </>
  )
}

export default NavLinks
