import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-whet-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-whet-800/40 via-whet-950 to-whet-950" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="content-container relative z-10 py-20 small:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 bg-gold-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Enterprise Commerce Platform
            </span>
          </div>

          <h1 className="font-display text-4xl small:text-6xl large:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
            Precision-Crafted
            <span className="block text-gold-400">Commerce</span>
            for Modern Enterprise
          </h1>

          <p className="mt-6 text-lg small:text-xl text-whet-300 leading-relaxed max-w-xl">
            Whetstonez Ecommerce delivers premium products, seamless procurement,
            and enterprise-grade reliability — sharpened for your business.
          </p>

          <div className="mt-10 flex flex-col xsmall:flex-row gap-4">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-whet-950 font-semibold text-sm tracking-wide uppercase hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-gold-500/20"
            >
              Shop Collection
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center px-8 py-4 border border-whet-600 text-white font-semibold text-sm tracking-wide uppercase hover:border-gold-400 hover:text-gold-400 transition-colors duration-200"
            >
              Explore Catalog
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
