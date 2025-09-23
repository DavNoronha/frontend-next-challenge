export default function MiniGiftCard({ value = 25, donated = 5 }: { value?: number, donated?: number }) {
  return (
    <div className="flex items-center justify-start mini-card-bg">
      <div className="px-[31px]  py-1 img-container">
        <img src="/apple-gc.png" alt="Apple Gift Card Logo" className="max-w-[126px] max-h-[80px]" />
      </div>
      <div className="px-2 flex flex-col w-[35%] h-[88px] justify-between mini-card-gradient-bg">
        <p className="flex h-full items-center text-[16px] font-extrabold">{value}.00 <span className="text-[12px] ml-1 text-[#888] font-normal">USD</span></p>
        <div className="flex">
          <img src="/tree.svg" alt="Tree Logo" width={16} height={16} />
          <p className="py-1 max-h-[28px] text-[12px] text-[#888] ml-1">{donated}</p>
        </div>
      </div>
    </div>
  )
}