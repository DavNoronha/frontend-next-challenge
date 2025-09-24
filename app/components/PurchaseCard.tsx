"use client"

import Image from "next/image"
import OutlinedBtn from "@/app/components/OutlinedBtn"
import { OrderPayload } from "@/app/types/api"


interface PurchaseCardProps {
  orderForm?: OrderPayload | null
  onPurchase: () => void
  onGift: () => void
}


export default function PurchaseCard({ orderForm, onPurchase, onGift }: PurchaseCardProps) {
  return (
    <div className="flex items-start justify-center flex-col md:w-[384px] min-h-[176px] md:mb-0 mb-[32px] md:p-4 py-4 gap-4 purchase-gradient-bg">
      <h2 className="font-extrabold text-xl h-[40px] flex items-center">
        {orderForm?.price ? (orderForm.price / 100).toFixed(2) : '25.00'}
      </h2>
      <div className="flex gap-2 w-full">
        <OutlinedBtn
          primary
          btnClassName="!px-[32px] h-[40px] flex-grow"
          onClick={onPurchase}
        >
          <span className="text-base">Purchase</span>
        </OutlinedBtn>
        <OutlinedBtn
          btnClassName={`h-[40px] ${orderForm ? "bg-white text-[#252525] border !border-[#00CC7E]" : ""} `}
          onClick={onGift}
        >
          <span className="text-base">Gift</span>
          {orderForm ? (
            <Image src="/check-outline.svg" alt="check Icon" width={16} height={16} />
          ) : (
            <Image src="/gift-outline.svg" alt="Gift Icon" width={16} height={16} />
          )}
        </OutlinedBtn>
      </div>
      {orderForm && (
        <div className="text-xs text-white gradient-text-bg flex items-center justify-between  p-1 w-full">
          <div>
            <div className="flex text-xs font-normal p-1">
              <p>{orderForm.senderName}</p>
              <Image src="/arrow-right-white.svg" alt="Arrow Icon" width={12} height={12} className="mx-1 inline" />
              <p>{orderForm.recipientName}</p>
              <p className="ml-2">({orderForm.recipientEmail})</p>
            </div>
            {orderForm.message && <p className="text-xs p-1">{orderForm.message}</p>}
          </div>
          <button className="px-4 py-2 cursor-pointer" onClick={onGift}>
            <Image src="/edit.svg" alt="Edit Icon" width={13} height={13} className="inline mr-1" />
          </button>
        </div>
      )}
      <div className="flex items-center w-full py-2 gap-2 text-xs font-normal text-[#AAA] border-t border-[#AAA]">
        <span>Impact:</span>
        <Image src="/tree.svg" alt="Tree icon" width={16} height={16} />
        <span>6 Trees saved</span>
        <Image src="/attention.svg" alt="Attention Icon" width={16} height={16} />
      </div>
    </div>
  )
}

