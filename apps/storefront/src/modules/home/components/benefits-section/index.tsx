"use client"

import { useLanguage } from "@lib/context/language-context"

const BenefitsSection = () => {
  const { language } = useLanguage()

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      titleEn: "Free Delivery",
      titleAr: "توصيل مجاني",
      descEn: "Free shipping on all orders over 200 SAR across Saudi Arabia",
      descAr: "شحن مجاني لجميع الطلبات فوق 200 ريال في جميع أنحاء المملكة",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titleEn: "Fresh Guarantee",
      titleAr: "ضمان الطازجية",
      descEn: "100% guarantee that your plants arrive fresh and healthy",
      descAr: "ضمان 100% وصول نباتاتك طازجة وصحية",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      titleEn: "Expert Support",
      titleAr: "دعم متخصص",
      descEn: "24/7 plant care advice from our expert horticulturists",
      descAr: "نصائح العناية بالنباتات على مدار الساعة من خبرائنا",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      titleEn: "Easy Returns",
      titleAr: "إرجاع سهل",
      descEn: "7-day replacement policy if plants don't meet expectations",
      descAr: "سياسة استبدال 7 أيام إذا لم تلب النباتات التوقعات",
    },
  ]

  return (
    <section className="py-20 bg-plant-50">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <span className="inline-block px-4 py-1.5 bg-white text-plant-700 text-sm font-semibold rounded-full mb-4 shadow-sm">
            {language === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us?'}
          </span>
          <h2 className="font-display text-3xl small:text-4xl font-bold text-plant-900 mb-4">
            {language === 'ar' ? 'تجربة تسوق استثنائية' : 'An Exceptional Shopping Experience'}
          </h2>
          <p className="text-plant-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نحن نهتم بكل تفصيلة لنضمن لك تجربة تسوق مميزة ونباتات صحية تصل إلى باب منزلك'
              : 'We care about every detail to ensure you have a unique shopping experience with healthy plants delivered to your door'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <div className="w-16 h-16 bg-plant-100 rounded-2xl flex items-center justify-center text-plant-600 mb-6 group-hover:bg-plant-500 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-plant-900 mb-3">
                {language === 'ar' ? benefit.titleAr : benefit.titleEn}
              </h3>
              <p className="text-plant-600 text-sm leading-relaxed">
                {language === 'ar' ? benefit.descAr : benefit.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 small:grid-cols-4 gap-8 pt-16 border-t border-plant-200">
          {[
            { valueEn: "10K+", valueAr: "+10 آلاف", labelEn: "Happy Customers", labelAr: "عميل سعيد" },
            { valueEn: "500+", valueAr: "+500", labelEn: "Plant Varieties", labelAr: "نوع نبات" },
            { valueEn: "50+", valueAr: "+50", labelEn: "Cities Covered", labelAr: "مدينة" },
            { valueEn: "10+", valueAr: "+10", labelEn: "Years Experience", labelAr: "سنوات خبرة" },
          ].map((stat, index) => (
            <div key={index} className="text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <p className="font-display text-4xl font-bold text-plant-600 mb-2">
                {language === 'ar' ? stat.valueAr : stat.valueEn}
              </p>
              <p className="text-plant-500 text-sm font-medium">
                {language === 'ar' ? stat.labelAr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
