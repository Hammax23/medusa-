"use client"

import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"
import { useLanguage } from "@lib/context/language-context"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  const { language } = useLanguage()

  return (
    <div className="flex-1" data-testid="account-page">
      {/* Header */}
      <div className="bg-gradient-to-br from-plant-700 via-plant-800 to-plant-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="content-container py-12 small:py-14 relative z-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <p className="inline-flex items-center gap-2 px-3 py-1 bg-plant-600/50 rounded-full text-plant-200 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-plant-400 rounded-full"></span>
            {language === 'ar' ? 'حسابي' : 'My Account'}
          </p>
          <h1 className="font-display text-3xl small:text-4xl font-bold text-white">
            {language === 'ar' ? 'مرحباً بك' : 'Welcome Back'}
          </h1>
          <p className="mt-2 text-plant-200 text-sm">
            {language === 'ar' ? 'إدارة طلباتك وعناوينك وملفك الشخصي' : 'Manage your orders, addresses, and profile'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container max-w-5xl mx-auto py-12 small:py-16">
        <div className="grid grid-cols-1 small:grid-cols-[260px_1fr] gap-10">
          <div className="bg-white rounded-2xl shadow-sm border border-plant-100 p-4 h-fit">
            {customer && <AccountNav customer={customer} />}
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-plant-100 p-6 small:p-8 flex-1">
            {children}
          </div>
        </div>

        {/* Support Card */}
        <div className="mt-12 bg-plant-50 rounded-2xl p-6 small:p-8 flex flex-col small:flex-row items-start small:items-center justify-between gap-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div>
            <h3 className="font-display text-xl font-semibold text-plant-900 mb-2">
              {language === 'ar' ? 'تحتاج مساعدة؟' : 'Need assistance?'}
            </h3>
            <p className="text-sm text-plant-600 leading-relaxed max-w-md">
              {language === 'ar' 
                ? 'فريق الدعم لدينا متاح للمساعدة في الطلبات والأسئلة'
                : 'Our support team is available to help with orders and questions'}
            </p>
          </div>
          <LocalizedClientLink
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-plant-600 hover:bg-plant-500 text-white font-medium rounded-xl transition-colors"
          >
            <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Support'}</span>
            <svg className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
