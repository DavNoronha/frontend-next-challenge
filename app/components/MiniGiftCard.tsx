import Image from "next/image";

export default function MiniGiftCard({ value = 25, trees = 5 }: { value?: number, trees?: number }) {
  return (
    <div className="flex items-center justify-start mini-card-bg cursor-pointer">
      <div className="px-[31px]  py-1 img-container">
        <Image src="/apple-gc.png" alt="Apple Gift Card Logo" width={126} height={80} className="max-w-[126px] max-h-[80px]" />
      </div>
      <div className="px-2 flex flex-col w-[35%] h-[88px] justify-between mini-card-gradient-bg">
        <p className="flex h-full items-center text-base font-extrabold">{value}.00 <span className="text-xs ml-1 text-[#888] font-normal">USD</span></p>
        <div className="flex">
          <Image src="/tree.svg" alt="Tree Logo" width={16} height={16} />
          <p className="py-1 max-h-[28px] text-xs text-[#888] ml-1">{trees}</p>
        </div>
      </div>
    </div>
  )
}