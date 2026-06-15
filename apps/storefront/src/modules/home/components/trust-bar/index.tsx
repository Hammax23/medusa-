const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Premium Brands" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Expert Support" },
]

const TrustBar = () => {
  return (
    <section className="border-y border-whet-800 bg-whet-950">
      <div className="content-container py-10">
        <div className="grid grid-cols-2 small:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center small:text-left">
              <p className="font-display text-2xl small:text-3xl font-semibold text-gold-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-whet-300 tracking-wide uppercase">
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
