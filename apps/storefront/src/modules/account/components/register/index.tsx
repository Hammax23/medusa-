"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"
import { useLanguage } from "@lib/context/language-context"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup as (state: string | null, formData: FormData) => Promise<string | null>, null as string | null)
  const { language } = useLanguage()

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Logo */}
      <div className="w-16 h-16 bg-gradient-to-br from-plant-500 to-plant-700 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.62 13.38 2.5 12 2.5S9.5 3.62 9.5 5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z"/>
        </svg>
      </div>

      <h1 className="font-display text-2xl font-bold text-plant-900 mb-3">
        {language === 'ar' ? 'إنشاء حساب جديد' : 'Create Account'}
      </h1>
      <p className="text-center text-sm text-plant-600 mb-6 leading-relaxed">
        {language === 'ar' 
          ? 'سجل حساباً جديداً لإدارة طلباتك وعناوينك بسهولة'
          : 'Register to manage your orders and addresses easily'}
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-3">
          <Input
            label={language === 'ar' ? 'الاسم الأول' : 'First name'}
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label={language === 'ar' ? 'اسم العائلة' : 'Last name'}
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label={language === 'ar' ? 'رقم الهاتف' : 'Phone'}
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label={language === 'ar' ? 'كلمة المرور' : 'Password'}
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-plant-500 text-xs mt-6">
          {language === 'ar' ? 'بإنشاء حساب، فإنك توافق على ' : 'By creating an account, you agree to our '}
          <LocalizedClientLink
            href="/privacy"
            className="text-plant-700 hover:text-plant-500"
          >
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </LocalizedClientLink>
          {language === 'ar' ? ' و' : ' and '}
          <LocalizedClientLink
            href="/terms"
            className="text-plant-700 hover:text-plant-500"
          >
            {language === 'ar' ? 'الشروط والأحكام' : 'Terms of Use'}
          </LocalizedClientLink>
        </span>
        <SubmitButton className="w-full mt-6 bg-plant-600 hover:bg-plant-500" data-testid="register-button">
          {language === 'ar' ? 'إنشاء حساب' : 'Create Account'}
        </SubmitButton>
      </form>
      <span className="text-center text-plant-600 text-sm mt-6">
        {language === 'ar' ? 'لديك حساب بالفعل؟ ' : 'Already a member? '}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-plant-700 font-semibold hover:text-plant-500 transition-colors"
        >
          {language === 'ar' ? 'تسجيل الدخول' : 'Sign in'}
        </button>
      </span>
    </div>
  )
}

export default Register
