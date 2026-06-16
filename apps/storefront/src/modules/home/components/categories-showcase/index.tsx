"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"

const CategoriesShowcase = () => {
  const { language } = useLanguage()

  const categories = [
    {
      id: 1,
      nameEn: "Indoor Plants",
      nameAr: "نباتات داخلية",
      descEn: "Perfect for home & office",
      descAr: "مثالية للمنزل والمكتب",
      href: "/categories/indoor-plants",
      image: "🌿",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      count: "150+",
    },
    {
      id: 2,
      nameEn: "Outdoor Plants",
      nameAr: "نباتات خارجية",
      descEn: "For gardens & balconies",
      descAr: "للحدائق والبلكونات",
      href: "/categories/outdoor-plants",
      image: "🌳",
      color: "from-lime-400 to-green-600",
      bgColor: "bg-gradient-to-br from-lime-50 to-green-100",
      count: "80+",
    },
    {
      id: 3,
      nameEn: "Cacti & Succulents",
      nameAr: "صبار وعصاريات",
      descEn: "Low maintenance beauty",
      descAr: "جمال سهل العناية",
      href: "/categories/succulents",
      image: "🌵",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      count: "60+",
    },
    {
      id: 4,
      nameEn: "Flowering Plants",
      nameAr: "نباتات مزهرة",
      descEn: "Add color to your space",
      descAr: "أضف الألوان لمساحتك",
      href: "/categories/flowering-plants",
      image: "🌸",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      count: "45+",
    },
    {
      id: 5,
      nameEn: "Pots & Planters",
      nameAr: "أواني وأحواض",
      descEn: "Stylish containers",
      descAr: "حاويات أنيقة",
      href: "/categories/pots",
      image: "🪴",
      color: "from-stone-400 to-stone-600",
      bgColor: "bg-gradient-to-br from-stone-50 to-stone-200",
      count: "200+",
    },
    {
      id: 6,
      nameEn: "Care Essentials",
      nameAr: "مستلزمات العناية",
      descEn: "Tools & fertilizers",
      descAr: "أدوات وأسمدة",
      href: "/categories/supplies",
      image: "🧴",
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
      count: "100+",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <span className="inline-block px-4 py-1.5 bg-plant-100 text-plant-700 text-sm font-semibold rounded-full mb-4">
            {language === 'ar' ? 'تصفح الأقسام' : 'Browse Categories'}
          </span>
          <h2 className="font-display text-3xl small:text-4xl font-bold text-plant-900 mb-4">
            {language === 'ar' ? 'اكتشف مجموعتنا' : 'Explore Our Collection'}
          </h2>
          <p className="text-plant-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'مجموعة متنوعة من النباتات والمستلزمات لتحويل مساحتك إلى واحة خضراء'
              : 'A diverse collection of plants and supplies to transform your space into a green oasis'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 small:grid-cols-3 gap-4 small:gap-6">
          {categories.map((category) => (
            <LocalizedClientLink
              key={category.id}
              href={category.href}
              className={`group relative overflow-hidden rounded-2xl ${category.bgColor} p-6 small:p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-8 -bottom-8 text-[120px] small:text-[180px] leading-none">
                  {category.image}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="text-4xl small:text-5xl mb-4">{category.image}</div>
                <h3 className="font-display text-lg small:text-xl font-bold text-plant-900 mb-1">
                  {language === 'ar' ? category.nameAr : category.nameEn}
                </h3>
                <p className="text-sm text-plant-600 mb-3">
                  {language === 'ar' ? category.descAr : category.descEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-plant-500">
                    {category.count} {language === 'ar' ? 'منتج' : 'Products'}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <svg className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 px-8 py-4 bg-plant-600 hover:bg-plant-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-plant-600/30 hover:shadow-plant-500/40"
          >
            <span>{language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}</span>
            <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default CategoriesShowcase
