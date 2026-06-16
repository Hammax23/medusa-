"use client"

import { useEffect, useRef, useState } from "react"
import { clx } from "@modules/common/components/ui"
import MedusaRadio from "@modules/common/components/radio"
import { CreditCard } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"

declare global {
  interface Window {
    Moyasar?: {
      init: (config: MoyasarConfig) => void
    }
  }
}

type MoyasarConfig = {
  element: string
  amount: number
  currency: string
  description: string
  publishable_api_key: string
  callback_url: string
  methods: string[]
  on_completed?: (payment: MoyasarPayment) => void
  on_failure?: (error: unknown) => void
}

type MoyasarPayment = {
  id: string
  status: string
  amount: number
  currency: string
}

type MoyasarPaymentProps = {
  cart: HttpTypes.StoreCart
  publishableKey: string
  isSelected: boolean
  onSelect: () => void
  onPaymentComplete?: (payment: MoyasarPayment) => void
}

const MoyasarPayment = ({
  cart,
  publishableKey,
  isSelected,
  onSelect,
  onPaymentComplete,
}: MoyasarPaymentProps) => {
  const moyasarRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get cart total directly - cart.total should be available
  const cartTotal = (cart as any).total || 
                    ((cart as any).item_subtotal || 0) + 
                    ((cart as any).shipping_subtotal || 0) + 
                    ((cart as any).tax_total || 0) || 
                    100
  
  console.log("MoyasarPayment - cartTotal:", cartTotal, "cart.total:", (cart as any).total)

  useEffect(() => {
    if (!isSelected || !publishableKey || !cartTotal) return

    // Load Moyasar script
    const existingScript = document.querySelector('script[src*="moyasar"]')
    if (existingScript) {
      // Script already loaded, just reinitialize
      if (window.Moyasar) {
        setIsLoaded(true)
        initMoyasar()
      }
      return
    }

    const script = document.createElement("script")
    script.src = "https://cdn.moyasar.com/mpf/1.14.0/moyasar.js"
    script.async = true

    const styleLink = document.createElement("link")
    styleLink.rel = "stylesheet"
    styleLink.href = "https://cdn.moyasar.com/mpf/1.14.0/moyasar.css"

    script.onload = () => {
      setIsLoaded(true)
      initMoyasar()
    }

    script.onerror = () => {
      setError("Failed to load Moyasar payment form")
    }

    document.head.appendChild(styleLink)
    document.body.appendChild(script)

    return () => {
      // Don't remove script on unmount to allow reuse
    }
  }, [isSelected, publishableKey, cartTotal])

  const initMoyasar = () => {
    if (!window.Moyasar || !moyasarRef.current) return

    // Clear any existing Moyasar form
    const existingForm = moyasarRef.current.querySelector('.moyasar-form')
    if (existingForm) {
      existingForm.innerHTML = ''
    }

    // Get the current path including country code (e.g., /sa/checkout)
    const currentPath = window.location.pathname
    const callbackUrl = `${window.location.origin}${currentPath}?step=payment&payment_status=success`

    // Convert SAR to halalas (1 SAR = 100 halalas)
    // cart.total is in SAR, Moyasar expects halalas
    const amountInHalalas = Math.max(Math.round(cartTotal * 100), 100)
    
    console.log("Moyasar Init - Amount (halalas):", amountInHalalas, "Cart Total (SAR):", cartTotal)
    
    window.Moyasar.init({
      element: ".moyasar-form",
      amount: amountInHalalas,
      currency: cart.currency_code?.toUpperCase() || "SAR",
      description: `Order payment for cart ${cart.id}`,
      publishable_api_key: publishableKey,
      callback_url: callbackUrl,
      methods: ["creditcard", "stcpay"],
      on_completed: (payment) => {
        if (onPaymentComplete) {
          onPaymentComplete(payment)
        }
      },
      on_failure: (err) => {
        setError("Payment failed. Please try again.")
        console.error("Moyasar payment error:", err)
      },
    })
  }

  return (
    <div>
      <div
        onClick={onSelect}
        className={clx(
          "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-lg px-6 mb-2 hover:shadow-md transition-all",
          {
            "border-plant-500 bg-plant-50": isSelected,
            "border-gray-200": !isSelected,
          }
        )}
      >
        <div className="flex items-center gap-x-4">
          <MedusaRadio checked={isSelected} />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-plant-500 to-plant-700 rounded-lg flex items-center justify-center">
              <CreditCard className="text-white w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-medium text-plant-900">Moyasar</span>
              <p className="text-xs text-plant-600">mada, Visa, Mastercard, STC Pay</p>
            </div>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          <div ref={moyasarRef} className="moyasar-form"></div>
          {!isLoaded && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-plant-600"></div>
              <span className="ml-3 text-plant-600">Loading payment form...</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MoyasarPayment
