import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import PageHeader from "@modules/common/components/page-header"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <>
      <PageHeader
        label="Your Order"
        title="Shopping Cart"
        description={
          cart?.items?.length
            ? `Review ${cart.items.length} item${cart.items.length > 1 ? "s" : ""} before proceeding to secure checkout.`
            : "Your cart is ready when you are."
        }
      />
      <div className="py-12 bg-whet-50/30">
        <div className="content-container" data-testid="cart-container">
          {cart?.items?.length ? (
            <div className="grid grid-cols-1 small:grid-cols-[1fr_380px] gap-x-12 gap-y-8">
              <div className="flex flex-col enterprise-card-elevated p-6 small:p-8 gap-y-6">
                {!customer && (
                  <>
                    <SignInPrompt />
                    <Divider />
                  </>
                )}
                <ItemsTemplate cart={cart} />
              </div>
              <div className="relative">
                <div className="flex flex-col gap-y-8 sticky top-24">
                  {cart && cart.region && (
                    <div className="enterprise-card-elevated p-6 small:p-8">
                      <Summary cart={cart} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="enterprise-card-elevated p-12">
              <EmptyCartMessage />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartTemplate
