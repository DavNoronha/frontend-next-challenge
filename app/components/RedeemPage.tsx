"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

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
}

export default function RedeemPage() {
  const params = useParams()
  const orderId = params.id as string

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  const getGiftCard = async () => {
    try {
      const response = await fetch(`http://localhost:3001/order/${orderId}`)
      if (!response.ok) {
        throw new Error("Erro ao buscar o gift card")
      }

      const data: Order = await response.json()
      setOrder(data)
    } catch (err) {
      console.error("Erro:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (orderId) {
      getGiftCard()
    }
  }, [orderId])

  if (loading) {
    return <main>Carregando gift card...</main>
  }

  if (!order) {
    return <main>Gift card não encontrado.</main>
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gift Card</h1>
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Sender`s name:</strong> {order.senderName}</p>
      <p><strong>Recipient name:</strong> {order.recipientEmail}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Redeem Code:</strong> {order.redeemCode}</p>
      {order.shareLink && (
        <p>
          <strong>Link:</strong>{" "}
          <a href={order.shareLink} className="text-blue-600 underline">
            {order.shareLink}
          </a>
        </p>
      )}
      {order.message && (
        <p><strong>Mensagem:</strong> {order.message}</p>
      )}
    </main>
  )
}
