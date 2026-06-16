"use client"

import { useLanguage } from "@lib/context/language-context"

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        className="flex items-center gap-2 px-3 py-2 bg-plant-50 hover:bg-plant-100 border border-plant-200 rounded-lg transition-all group"
        aria-label="Toggle Language"
      >
        {/* Globe Icon */}
        <svg 
          className="w-4 h-4 text-plant-600 group-hover:text-plant-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
          />
        </svg>
        
        {/* Language Labels */}
        <div className="flex items-center gap-1">
          <span 
            className={`text-xs font-semibold transition-colors ${
              language === "en" 
                ? "text-plant-700" 
                : "text-plant-400"
            }`}
          >
            EN
          </span>
          <span className="text-plant-300">|</span>
          <span 
            className={`text-xs font-semibold transition-colors ${
              language === "ar" 
                ? "text-plant-700" 
                : "text-plant-400"
            }`}
          >
            AR
          </span>
        </div>
      </button>
    </div>
  )
}

export default LanguageToggle
