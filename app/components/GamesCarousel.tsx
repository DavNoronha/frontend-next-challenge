export default function GamesCarousel() {
  const lastSeenItems = [
    { name: 'Conan Exiles', value: 25, donated: 5, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game1.png' },
    { name: 'Conan Exiles', value: 100, donated: 20, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game2.png' },
    { name: 'Conan Exiles', value: 200, donated: 40, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game3.png' },
    { name: 'Conan Exiles', value: 200, donated: 40, desc: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection', img: '/games/game4.png' },
  ];

  return (
    <ul className="flex gap-[16px]">
      {lastSeenItems.map((item, index) => (
        <li key={index} className="flex items-center flex-col my-4 w-[292px] game-gradient-bg">
          <img src={item.img} alt={item.name} className="w-[292px] h-[136px] object-cover" />
          <div className="flex items-center justify-start w-full p-2 gap-1 max-h-[40px] price">
            <h2 className="text-[20px] font-extrabold">{item.value}.00</h2><span className="text-[12px] font-normal text-[#888]">USD</span>
          </div>
          <div className="w-full p-2 desc">
            <div className="flex items-center gap-2 mb-2 max-h-[32px]">
              <img src="/steam.svg" alt="Steam Logo" width={16} height={16} />
              <img src="/tree.svg" alt="Donate Logo" width={16} height={16} />
              <span className="text-[#888] text-[12px] font-normal">{item.donated}</span>
              <span className="text-[#888] text-[12px] font-normal">{item.name}</span>
            </div>
            <p className="text-[16px] py-2">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}