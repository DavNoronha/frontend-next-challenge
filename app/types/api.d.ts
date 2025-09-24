interface OrderPayload {
  recipientEmail: string
  message: string
  recipientName: string
  senderName: string
  price: number
}

interface Order {
  id: string
  purchaseFor: string
  recipientName: string
  senderName: string
  price: number
  status: string
  redeemCode: string
  recipientEmail?: string
  message?: string
  shareLink?: string
  createdAt: string
  updatedAt: string
  checkoutUrl?: string
}

export type { OrderPayload, Order };