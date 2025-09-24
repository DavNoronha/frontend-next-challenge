"use client"

import Image from "next/image";
import OutlinedBtn from "@/app/components/OutlinedBtn";

interface PurchaseCardProps {
  handleClick: (type: "self" | "gift") => void
}

export default function PurchaseCard({ handleClick }: PurchaseCardProps) {
  return (
    <div className="flex items-start justify-center flex-col w-[384px] h-[176px] p-4 gap-4 purchase-gradient-bg">
      <h2 className="font-extrabold text-xl h-[40px] flex items-center">25.00</h2>
      <div className="flex gap-2 w-full">
        <OutlinedBtn
          primary
          btnClassName="!px-[32px] h-[40px] flex-grow"
          onClick={() => handleClick("self")}
        >
          <span className="text-base">Purchase</span>
        </OutlinedBtn>
        <OutlinedBtn
          btnClassName="h-[40px]"
          onClick={() => handleClick("gift")}
        >
          <span className="text-base">Gift</span>
          <Image src="/gift-outline.svg" alt="Gift Icon" width={16} height={16} />
        </OutlinedBtn>
      </div>
      <div className="flex items-center w-full py-2 gap-2 text-xs font-normal text-[#AAA] border-t border-[#AAA]">
        <span>Impact:</span>
        <Image src="/tree.svg" alt="Tree icon" width={16} height={16} />
        <span>6 Trees saved</span>
        <Image src="/attention.svg" alt="Attention Icon" width={16} height={16} />
      </div>
    </div>
  )
}

