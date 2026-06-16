const stats = [
  { value: "Secure", label: "Encrypted Checkout" },
  { value: "Global", label: "Multi-Region Fulfillment" },
  { value: "B2B", label: "Business Accounts" },
  { value: "24/7", label: "Priority Support" },
]

const TrustBar = () => {
  return (
    <section className="border-y border-whet-800 bg-whet-900">
      <div className="content-container py-8 small:py-10">
        <div className="grid grid-cols-2 small:grid-cols-4 gap-6 small:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center small:text-left border-l border-gold-500/30 small:pl-6 first:border-0 first:pl-0"
            >
              <p className="font-display text-xl small:text-2xl font-semibold text-gold-400 uppercase tracking-wide">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-whet-300 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
