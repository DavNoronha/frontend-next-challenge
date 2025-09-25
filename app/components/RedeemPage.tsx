"use client"

import { usePathname } from "next/navigation"
import Image from "next/image";

import PathHistory from "@/app/components/PathHistory"
import BigTitle from "@/app/components/BigTitle"
import OutlinedBtn from "@/app/components/OutlinedBtn"
import { Order } from "@/app//types/api"
import api from "@/app/services/api"

import { useEffect, useState } from "react"


function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function RedeemPage({ orderId }: { orderId: string }) {

  const pathname = usePathname().split('/').filter(item => item)

  const isGiftPage = pathname[0] === "your-gift"

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getGiftCard() {
      try {
        const order = await api.getOrder(orderId)
        setOrder(order)
      } catch (err) {
        console.error("Erro:", err)
        alert("Error retrieving gift card")
      } finally {
        setLoading(false)
      }
    }
    if (orderId) {
      getGiftCard()
    }
  }, [orderId])

  if (loading) {
    return <div className="container flex justify-center items-center w-screen h-screen">
      Loading gift card...
    </div>
  }

  if (!order) {
    return <div className="container flex justify-center items-center w-screen h-screen">
      Gift card not found.
    </div>
  }

  return (
    <div>
      <div className="order-gradient-bg" />

      <div className="flex flex-col gap-10 gap-2 md:mb-0 mb-20">
        <PathHistory />

        <BigTitle titleClassName="!text-[32px] pt-10 md:pt-0 md:text-start text-center">
          {isGiftPage ? "Your Gift" : "My Order"}
        </BigTitle>

        <div className={`flex flex-col ${isGiftPage ? "" : "gap-[2px]"}`}>
          <div className={` ${isGiftPage ? "h-[80px]" : "md:h-16 h-full"} gradient-text-bg p-4`}>
            {isGiftPage ? (
              <div>
                <p className="flex items-center text-xs font-normal mb-0 px-2">
                  <span>{order.senderName}</span>
                  <Image src="/arrow-right.svg" alt="Link Icon" width={12} height={12} className="mx-1 inline" />
                  <span>{order.recipientName}</span>
                </p>
                <p className="text-xs font-normal p-2">{order.message}</p>
              </div>
            ) : (
              <div className="flex md:flex-row flex-col justify-between items-center">
                <h2 className="text-2xl font-extrabold md:mb-0 mb-2">{formatDate(order.updatedAt)}</h2>
                <p className="text-sm font-normal">Order #{order.id}</p>
              </div>
            )}
          </div>
          <div className="flex md:flex-row flex-col justify-start items-center gradient-text-bg p-4 md:gap-6 gap-4">
            <Image src="/order-img.png" alt="Order Image" width={292} height={136} />
            <div className="flex flex-col md:justify-between md:gap-0 gap-4 w-full md:h-[136px] h-full">
              <p className="text-xl">Apple Gift Card</p>
              <p className="flex items-center gap-2 text-[#888]">
                <Image src="/tree.svg" alt="Tree Icon" width={16} height={16} />
                <span className="text-[#888] text-xs">6 Trees saved</span>
              </p>
              <div className="flex md:flex-row flex-col items-center md:gap-[10px] gap-4">
                {order.shareLink && !isGiftPage ? (
                  <OutlinedBtn
                    btnClassName="!px-4 !py-[5px] whitespace-nowrap w-full md:w-[173px] md:order-1 order-2"
                    onClick={() => {
                      navigator.clipboard.writeText(order.shareLink!)
                      alert("Code copied to clipboard")
                    }}
                  >
                    <span className="text-sm">Copy and Share Key</span>
                  </OutlinedBtn>
                ) : (
                  <OutlinedBtn
                    btnClassName="!px-4 !py-[5px] w-[141px] whitespace-nowrap w-full md:w-[141px]"
                    onClick={() => window.location.href = "#"}
                  >
                    <span className="text-sm font-normal">How to Redeem</span>
                  </OutlinedBtn>
                )}
                {order.shareLink && !isGiftPage ? (
                  <p className="flex items-center text-xs w-full font-normal text-[#888] ml-[2px] md:order-2 order-1">
                    <span>{order.senderName}</span>
                    <Image src="/arrow-right.svg" alt="Link Icon" width={12} height={12} className="mx-1" />
                    <span>{order.recipientName}</span>
                    <span className="ml-2">({order.recipientEmail})</span>
                  </p>
                ) : (
                  <div className="relative flex w-full">
                    <Image
                      src="/copy.svg"
                      alt="Copy Icon"
                      width={16}
                      height={14.85}
                      className="absolute top-[9px] left-[16px] cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(order.redeemCode)
                        alert("Code copied to clipboard")
                      }}
                    />
                    <input type="text" readOnly value={order.redeemCode} className="bg-white text-black w-full max-w-[360px] text-sm font-bold pl-[42px] pr-4 py-2 h-[32px]" />
                  </div>
                )}  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
