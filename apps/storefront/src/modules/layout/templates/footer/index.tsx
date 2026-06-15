import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { clx } from "@modules/common/components/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/layout/components/brand-logo"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-whet-950 border-t border-whet-800 w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-10 xsmall:flex-row items-start justify-between py-16 small:py-20">
          <div className="max-w-xs">
            <BrandLogo variant="light" />
            <p className="mt-5 text-sm text-whet-400 leading-relaxed">
              Enterprise-grade ecommerce platform delivering premium products
              with precision, reliability, and world-class support.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-whet-700 flex items-center justify-center text-whet-400 hover:border-gold-500 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-whet-700 flex items-center justify-center text-whet-400 hover:border-gold-500 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null

                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="text-whet-400 hover:text-white transition-colors text-sm"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400">
                  Collections
                </span>
                <ul
                  className={clx("grid grid-cols-1 gap-2", {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-whet-400 hover:text-white transition-colors text-sm"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-3">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-2 text-whet-400 text-sm">
                <li>
                  <LocalizedClientLink href="/store" className="hover:text-white transition-colors">
                    Shop All
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/account" className="hover:text-white transition-colors">
                    My Account
                  </LocalizedClientLink>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-whet-800 py-6 flex flex-col small:flex-row w-full gap-4 justify-between items-center text-whet-500 text-xs">
          <p>© {new Date().getFullYear()} Whetstonez Ecommerce. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-whet-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-whet-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-whet-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
