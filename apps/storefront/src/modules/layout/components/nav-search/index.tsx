"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@lib/context/language-context"

const NavSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()
  const { t, language, dir } = useLanguage()

  const quickSearchTerms = [
    { key: "search.indoorPlants", en: "Indoor plants", ar: "نباتات داخلية" },
    { key: "search.cactus", en: "Cactus", ar: "صبار" },
    { key: "search.pots", en: "Pots", ar: "أواني" },
    { key: "search.soil", en: "Soil", ar: "تربة" },
    { key: "search.fertilizer", en: "Fertilizer", ar: "أسمدة" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/store?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
      setQuery("")
    }
  }

  return (
    <div className="relative">
      {/* Search Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-plant-700 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all"
        aria-label={t("nav.search")}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-full mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-plant-100 z-50 overflow-hidden`}>
            <form onSubmit={handleSearch} className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className={`w-full ${language === 'ar' ? 'pl-12 pr-4 text-right' : 'pr-12 pl-4 text-left'} py-3 bg-plant-50 border border-plant-200 rounded-lg text-plant-900 placeholder-plant-400 focus:outline-none focus:ring-2 focus:ring-plant-500 focus:border-transparent`}
                  autoFocus
                  dir={dir}
                />
                <button
                  type="submit"
                  className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 p-2 bg-plant-600 text-white rounded-lg hover:bg-plant-500 transition-colors`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Quick Links */}
            <div className="px-4 pb-4">
              <p className={`text-xs text-plant-500 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t("search.quickSearch")}
              </p>
              <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
                {quickSearchTerms.map((term) => (
                  <button
                    key={term.key}
                    onClick={() => {
                      const searchTerm = language === 'ar' ? term.ar : term.en
                      setQuery(searchTerm)
                      router.push(`/store?q=${encodeURIComponent(searchTerm)}`)
                      setIsOpen(false)
                    }}
                    className="px-3 py-1.5 text-xs bg-plant-50 text-plant-700 rounded-full hover:bg-plant-100 transition-colors"
                  >
                    {language === 'ar' ? term.ar : term.en}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NavSearch
