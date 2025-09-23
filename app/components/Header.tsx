"use client";


import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 mx-auto flex h-16 w-full items-center justify-between py-2 bg-black/80 backdrop-blur-sm z-3">
      <div className="container px-4 md:px-0">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/pp-logo.png" alt="PlanetPlay Logo" width={256.65} height={32} priority />
          </Link>
          <div className="hidden md:flex relative grow items-start justify-start px-4 max-[1240px]:w-full md:px-0 min-[1240px]:max-w-[490px] mx-0 md:mx-2 lg:mx-4">
            <input
              className="w-full shadow-[inset_0px_-1px_0px_0px_theme('colors.neutral.700')] bg-transparent !pr-12 px-4 py-2 outline-none placeholder:text-neutral-400"
              type="text"
              placeholder="Search by title, genre, or developer"
              value=""
              onChange={() => {}}
            />
            <Image src="/search.png" alt="Search Icon" width={20} height={20} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <nav className="flex justify-between text-white min-[1240px]:w-[366px]">
            <a href="#" className="flex items-center gap-2 px-2">
              <Image src="/store.png" alt="Store Logo" width={21.5} height={20.5} />
              <span className="text-[14px]">Store</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-2">
              <Image src="/hub.png" alt="Hub Logo" width={21.5} height={20.5} />
              <span className="text-[14px]">Hub</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-2 w-[40px]">
              <Image src="/menu.png" alt="Store Logo" width={17.5} height={15.5} />
            </a>
            <a href="#" className="flex items-center gap-2 px-2 w-[48px]">
              <Image src="/user.png" alt="User Logo" width={21.5} height={21.5} />
            </a>
            <a href="#" className="flex items-center gap-2 px-2 w-[48px]">
              <Image src="/cart.png" alt="Cart Logo" width={21.5} height={19.5} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
