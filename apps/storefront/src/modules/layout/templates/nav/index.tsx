import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/layout/components/brand-logo"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavSearch from "@modules/layout/components/nav-search"
import MegaMenu from "@modules/layout/components/mega-menu"
import LanguageToggle from "@modules/layout/components/language-toggle"
import AnnouncementBar from "@modules/layout/components/announcement-bar"
import NavLinks from "@modules/layout/components/nav-links"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation */}
      <header className="relative h-20 mx-auto border-b border-plant-100 bg-white shadow-sm">
        <nav className="content-container flex items-center justify-between w-full h-full text-sm">
          {/* Left: Mobile Menu + Logo */}
          <div className="flex items-center gap-6 h-full">
            <div className="small:hidden">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
            <BrandLogo variant="dark" />
          </div>

          {/* Center: Navigation Links with Mega Menu */}
          <div className="hidden small:flex items-center gap-1 h-full">
            <MegaMenu />
            <NavLinks />
          </div>

          {/* Right: Language Toggle, Search, Account, Cart */}
          <div className="flex items-center gap-3 h-full">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Search */}
            <NavSearch />

            {/* Account */}
            <LocalizedClientLink
              className="hidden small:flex items-center gap-2 px-3 py-2 text-plant-700 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all"
              href="/account"
              data-testid="nav-account-link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </LocalizedClientLink>

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex items-center gap-2 px-3 py-2 bg-plant-600 text-white hover:bg-plant-500 rounded-lg transition-all"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-sm font-medium">0</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
