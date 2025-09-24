import Image from "next/image"

export default function Footer() {
  return (
    <footer className="container">
      <div>
        <hr className="md:mt-8 mt-[40px] border-neutral-500 max-[1105px]:mb-0 md:mt-0" />
        <div className="flex align-center justify-between md:py-2 py-4">
          <div className="flex md:items-center md:flex-row flex-col md:gap-[24px] gap-4">
            <Image src="/pp-logo.png" alt="PlanetPlay Logo" width={164} height={32} priority />
            <div className="text-neutral-400 text-xs flex items-center">
              <a href="#">Privacy Policy</a>
              <span className="hidden md:block mx-2 bg-[#AAA] w-[1px] h-[8px]" />
              <a href="#">Cookies Policy</a>
              <span className="hidden md:block mx-2 bg-[#AAA] w-[1px] h-[8px]" />
              <a href="#">Terms of Service</a>
            </div>
            <p className="flex md:hidden items-center mb-0 text-[10px] text-neutral-400">powered by <Image src="/google-icon.svg" alt="Google Icon" width={80} height={11.3} className="ms-[4px]" /></p>
          </div>
          <div className="hidden md:block">
            <p className="flex items-center mb-0 text-[10px] text-neutral-400">powered by <Image src="/google-icon.svg" alt="Google Icon" width={80} height={11.3} className="ms-[4px]" /></p>
          </div>
        </div>
        <hr className="hidden md:block mt-8 border-neutral-500 max-[1105px]:mb-0 md:mt-0" />
        <div className="flex flex-col md:flex-row md:items-center justify-between md:py-2 md:mb-4 mb-[40px]">
          <span className="hidden md:block text-xs text-[#AAA] font-normal">© 2025 PlanetPlay • All rights reserved</span>
          <div className="flex items-center gap-3">
            <span className="text-xs font-normal text-[#AAA]">Follow us</span>
            <a href="#">
              <Image src="/socials/blusky.png" alt="Blusky" width={22} height={19.43} />
            </a>
            <a href="#">
              <Image src="/socials/instagram.png" alt="Blusky" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/socials/x.png" alt="Blusky" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/socials/youtube.png" alt="Blusky" width={24} height={24} />
            </a>
          </div>
          <span className="block md:hidden text-xs text-[#AAA] font-normal py-4">© 2025 PlanetPlay • All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
