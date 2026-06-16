import React from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1" data-testid="account-page">
      <div className="enterprise-page-header">
        <div className="content-container py-12 small:py-14">
          <p className="enterprise-section-label text-gold-400 mb-2">
            Business Portal
          </p>
          <h1 className="font-display text-3xl small:text-4xl font-semibold text-white">
            My Account
          </h1>
          <p className="mt-2 text-whet-300 text-sm">
            Manage orders, addresses, and your enterprise profile.
          </p>
        </div>
      </div>
      <div className="content-container max-w-5xl mx-auto py-12 small:py-16">
        <div className="grid grid-cols-1 small:grid-cols-[260px_1fr] gap-10">
          <div className="enterprise-card p-4 h-fit">
            {customer && <AccountNav customer={customer} />}
          </div>
          <div className="enterprise-card-elevated p-6 small:p-8 flex-1">
            {children}
          </div>
        </div>
        <div className="mt-12 enterprise-card p-6 small:p-8 flex flex-col small:flex-row items-start small:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-whet-900 mb-2">
              Need assistance?
            </h3>
            <p className="text-sm text-whet-500 leading-relaxed max-w-md">
              Our enterprise support team is available to help with orders,
              account setup, and procurement questions.
            </p>
          </div>
          <LocalizedClientLink
            href="/store"
            className="text-sm font-semibold uppercase tracking-wide text-gold-600 hover:text-gold-500 transition-colors"
          >
            Contact Support →
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
