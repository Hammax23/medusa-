import { 
  AbstractPaymentProvider,
  BigNumber,
} from "@medusajs/framework/utils"
import { 
  InitiatePaymentInput,
  InitiatePaymentOutput,
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
  CapturePaymentInput,
  CapturePaymentOutput,
  CancelPaymentInput,
  CancelPaymentOutput,
  DeletePaymentInput,
  DeletePaymentOutput,
  RefundPaymentInput,
  RefundPaymentOutput,
  RetrievePaymentInput,
  RetrievePaymentOutput,
  UpdatePaymentInput,
  UpdatePaymentOutput,
  GetPaymentStatusInput,
  GetPaymentStatusOutput,
  ProviderWebhookPayload,
  WebhookActionResult,
} from "@medusajs/types"

type MoyasarOptions = {
  apiKey: string
  publishableKey: string
  webhookSecret?: string
}

class MoyasarPaymentProviderService extends AbstractPaymentProvider<MoyasarOptions> {
  static identifier = "moyasar"

  protected config_: MoyasarOptions

  constructor(container: Record<string, unknown>, config: MoyasarOptions) {
    super(container, config)
    this.config_ = config
  }

  static validateOptions(options: Record<any, any>): void {
    if (!options.apiKey) {
      throw new Error("Moyasar API key is required")
    }
    if (!options.publishableKey) {
      throw new Error("Moyasar publishable key is required")
    }
  }

  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {
    // Moyasar payment is handled on frontend - always authorized
    return { status: "authorized" }
  }

  async initiatePayment(
    input: InitiatePaymentInput
  ): Promise<InitiatePaymentOutput> {
    const { amount, currency_code, context } = input
    const paymentId = `moyasar_${Date.now()}`

    return {
      id: paymentId,
      data: {
        id: paymentId,
        status: "authorized",
        amount: amount,
        currency: currency_code.toUpperCase(),
        description: "Payment for order",
      },
    }
  }

  async authorizePayment(
    input: AuthorizePaymentInput
  ): Promise<AuthorizePaymentOutput> {
    console.log("=== Moyasar authorizePayment called ===")
    
    // Always authorize - payment is handled on frontend via Moyasar form
    return {
      status: "authorized",
      data: {
        ...input.data,
        status: "authorized",
      },
    }
  }

  async capturePayment(
    input: CapturePaymentInput
  ): Promise<CapturePaymentOutput> {
    return {
      data: {
        ...input.data,
        status: "captured",
      },
    }
  }

  async cancelPayment(
    input: CancelPaymentInput
  ): Promise<CancelPaymentOutput> {
    return {
      data: {
        ...input.data,
        status: "canceled",
      },
    }
  }

  async deletePayment(
    input: DeletePaymentInput
  ): Promise<DeletePaymentOutput> {
    return {
      data: input.data || {},
    }
  }

  async refundPayment(
    input: RefundPaymentInput
  ): Promise<RefundPaymentOutput> {
    return {
      data: {
        ...input.data,
        status: "refunded",
      },
    }
  }

  async retrievePayment(
    input: RetrievePaymentInput
  ): Promise<RetrievePaymentOutput> {
    return {
      data: input.data || {},
    }
  }

  async updatePayment(
    input: UpdatePaymentInput
  ): Promise<UpdatePaymentOutput> {
    return {
      data: {
        ...input.data,
        amount: input.amount,
        currency: input.currency_code?.toUpperCase(),
      },
    }
  }

  async getWebhookActionAndData(
    payload: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    const data = payload.data as Record<string, unknown>
    const event = payload.headers?.["x-moyasar-event"] as string

    switch (event) {
      case "payment_paid":
        return {
          action: "authorized",
          data: {
            session_id: data.id as string,
            amount: new BigNumber(data.amount as number),
          },
        }
      case "payment_failed":
        return {
          action: "failed",
          data: {
            session_id: data.id as string,
            amount: new BigNumber(data.amount as number),
          },
        }
      default:
        return {
          action: "not_supported",
          data: {
            session_id: "",
            amount: new BigNumber(0),
          },
        }
    }
  }
}

export default MoyasarPaymentProviderService
