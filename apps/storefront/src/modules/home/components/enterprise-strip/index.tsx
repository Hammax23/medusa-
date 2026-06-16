const capabilities = [
  {
    title: "SOC 2 Ready",
    description: "Security-first infrastructure for enterprise procurement teams.",
  },
  {
    title: "Multi-Region",
    description: "Localized catalogs, currencies, and fulfillment worldwide.",
  },
  {
    title: "Volume Pricing",
    description: "Flexible pricing tiers for teams and bulk orders.",
  },
  {
    title: "Dedicated Support",
    description: "Priority assistance for business account holders.",
  },
]

const EnterpriseStrip = () => {
  return (
    <section className="bg-whet-50 border-y border-whet-100">
      <div className="content-container py-14 small:py-16">
        <div className="flex flex-col large:flex-row large:items-center gap-10 large:gap-16">
          <div className="shrink-0 max-w-xs">
            <p className="enterprise-section-label mb-2">Enterprise Ready</p>
            <h2 className="font-display text-2xl text-whet-900 font-semibold leading-snug">
              Built for teams that need reliability at scale
            </h2>
          </div>
          <div className="grid grid-cols-1 xsmall:grid-cols-2 large:grid-cols-4 gap-6 flex-1">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-gold-500 pl-4"
              >
                <h3 className="text-sm font-semibold text-whet-900 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-whet-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseStrip
