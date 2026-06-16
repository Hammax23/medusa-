"use client"

import { useState } from "react"
import { useLanguage } from "@lib/context/language-context"

const NewsletterSection = () => {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-plant-600 via-plant-700 to-plant-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Floating Plants Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-10 text-6xl opacity-20">🌿</span>
        <span className="absolute top-20 right-20 text-5xl opacity-20">🌱</span>
        <span className="absolute bottom-10 left-1/4 text-4xl opacity-20">🍃</span>
        <span className="absolute bottom-20 right-1/3 text-5xl opacity-20">🌵</span>
      </div>

      <div className="content-container relative z-10">
        <div className="max-w-3xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl small:text-4xl font-bold text-white mb-4">
            {language === 'ar' ? 'انضم إلى مجتمعنا' : 'Join Our Community'}
          </h2>
          <p className="text-plant-100 text-lg mb-8 max-w-xl mx-auto">
            {language === 'ar' 
              ? 'اشترك في نشرتنا البريدية واحصل على نصائح حصرية للعناية بالنباتات وخصومات خاصة وإشعارات بوصول نباتات جديدة'
              : 'Subscribe to our newsletter for exclusive plant care tips, special discounts, and new arrival notifications'}
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-plant-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <p className="text-white font-semibold">
                  {language === 'ar' ? 'شكراً لاشتراكك!' : 'Thank you for subscribing!'}
                </p>
                <p className="text-plant-200 text-sm">
                  {language === 'ar' ? 'ستصلك رسالتنا قريباً' : 'You\'ll hear from us soon'}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col small:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                  className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-white text-plant-700 font-semibold rounded-xl hover:bg-plant-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>{language === 'ar' ? 'اشترك الآن' : 'Subscribe'}</span>
                <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-plant-200/70 text-xs mt-6">
            {language === 'ar' 
              ? 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'
              : 'We respect your privacy. You can unsubscribe at any time.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
