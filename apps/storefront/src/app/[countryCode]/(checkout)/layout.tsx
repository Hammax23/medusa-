import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/layout/components/brand-logo"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-whet-50 min-h-screen relative">
      <div className="h-16 bg-whet-950 border-b border-whet-800">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-xs font-medium text-whet-300 hover:text-gold-400 flex items-center gap-x-2 uppercase tracking-wide flex-1 basis-0 transition-colors"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-gold-500" size={16} />
            <span className="hidden small:block">Back to cart</span>
            <span className="block small:hidden">Back</span>
          </LocalizedClientLink>
          <BrandLogo variant="light" />
          <div className="flex-1 basis-0 flex justify-end">
            <span className="text-[10px] uppercase tracking-widest text-whet-500 hidden small:block">
              Secure Checkout
            </span>
          </div>
        </nav>
      </div>
      <div className="relative py-8 small:py-12" data-testid="checkout-container">
        {children}
      </div>
      <div className="py-6 border-t border-whet-200 bg-white">
        <p className="text-center text-xs text-whet-400 tracking-wide">
          © {new Date().getFullYear()} Whetstonez Ecommerce · Encrypted & secure payments
        </p>
      </div>
    </div>
  )
}
