"use client"

import { Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"

const EmptyCartMessage = () => {
  const { language } = useLanguage()

  return (
    <div className="py-16 px-4 flex flex-col justify-center items-center text-center" data-testid="empty-cart-message" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Empty Cart Icon */}
      <div className="w-24 h-24 bg-plant-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-plant-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>

      <Heading
        level="h2"
        className="font-display text-2xl font-bold text-plant-900 mb-3"
      >
        {language === 'ar' ? 'سلتك فارغة' : 'Your Cart is Empty'}
      </Heading>
      <Text className="text-plant-600 mb-8 max-w-md">
        {language === 'ar' 
          ? 'لم تضف أي نباتات إلى سلتك بعد. استكشف مجموعتنا الرائعة من النباتات!'
          : "You haven't added any plants to your cart yet. Explore our amazing collection of plants!"}
      </Text>
      <LocalizedClientLink 
        href="/store"
        className="inline-flex items-center gap-2 px-8 py-4 bg-plant-600 hover:bg-plant-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-plant-600/30"
      >
        <span>{language === 'ar' ? 'استكشف النباتات' : 'Explore Plants'}</span>
        <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage
