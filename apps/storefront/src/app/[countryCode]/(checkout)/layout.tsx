import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/layout/components/brand-logo"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-plant-50 min-h-screen relative">
      {/* Header */}
      <div className="h-16 bg-gradient-to-r from-plant-800 to-plant-900">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-sm font-medium text-plant-200 hover:text-white flex items-center gap-x-2 flex-1 basis-0 transition-colors"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-plant-400" size={16} />
            <span className="hidden small:block">Back to cart</span>
            <span className="block small:hidden">Back</span>
          </LocalizedClientLink>
          <BrandLogo variant="light" />
          <div className="flex-1 basis-0 flex justify-end">
            <div className="flex items-center gap-2 text-plant-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs font-medium hidden small:block">
                Secure Checkout
              </span>
            </div>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="relative py-8 small:py-12" data-testid="checkout-container">
        {children}
      </div>

      {/* Footer */}
      <div className="py-6 border-t border-plant-200 bg-white">
        <div className="flex items-center justify-center gap-4 text-xs text-plant-500">
          <span>© {new Date().getFullYear()} Bayt Al-Nabat</span>
          <span>·</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-plant-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Encrypted & secure payments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
