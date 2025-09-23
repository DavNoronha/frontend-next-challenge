export default function GradientCard() {
  return (
    <div className="flex items-start justify-center flex-col w-[384px] h-[176px] p-3 gap-3 purchase-gradient-bg">
      <h2 className="font-extrabold text-[20px]">25.00</h2>
      <div className="flex gap-2 w-full">
        <button className="px-[32px] py-2 bg-[#00CC7E] flex items-center flex-grow justify-center font-medium purchase-btn">
          Purchase
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border border-white">
          <span>Gift</span><img src="/gift-outline.svg" alt="Gift Icon" width={16} height={16} />
        </button>
      </div>
      <div>
        coisas
      </div>
    </div>
  );
}
