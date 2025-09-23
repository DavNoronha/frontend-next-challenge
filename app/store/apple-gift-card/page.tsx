import PurchaseCard from "@/app/components/PurchaseCard";
import MiniGiftCard from "@/app/components/MiniGiftCard";
import PathHistory from "@/app/components/PathHistory";
import GamesCarousel from "@/app/components/GamesCarousel";

export default function AppleGiftCard() {
  const relatedItems = [
    { value: 15, donated: 3 },
    { value: 50, donated: 12 },
  ];

  return (
    <div className="mt-[64px] container">
      <img src="/store-gradient-bg.png" className="absolute top-0 right-0" />

      <div className="z-2 relative">
        <PathHistory />

        <div className="flex items-center justify-between h-[176px]">
          <h1 style={{ textShadow: "0 0 16px rgba(0,0,0,0.5)" }} className="text-[56px] font-extrabold text-white">
            Apple Gift Card
          </h1>

          <PurchaseCard />
        </div>

        <div className="mb-[80px]">
          <img src="/apple-gc.png" alt="Apple Gift Card Logo" className="w-[322px] h-[200px]" />
        </div>

        <div className="flex gap-[22px] mb-[80px]">
          <div className="flex-grow">
            <p className="text-[14px] font-normal text-[#AAA] mb-4">About this Gift Card</p>
            <div className="p-4 gradient-text-bg">
              <ul className="list-disc pl-7 text-[16px] font-normal text-white">
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

            <p className="text-[14px] font-normal text-[#AAA] mb-4">How to Redeem</p>
            <div className="p-4 gradient-text-bg">
              <p className="text-[16px] font-normal text-white">Go to <a href="#" className="text-[#00CC7E] underline">apple.com/redeem</a> to add to your Apple Account. Use your balance for online and Apple Store purchases.</p>
            </div>

            <p className="text-[14px] font-normal text-[#AAA] mb-4">Terms and Conditions</p>
            <div className="p-4 gradient-text-bg">
              <p className="text-[16px] font-normal text-white">Valid only for U.S. transactions in Apple properties. For assistance, visit <a href="#" className="text-[#00CC7E] underline">support.apple.com/giftcard</a> or call 1-800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply; see <a href="#" className="text-[#00CC7E] underline">apple.com/us/go/legal/gc.</a> Issued by Apple Value Services, LLC (AVS). ©2025 Apple Inc. All rights reserved.</p>
            </div>
          </div>

          <div className="min-w-[384px]">
            <p className="text-[14px] font-normal text-[#AAA] mb-4">Related Products</p>

            <div className="flex flex-col gap-4 align-start">
              {relatedItems.map((item, index) => (
                <MiniGiftCard key={index} value={item.value} donated={item.donated} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <div className="flex items-center gap-[32px]">
            <h3 className="text-[32px] font-extrabold">Last seen</h3>
            <p className="text-[14px] text-white font-normal">View all</p>
          </div>

          <GamesCarousel />
        </div>
      </div>
    </div>
  )
}
