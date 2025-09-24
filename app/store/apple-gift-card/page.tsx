"use client"

import { useState } from "react"

import PurchaseCard from "@/app/components/PurchaseCard"
import GiftModal from "@/app/components/GiftModal"
import MiniGiftCard from "@/app/components/MiniGiftCard"
import PathHistory from "@/app/components/PathHistory"
import GamesCarousel from "@/app/components/GamesCarousel"
import BigTitle from "@/app/components/BigTitle"
import api from "@/app/services/api"
import { OrderPayload } from "@/app/types/api"

interface RelatedItem {
  value: number
  trees: number
}

export default function AppleGiftCard() {
  const relatedItems: RelatedItem[] = [
    { value: 15, trees: 3 },
    { value: 50, trees: 12 },
  ]

  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = (type: "self" | "gift") => {
    if (type === "gift") {
      setModalOpen(true)
      return
    }
    
    purchase("self")
  }

  const purchase = async (type: string, formData?: OrderPayload) => {
    const payload = {
      purchaseFor: type,
      message: formData?.message || "",
      recipientEmail: formData?.recipientEmail || "",
      recipientName: formData?.recipientName || "",
      senderName: formData?.senderName || "",
      price: formData?.price || 1500,
    }

    try {
      const data = await api.createOrder(payload)

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      }
    } catch (err) {
      alert("Error creating order")
      console.log(err)
    }
  }

  return (
    <div>
      <img src="/store-gradient-bg.png" className="absolute top-0 right-0 -z-1" />

      <div>
        <PathHistory />

        <div className="flex items-center justify-between h-[176px]">
          <BigTitle>
            Apple Gift Card
          </BigTitle>

          <PurchaseCard handleClick={handleClick} />
          
          <GiftModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={(data) => {
              purchase("gift", data)
              setModalOpen(false)
            }}
          />
        </div>

        <div className="mb-[80px]">
          <img src="/apple-gc.png" alt="Apple Gift Card Logo" className="w-[322px] h-[200px]" />
        </div>

        <div className="flex gap-[22px] mb-[80px]">
          <div className="flex-grow">
            <p className="text-sm font-normal text-[#AAA] mb-4">About this Gift Card</p>
            <div className="p-4 gradient-text-bg">
              <ul className="list-disc pl-7 text-base font-normal text-white">
                <li>For all things Apple — iPad, AirPods, Apple Watch, iPhone, MacBook, iCloud, accessories, and more.</li>
                <li>Perfect for App Store purchases and subscriptions — get apps, games, music, movies, TV shows, and more.</li>
                <li>The perfect gift to say happy birthday, thank you, congratulations, and more.</li>
                <li>Card delivered via email.</li>
                <li>Use it for purchases at any Apple Store location, on the Apple Store app, apple.com, the App Store, iTunes, Apple Music, Apple TV+, Apple News+, Apple Books, Apple Arcade, iCloud+, Apple Fitness+, Apple One and other Apple properties in the US only.</li>
                <li>To make purchases at an Apple Store location, take the gift card to the Apple Store before redeeming it.</li>
                <li>For online purchases on your Apple Account, go to apple.com/redeem to add to your balance.</li>
                <li>Not valid for other payments.</li>
                <li>No returns or refunds on Apple Gift Cards. Terms apply.</li>
              </ul>
            </div>

            <p className="text-sm font-normal text-[#AAA] mb-4">How to Redeem</p>
            <div className="p-4 gradient-text-bg">
              <p className="text-base font-normal text-white">Go to <a href="#" className="text-[#00CC7E] underline">apple.com/redeem</a> to add to your Apple Account. Use your balance for online and Apple Store purchases.</p>
            </div>

            <p className="text-sm font-normal text-[#AAA] mb-4">Terms and Conditions</p>
            <div className="p-4 gradient-text-bg">
              <p className="text-base font-normal text-white">Valid only for U.S. transactions in Apple properties. For assistance, visit <a href="#" className="text-[#00CC7E] underline">support.apple.com/giftcard</a> or call 1-800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply see <a href="#" className="text-[#00CC7E] underline">apple.com/us/go/legal/gc.</a> Issued by Apple Value Services, LLC (AVS). ©2025 Apple Inc. All rights reserved.</p>
            </div>
          </div>

          <div className="min-w-[384px]">
            <p className="text-sm font-normal text-[#AAA] mb-4">Related Products</p>

            <div className="flex flex-col gap-4 align-start">
              {relatedItems.map((item, index) => (
                <MiniGiftCard key={index} value={item.value} trees={item.trees} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <div className="flex items-center gap-[32px]">
            <h3 className="text-[32px] font-extrabold">Last seen</h3>
            <p className="text-sm text-white font-normal">View all</p>
          </div>

          <GamesCarousel />
        </div>
      </div>
    </div>
  )
}
