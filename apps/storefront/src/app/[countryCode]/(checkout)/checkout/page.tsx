import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import PaymentWrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Checkout",
}

// Force dynamic rendering to ensure fresh data on payment callbacks
export const dynamic = "force-dynamic"

type CheckoutProps = {
  params: Promise<{ countryCode: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Checkout({ params, searchParams }: CheckoutProps) {
  const { countryCode } = await params
  const queryParams = await searchParams
  const paymentStatus = queryParams?.payment_status
  const moyasarPaymentId = queryParams?.id
  
  // Force no-cache for payment callback to get fresh cart data
  const cart = await retrieveCart()

  if (!cart) {
    // If payment callback but cart not found, show not found
    // User should clear cookies and try again
    return notFound()
  }

  const customer = await retrieveCustomer()

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <PaymentWrapper cart={cart}>
        <CheckoutForm 
          cart={cart} 
          customer={customer} 
          paymentStatus={paymentStatus as string | undefined}
          moyasarPaymentId={moyasarPaymentId as string | undefined}
        />
      </PaymentWrapper>
      <CheckoutSummary cart={cart} />
    </div>
  )
}
