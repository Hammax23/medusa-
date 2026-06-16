import LocalizedClientLink from "@modules/common/components/localized-client-link"

const highlights = [
  "Enterprise-grade security",
  "Global fulfillment network",
  "Dedicated B2B accounts",
]

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-whet-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-whet-800/50 via-whet-950 to-whet-950" />
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="content-container relative z-10 py-20 small:py-28">
        <div className="grid grid-cols-1 large:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 bg-gold-500/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">
                Enterprise Commerce Platform
              </span>
            </div>

            <h1 className="font-display text-4xl small:text-5xl large:text-6xl font-semibold text-white leading-[1.08] tracking-tight">
              Precision-Crafted
              <span className="block text-gold-400">Commerce</span>
              for Modern Enterprise
            </h1>

            <p className="mt-6 text-lg text-whet-300 leading-relaxed max-w-lg">
              Whetstonez delivers curated procurement, secure checkout, and
              white-glove support — engineered for organizations that demand
              excellence.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-whet-200"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-gold-500/40 bg-gold-500/10">
                    <svg
                      className="h-3 w-3 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col xsmall:flex-row gap-4">
              <LocalizedClientLink href="/store" className="btn-enterprise-primary">
                Shop Collection
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account"
                className="btn-enterprise-ghost-light"
              >
                Business Account
              </LocalizedClientLink>
            </div>
          </div>

          <div className="hidden large:block">
            <div className="relative border border-whet-700/60 bg-whet-900/40 backdrop-blur-sm p-8">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-500/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-500/50" />

              <p className="enterprise-section-label text-gold-400 mb-6">
                Platform Overview
              </p>

              <div className="space-y-6">
                {[
                  {
                    label: "Catalog Management",
                    value: "Unified product data across regions",
                  },
                  {
                    label: "Order Operations",
                    value: "Real-time inventory & fulfillment tracking",
                  },
                  {
                    label: "Account Controls",
                    value: "Role-based access for procurement teams",
                  },
                  {
                    label: "Payment Security",
                    value: "Encrypted transactions & invoicing options",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-whet-700/50 pb-5 last:border-0 last:pb-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-whet-200">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-whet-700/50 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-display font-semibold text-white">
                    99.9%
                  </p>
                  <p className="text-xs text-whet-400 uppercase tracking-wide mt-0.5">
                    Platform uptime target
                  </p>
                </div>
                <LocalizedClientLink
                  href="/store"
                  className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
                >
                  View catalog →
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
