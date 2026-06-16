"use client"

import { useLanguage } from "@lib/context/language-context"

const TestimonialsSection = () => {
  const { language } = useLanguage()

  const testimonials = [
    {
      id: 1,
      nameEn: "Sarah Al-Rashid",
      nameAr: "سارة الراشد",
      locationEn: "Riyadh",
      locationAr: "الرياض",
      avatarBg: "bg-pink-500",
      rating: 5,
      textEn: "Amazing quality plants! My monstera arrived in perfect condition and has been thriving for months. The care guide they included was so helpful.",
      textAr: "نباتات رائعة الجودة! وصلت المونستيرا في حالة ممتازة وتزدهر منذ أشهر. دليل العناية المرفق كان مفيداً جداً.",
    },
    {
      id: 2,
      nameEn: "Mohammed Al-Faisal",
      nameAr: "محمد الفيصل",
      locationEn: "Jeddah",
      locationAr: "جدة",
      avatarBg: "bg-blue-500",
      rating: 5,
      textEn: "Best plant shopping experience in Saudi Arabia. Fast delivery, beautiful packaging, and the plants are always fresh. Highly recommended!",
      textAr: "أفضل تجربة تسوق نباتات في السعودية. توصيل سريع، تغليف جميل، والنباتات دائماً طازجة. أنصح بشدة!",
    },
    {
      id: 3,
      nameEn: "Fatima Al-Harbi",
      nameAr: "فاطمة الحربي",
      locationEn: "Dammam",
      locationAr: "الدمام",
      avatarBg: "bg-purple-500",
      rating: 5,
      textEn: "I've ordered multiple times and every delivery has been perfect. Their customer service is excellent and they really know their plants!",
      textAr: "طلبت عدة مرات وكل توصيلة كانت مثالية. خدمة العملاء ممتازة وهم حقاً يفهمون النباتات!",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <span className="inline-block px-4 py-1.5 bg-plant-100 text-plant-700 text-sm font-semibold rounded-full mb-4">
            {language === 'ar' ? 'آراء العملاء' : 'Customer Reviews'}
          </span>
          <h2 className="font-display text-3xl small:text-4xl font-bold text-plant-900 mb-4">
            {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
          </h2>
          <p className="text-plant-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'آلاف العملاء السعداء يثقون بنا لتوفير أفضل النباتات'
              : 'Thousands of happy customers trust us for the best plants'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 small:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-plant-50 rounded-2xl p-8 relative"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-plant-200">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-plant-700 leading-relaxed mb-6">
                "{language === 'ar' ? testimonial.textAr : testimonial.textEn}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {(language === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-plant-900">
                    {language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                  </p>
                  <p className="text-sm text-plant-500">
                    {language === 'ar' ? testimonial.locationAr : testimonial.locationEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-plant-100">
          <div className="flex items-center gap-3 text-plant-600">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">4.9/5</span>
            <span className="text-sm">{language === 'ar' ? 'تقييم العملاء' : 'Customer Rating'}</span>
          </div>
          <div className="h-8 w-px bg-plant-200" />
          <div className="flex items-center gap-2 text-plant-600">
            <svg className="w-6 h-6 text-plant-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{language === 'ar' ? 'متجر موثوق' : 'Verified Store'}</span>
          </div>
          <div className="h-8 w-px bg-plant-200" />
          <div className="flex items-center gap-2 text-plant-600">
            <svg className="w-6 h-6 text-plant-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium">{language === 'ar' ? 'دفع آمن' : 'Secure Payments'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
