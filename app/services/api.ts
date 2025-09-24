import { OrderPayload, Order } from "@/app/types/api"

const api = {
  async getOrder(orderId: string): Promise<Order> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/${orderId}`)

    const data: Order = await response.json()
    return data
  } catch (err) {
    console.error("Error:", err)
    throw err
  }
},
  async createOrder(payload: OrderPayload): Promise<Order> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data: Order = await response.json()
    return data
  } catch (err) {
    console.error("Error:", err)
    throw err
  }
}
}

export default api
