"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"

const Hero = () => {
  const { t, language } = useLanguage()

  const highlights = language === 'ar' ? [
    "توصيل مجاني للطلبات فوق 200 ريال",
    "ضمان وصول النباتات طازجة 100%",
    "دعم فني متخصص على مدار الساعة",
  ] : [
    "Free delivery on orders over 200 SAR",
    "100% Fresh plant arrival guarantee",
    "24/7 Expert plant care support",
  ]

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/cover.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="content-container relative z-10 py-20">
        <div className="max-w-2xl" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-plant-500/20 backdrop-blur-sm border border-plant-400/30 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-plant-400 animate-pulse" />
            <span className="text-plant-300 text-sm font-medium">
              {language === 'ar' ? 'متجر النباتات الأول في السعودية' : 'Saudi Arabia\'s Premier Plant Store'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl small:text-5xl large:text-6xl font-bold text-white leading-tight">
            {language === 'ar' ? (
              <>
                <span className="block">بيت النبات</span>
                <span className="block text-plant-400 mt-2">حيث تزهر الحياة</span>
              </>
            ) : (
              <>
                <span className="block">Bayt Al-Nabat</span>
                <span className="block text-plant-400 mt-2">Where Life Blooms</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">
            {language === 'ar' 
              ? 'اكتشف مجموعتنا الفريدة من النباتات الداخلية والخارجية. نباتات طازجة، توصيل سريع، وخبرة في العناية بالنباتات منذ أكثر من 10 سنوات.'
              : 'Discover our unique collection of indoor and outdoor plants. Fresh plants, fast delivery, and over 10 years of plant care expertise.'}
          </p>

          {/* Highlights */}
          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-white/90"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-plant-500/30 rounded-full">
                  <svg
                    className="h-3.5 w-3.5 text-plant-400"
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
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col xsmall:flex-row gap-4">
            <LocalizedClientLink 
              href="/store" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-plant-500 hover:bg-plant-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-plant-500/30 hover:shadow-plant-400/40 hover:scale-105"
            >
              <span>{language === 'ar' ? 'تسوق الآن' : 'Shop Now'}</span>
              <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories/indoor-plants"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
            >
              {language === 'ar' ? 'استكشف الأقسام' : 'Explore Categories'}
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium uppercase tracking-wider">
            {language === 'ar' ? 'اكتشف المزيد' : 'Scroll to explore'}
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
