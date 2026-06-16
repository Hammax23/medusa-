"use client"

import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"
import { useLanguage } from "@lib/context/language-context"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)
  const { language } = useLanguage()

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Logo */}
      <div className="w-16 h-16 bg-gradient-to-br from-plant-500 to-plant-700 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.62 13.38 2.5 12 2.5S9.5 3.62 9.5 5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z"/>
        </svg>
      </div>

      <h1 className="font-display text-2xl font-bold text-plant-900 mb-3">
        {language === 'ar' ? 'مرحباً بعودتك' : 'Welcome Back'}
      </h1>
      <p className="text-center text-sm text-plant-600 mb-8 leading-relaxed">
        {language === 'ar' 
          ? 'سجل دخولك لإدارة طلباتك وعناوينك'
          : 'Sign in to manage your orders and addresses'}
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label={language === 'ar' ? 'كلمة المرور' : 'Password'}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6 bg-plant-600 hover:bg-plant-500">
          {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
        </SubmitButton>
      </form>
      <span className="text-center text-plant-600 text-sm mt-6">
        {language === 'ar' ? 'ليس لديك حساب؟ ' : 'Not a member? '}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-plant-700 font-semibold hover:text-plant-500 transition-colors"
          data-testid="register-button"
        >
          {language === 'ar' ? 'انضم إلينا' : 'Join us'}
        </button>
      </span>
    </div>
  )
}

export default Login
