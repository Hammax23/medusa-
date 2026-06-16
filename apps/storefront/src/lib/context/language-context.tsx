"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ar"

type Translations = {
  [key: string]: {
    en: string
    ar: string
  }
}

// All translations for the website
export const translations: Translations = {
  // Navbar
  "nav.categories": { en: "Categories", ar: "الأقسام" },
  "nav.allPlants": { en: "All Plants", ar: "جميع النباتات" },
  "nav.offers": { en: "Offers", ar: "العروض" },
  "nav.careGuide": { en: "Care Guide", ar: "دليل العناية" },
  "nav.myAccount": { en: "My Account", ar: "حسابي" },
  "nav.search": { en: "Search", ar: "بحث" },
  "nav.menu": { en: "Menu", ar: "القائمة" },
  
  // Announcement Bar
  "announce.freeShipping": { en: "Free shipping on orders over 200 SAR", ar: "توصيل مجاني للطلبات فوق 200 ريال" },
  "announce.freshGuarantee": { en: "Fresh plant arrival guarantee", ar: "ضمان وصول النباتات طازجة" },
  "announce.support": { en: "24/7 Support", ar: "دعم فني على مدار الساعة" },
  
  // Categories
  "cat.indoor": { en: "Indoor Plants", ar: "نباتات داخلية" },
  "cat.indoorDesc": { en: "Perfect for home and office", ar: "مثالية للمنزل والمكتب" },
  "cat.outdoor": { en: "Outdoor Plants", ar: "نباتات خارجية" },
  "cat.outdoorDesc": { en: "For gardens and balconies", ar: "للحدائق والبلكونات" },
  "cat.succulents": { en: "Cacti & Succulents", ar: "صبار وعصاريات" },
  "cat.succulentsDesc": { en: "Easy care and beautiful", ar: "سهلة العناية وجميلة" },
  "cat.supplies": { en: "Supplies", ar: "مستلزمات" },
  "cat.suppliesDesc": { en: "Everything you need", ar: "كل ما تحتاجه للعناية" },
  
  // Subcategories
  "subcat.shadePlants": { en: "Shade Plants", ar: "نباتات الظل" },
  "subcat.hangingPlants": { en: "Hanging Plants", ar: "نباتات معلقة" },
  "subcat.airPurifying": { en: "Air Purifying", ar: "نباتات تنقية الهواء" },
  "subcat.smallPlants": { en: "Small Plants", ar: "نباتات صغيرة" },
  "subcat.ornamentalTrees": { en: "Ornamental Trees", ar: "أشجار الزينة" },
  "subcat.shrubs": { en: "Shrubs", ar: "شجيرات" },
  "subcat.climbingPlants": { en: "Climbing Plants", ar: "نباتات متسلقة" },
  "subcat.floweringPlants": { en: "Flowering Plants", ar: "نباتات مزهرة" },
  "subcat.cactus": { en: "Cactus", ar: "صبار" },
  "subcat.succulentPlants": { en: "Succulents", ar: "عصاريات" },
  "subcat.succulentSets": { en: "Succulent Sets", ar: "مجموعات" },
  "subcat.pots": { en: "Pots & Planters", ar: "أواني وأحواض" },
  "subcat.soilFertilizer": { en: "Soil & Fertilizer", ar: "تربة وأسمدة" },
  "subcat.tools": { en: "Gardening Tools", ar: "أدوات الزراعة" },
  "subcat.watering": { en: "Watering", ar: "ري وسقاية" },
  
  // Mega Menu
  "mega.browseCategories": { en: "Browse Categories", ar: "تصفح الأقسام" },
  "mega.viewAll": { en: "View All", ar: "عرض الكل" },
  "mega.newArrivals": { en: "New Arrivals", ar: "وصل حديثاً" },
  "mega.newArrivalsDesc": { en: "New collection of rare plants", ar: "تشكيلة جديدة من النباتات النادرة" },
  "mega.shopNow": { en: "Shop Now", ar: "تسوق الآن" },
  
  // Search
  "search.placeholder": { en: "Search for plants, pots, tools...", ar: "ابحث عن نباتات، أواني، أدوات..." },
  "search.quickSearch": { en: "Quick Search", ar: "بحث سريع" },
  "search.indoorPlants": { en: "Indoor plants", ar: "نباتات داخلية" },
  "search.cactus": { en: "Cactus", ar: "صبار" },
  "search.pots": { en: "Pots", ar: "أواني" },
  "search.soil": { en: "Soil", ar: "تربة" },
  "search.fertilizer": { en: "Fertilizer", ar: "أسمدة" },
  
  // Cart
  "cart.title": { en: "Shopping Cart", ar: "سلة التسوق" },
  "cart.items": { en: "items", ar: "منتجات" },
  "cart.quantity": { en: "Quantity", ar: "الكمية" },
  "cart.remove": { en: "Remove", ar: "إزالة" },
  "cart.subtotal": { en: "Subtotal", ar: "المجموع الفرعي" },
  "cart.excludingTax": { en: "(excl. taxes)", ar: "(بدون الضريبة)" },
  "cart.viewCart": { en: "View Cart", ar: "عرض السلة" },
  "cart.empty": { en: "Your cart is empty", ar: "سلة التسوق فارغة" },
  "cart.startShopping": { en: "Start adding your favorite plants", ar: "ابدأ بإضافة نباتاتك المفضلة" },
  "cart.browsePlants": { en: "Browse Plants", ar: "تصفح النباتات" },
  
  // Side Menu
  "side.home": { en: "Home", ar: "الرئيسية" },
  "side.allPlants": { en: "All Plants", ar: "جميع النباتات" },
  "side.indoorPlants": { en: "Indoor Plants", ar: "نباتات داخلية" },
  "side.outdoorPlants": { en: "Outdoor Plants", ar: "نباتات خارجية" },
  "side.succulents": { en: "Cacti & Succulents", ar: "صبار وعصاريات" },
  "side.supplies": { en: "Supplies", ar: "مستلزمات" },
  "side.offers": { en: "Offers", ar: "العروض" },
  "side.myAccount": { en: "My Account", ar: "حسابي" },
  "side.cart": { en: "Shopping Cart", ar: "سلة التسوق" },
  
  // Footer
  "footer.copyright": { en: "Bayt Al-Nabat - House of Plants", ar: "بيت النبات" },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update document direction
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
