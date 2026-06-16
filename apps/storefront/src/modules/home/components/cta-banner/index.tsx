import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden bg-whet-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="content-container relative py-20 small:py-24 text-center">
        <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Enterprise Solutions
        </p>
        <h2 className="font-display text-3xl small:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight">
          Scale Your Procurement with Whetstonez
        </h2>
        <p className="mt-5 text-whet-300 text-base small:text-lg max-w-xl mx-auto">
          Volume pricing, custom catalogs, and dedicated account management for
          teams of any size.
        </p>
        <div className="mt-10 flex flex-col small:flex-row gap-4 justify-center">
          <LocalizedClientLink href="/store" className="btn-enterprise-primary">
            Browse Catalog
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/account"
            className="btn-enterprise-ghost-light"
          >
            Business Account
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
