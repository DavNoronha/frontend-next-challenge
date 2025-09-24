interface LastSeenItem {
  name: string
  value: number
  trees: number
  desc: string
  img: string
}

export default function GamesCarousel() {
  const lastSeenItems: LastSeenItem[] = [
    { name: 'Conan Exiles', value: 25, trees: 5, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game1.png' },
    { name: 'Conan Exiles', value: 100, trees: 20, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game2.png' },
    { name: 'Conan Exiles', value: 200, trees: 40, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game3.png' },
    { name: 'Conan Exiles', value: 200, trees: 40, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game4.png' },
  ]

  return (
    <div className="relative">
      <ul className="flex gap-[16px]">
        {lastSeenItems.map((item, index) => (
          <li key={index} className="flex items-center flex-col my-4 w-[292px] game-gradient-bg cursor-pointer z-10">
            <img src={item.img} alt={item.name} className="w-[292px] h-[136px] object-cover" />
            <div className="flex items-center justify-start w-full p-2 gap-1 max-h-[40px] price">
              <h2 className="text-xl font-extrabold">{item.value}.00</h2><span className="text-xs font-normal text-[#888]">USD</span>
            </div>
            <div className="w-full px-2 h-[96px] desc">
              <div className="flex items-center gap-2 py-1 h-[36px]">
                <img src="/steam.svg" alt="Steam Logo" width={16} height={16} />
                <img src="/tree.svg" alt="Donate Logo" width={16} height={16} />
                <span className="text-[#888] text-xs font-normal">{item.trees}</span>
                <span className="text-[#888] text-xs font-normal">{item.name}</span>
              </div>
              <p className="text-base py-2">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="absolute top-0 right-0 bg-black/80 w-20 h-[272px] carousel-gradient-bg z-10 cursor-pointer" />
      <button className="absolute top-1/2 -translate-y-1/2 -right-[20px] bg-[#00CC7E] flex items-center flex-grow justify-center font-medium purchase-btn w-10 h-10 z-20 cursor-pointer">
        <img src="/chevron-right-outline.svg" alt="Right Arrow" height={13.3} />
      </button>
    </div>
  )
}