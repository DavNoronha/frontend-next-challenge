"use client"

import { usePathname } from "next/navigation"

export default function PathHistory() {
  const pathname = usePathname().split('/').filter(item => item)
  pathname.unshift('Home')
  pathname.pop()

  return (
    <div className="container h-16 md:flex hidden items-center text-white">
      {pathname.map((item, index) => {
        if (index === pathname.length - 1) {
          return (
            <div key={index} className="flex items-center cursor-default">
              <span className="mx-1 bg-white w-[1px] h-[16px]" />
              <span className="text-sm font-medium text-center capitalize px-2">
                {item.replace(/-/g, ' ')}
              </span>
            </div>
          ) 
        } else {
          return (
            <a key={index} href={index === 0 ? '/' : `#`} className="flex items-center">
              {index === 0 ? '' : <span className="mx-1 bg-white w-[1px] h-[16px]" />}
              <span className="text-sm font-medium text-center capitalize px-2">
                {item.replace(/-/g, ' ')}
              </span>
            </a>
          )
        }
      })}
    </div>
  )
}