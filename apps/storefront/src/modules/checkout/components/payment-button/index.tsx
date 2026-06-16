"use client"

import { isManual, isStripeLike, isMoyasar } from "@lib/constants"
import { placeOrder } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@modules/common/components/ui"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import ErrorMessage from "../error-message"

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  "data-testid": string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    (cart.shipping_methods?.length ?? 0) < 1

  const paymentSession = cart.payment_collection?.payment_sessions?.[0]
  const providerId = paymentSession?.provider_id

  // Debug logging
  console.log("PaymentButton Debug:", {
    providerId,
    hasPaymentCollection: !!cart.payment_collection,
    sessionsCount: cart.payment_collection?.payment_sessions?.length,
    notReady,
    isMoyasar: isMoyasar(providerId),
    isManual: isManual(providerId),
    isStripeLike: isStripeLike(providerId)
  })

  // Check for Moyasar first (including any moyasar provider)
  if (providerId?.includes("moyasar")) {
    return (
      <MoyasarPaymentButton notReady={notReady} cart={cart} data-testid={dataTestId} />
    )
  }

  switch (true) {
    case isStripeLike(providerId):
      return (
        <StripePaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case isManual(providerId):
      return (
        <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
      )
    default:
      // Fallback: if there's any payment session, use manual-like button
      if (paymentSession) {
        return (
          <MoyasarPaymentButton notReady={notReady} cart={cart} data-testid={dataTestId} />
        )
      }
      return <Button disabled>Select a payment method</Button>
  }
}

const StripePaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("card")

  const session = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === "pending"
  )

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session?.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address?.first_name +
              " " +
              cart.billing_address?.last_name,
            address: {
              city: cart.billing_address?.city ?? undefined,
              country: cart.billing_address?.country_code ?? undefined,
              line1: cart.billing_address?.address_1 ?? undefined,
              line2: cart.billing_address?.address_2 ?? undefined,
              postal_code: cart.billing_address?.postal_code ?? undefined,
              state: cart.billing_address?.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address?.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message || null)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="stripe-payment-error-message"
      />
    </>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size="large"
        data-testid="submit-order-button"
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="manual-payment-error-message"
      />
    </>
  )
}

const MoyasarPaymentButton = ({ 
  notReady,
  cart,
  "data-testid": dataTestId,
}: { 
  notReady: boolean
  cart: HttpTypes.StoreCart
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePayment = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (submitting) return
    setSubmitting(true)
    setErrorMessage(null)

    const cartId = cart.id
    console.log("MoyasarPaymentButton: Place Order clicked, cartId:", cartId)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
      const publishableKey = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000)

      const response = await fetch(`${backendUrl}/store/carts/${cartId}/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": publishableKey,
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = await response.json()
      console.log("MoyasarPaymentButton: Response:", response.status, JSON.stringify(data).substring(0, 500))

      if (!response.ok) {
        throw new Error(data?.message || `Order failed: ${response.status}`)
      }

      if (data?.type === "order") {
        console.log("MoyasarPaymentButton: Order created!", data.order?.id)
        const countryCode = data.order?.shipping_address?.country_code?.toLowerCase() || "sa"
        window.location.href = `/${countryCode}/order/${data.order.id}/confirmed`
      } else {
        console.log("MoyasarPaymentButton: Unexpected response type:", data?.type)
        throw new Error(data?.message || "Order could not be completed.")
      }
    } catch (err: any) {
      console.error("MoyasarPaymentButton: Error:", err)
      if (err.name === "AbortError") {
        setErrorMessage("Request timed out. Please try again.")
      } else {
        setErrorMessage(err.message || "Failed to place order.")
      }
      setSubmitting(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        disabled={submitting}
        onClick={handlePayment}
        className="w-full h-12 px-6 text-base inline-flex gap-2 items-center justify-center font-medium transition-colors bg-gold-500 text-whet-950 hover:bg-gold-400 shadow-sm shadow-gold-500/20 disabled:opacity-50 rounded-lg"
        data-testid={dataTestId}
      >
        {submitting ? "Processing..." : "Place order"}
      </button>
      {errorMessage && (
        <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  )
}

export default PaymentButton
