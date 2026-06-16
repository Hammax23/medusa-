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
      className={clx("flex items-center gap-3 group", className)}
      data-testid="nav-store-link"
    >
      {/* Plant/Leaf Icon */}
      <div
        className={clx(
          "w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300",
          isLight
            ? "bg-gradient-to-br from-plant-400 to-plant-600 text-white group-hover:from-plant-300 group-hover:to-plant-500 group-hover:scale-105 shadow-lg shadow-plant-500/30"
            : "bg-gradient-to-br from-plant-500 to-plant-700 text-white group-hover:from-plant-400 group-hover:to-plant-600 group-hover:scale-105 shadow-lg shadow-plant-600/30"
        )}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6"
        >
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.62 13.38 2.5 12 2.5S9.5 3.62 9.5 5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={clx(
            "font-display text-xl font-bold tracking-tight",
            isLight ? "text-white" : "text-plant-900"
          )}
        >
          Bayt Al-Nabat
        </span>
        <span
          className={clx(
            "text-[10px] tracking-widest uppercase font-medium",
            isLight ? "text-plant-200" : "text-plant-500"
          )}
        >
          House of Plants
        </span>
      </div>
    </LocalizedClientLink>
  )
}

export default BrandLogo
