const features = [
  {
    title: "Curated Excellence",
    description:
      "Every product is hand-selected by our merchandising team for quality, durability, and design.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Logistics",
    description:
      "Global fulfillment network with real-time tracking and priority shipping for business accounts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description:
      "Bank-grade encryption, multiple payment methods, and flexible invoicing for enterprise buyers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "Personal account managers and priority support channels for our valued enterprise clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

const Features = () => {
  return (
    <section className="bg-white py-20 small:py-28">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Why Whetstonez
          </p>
          <h2 className="font-display text-3xl small:text-4xl text-whet-900 font-semibold">
            Built for Business. Designed for Excellence.
          </h2>
          <p className="mt-4 text-whet-500 text-base leading-relaxed">
            Enterprise-grade commerce infrastructure meets premium product
            curation — everything your organization needs to procure with
            confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 border border-whet-100 bg-white hover:border-gold-300 hover:shadow-lg hover:shadow-whet-900/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-whet-900 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-whet-950 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-whet-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-whet-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
