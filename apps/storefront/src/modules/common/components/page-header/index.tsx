"use client"

import { clx } from "@modules/common/components/ui"
import { useLanguage } from "@lib/context/language-context"

type PageHeaderProps = {
  label?: string
  labelAr?: string
  title: string
  titleAr?: string
  description?: string
  descriptionAr?: string
  className?: string
  children?: React.ReactNode
}

const PageHeader = ({
  label,
  labelAr,
  title,
  titleAr,
  description,
  descriptionAr,
  className,
  children,
}: PageHeaderProps) => {
  const { language } = useLanguage()

  return (
    <div className={clx("bg-gradient-to-br from-plant-700 via-plant-800 to-plant-900 relative overflow-hidden", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="content-container py-12 small:py-16 relative z-10">
        <div 
          className="flex flex-col small:flex-row small:items-end small:justify-between gap-6"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="max-w-2xl">
            {(label || labelAr) && (
              <p className="inline-flex items-center gap-2 px-3 py-1 bg-plant-600/50 rounded-full text-plant-200 text-sm font-medium mb-4">
                <span className="w-1.5 h-1.5 bg-plant-400 rounded-full"></span>
                {language === 'ar' && labelAr ? labelAr : label}
              </p>
            )}
            <h1 className="font-display text-3xl small:text-4xl font-bold text-white tracking-tight">
              {language === 'ar' && titleAr ? titleAr : title}
            </h1>
            {(description || descriptionAr) && (
              <p className="mt-4 text-plant-200 text-base leading-relaxed">
                {language === 'ar' && descriptionAr ? descriptionAr : description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
