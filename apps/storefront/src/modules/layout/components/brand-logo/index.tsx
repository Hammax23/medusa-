import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { clx } from "@modules/common/components/ui"

type BrandLogoProps = {
  variant?: "light" | "dark"
  className?: string
}

const BrandLogo = ({ variant = "dark", className }: BrandLogoProps) => {
  const isLight = variant === "light"

  return (
    <LocalizedClientLink
      href="/"
      className={clx("flex items-center gap-2.5 group", className)}
      data-testid="nav-store-link"
    >
      <div
        className={clx(
          "w-9 h-9 flex items-center justify-center font-display font-bold text-sm transition-colors",
          isLight
            ? "bg-gold-500 text-whet-950 group-hover:bg-gold-400"
            : "bg-whet-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-whet-950"
        )}
      >
        W
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={clx(
            "font-display text-lg font-semibold tracking-tight",
            isLight ? "text-white" : "text-whet-900"
          )}
        >
          Whetstonez
        </span>
        <span
          className={clx(
            "text-[10px] tracking-[0.25em] uppercase font-medium",
            isLight ? "text-whet-400" : "text-whet-500"
          )}
        >
          Ecommerce
        </span>
      </div>
    </LocalizedClientLink>
  )
}

export default BrandLogo
