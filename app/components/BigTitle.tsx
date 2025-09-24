interface BigTitleProps {
  children: React.ReactNode
  titleClassName?: string
}

export default function BigTitle({ children, titleClassName }: BigTitleProps) {
  return (
    <h1 style={{ textShadow: "0 0 16px rgba(0,0,0,0.5)" }} className={`text-[56px] font-extrabold text-white leading-[40px] capitalize ${titleClassName}`}>
      {children}
    </h1>
  )
}
