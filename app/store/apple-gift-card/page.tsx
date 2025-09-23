import GradientCard from "@/app/components/GradientCard";
import PathHistory from "@/app/components/PathHistory";

export default function AppleGiftCard() {
  return (
    <div className="mt-[64px] container">
      <img src="/store-gradient-bg.png" className="absolute top-0 right-0" />

      <div className="z-2 relative">
        <PathHistory />

        <div className="flex items-center justify-between h-[176px]">
          <h1 style={{ textShadow: "0 0 16px rgba(0,0,0,0.5)" }} className="text-[56px] font-extrabold text-white">
            Apple Gift Card
          </h1>
          
          <GradientCard
            width={384}
            height={176}
          >
            Teste
          </GradientCard>
        </div>
      </div>
    </div>
  )
}
