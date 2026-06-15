import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/layout/components/brand-logo"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <div className="bg-whet-900 text-whet-300 text-center text-xs py-2 tracking-wide hidden small:block">
        Free enterprise shipping on orders over $150 &nbsp;·&nbsp; 24/7 dedicated support &nbsp;·&nbsp; Secure checkout
      </div>
      <header className="relative h-16 mx-auto border-b border-whet-800 bg-whet-950/95 backdrop-blur-md">
        <nav className="content-container flex items-center justify-between w-full h-full text-sm">
          <div className="flex-1 basis-0 h-full flex items-center gap-8">
            <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            <div className="hidden small:flex items-center gap-6">
              <LocalizedClientLink
                className="text-whet-300 hover:text-gold-400 transition-colors tracking-wide uppercase text-xs font-medium"
                href="/store"
              >
                Shop
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-whet-300 hover:text-gold-400 transition-colors tracking-wide uppercase text-xs font-medium"
                href="/store"
              >
                Collections
              </LocalizedClientLink>
            </div>
          </div>

          <div className="flex items-center h-full">
            <BrandLogo variant="light" />
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="text-whet-300 hover:text-gold-400 transition-colors tracking-wide uppercase text-xs font-medium"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-whet-300 hover:text-gold-400 flex gap-2 text-xs font-medium uppercase tracking-wide"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
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
