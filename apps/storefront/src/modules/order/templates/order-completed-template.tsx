import { Heading } from "@modules/common/components/ui"
import { cookies as nextCookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"
import { HttpTypes } from "@medusajs/types"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default async function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const cookies = await nextCookies()

  const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true"

  return (
    <div className="py-12 min-h-[calc(100vh-64px)] bg-plant-50/50">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        
        {/* Success Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-plant-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-plant-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <Heading
            level="h1"
            className="flex flex-col gap-y-2 text-plant-900 text-3xl font-bold mb-2"
          >
            <span>🌿 Thank you!</span>
          </Heading>
          <p className="text-plant-600">Your order was placed successfully.</p>
        </div>

        <div
          className="flex flex-col gap-6 max-w-4xl h-full bg-white rounded-2xl shadow-sm border border-plant-100 w-full p-8"
          data-testid="order-complete-container"
        >
          <OrderDetails order={order} />
          <div className="border-t border-plant-100 pt-6">
            <Heading level="h2" className="text-xl font-bold text-plant-900 mb-4">
              Order Summary
            </Heading>
            <Items order={order} />
          </div>
          <CartTotals totals={order} />
          <div className="grid grid-cols-1 small:grid-cols-2 gap-6 border-t border-plant-100 pt-6">
            <ShippingDetails order={order} />
            <PaymentDetails order={order} />
          </div>
          <Help />
        </div>
      </div>
    </div>
  )
}
