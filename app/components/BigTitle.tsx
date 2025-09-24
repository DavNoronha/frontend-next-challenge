interface BigTitleProps {
  children: React.ReactNode
  titleClassName?: string
}

export default function BigTitle({ children, titleClassName }: BigTitleProps) {
  return (
    <h1
      style={{ textShadow: "0 0 16px rgba(0,0,0,0.5)" }}
      className={`md:pt-0 md:text-[56px] text-[32px] font-extrabold text-white leading-10 capitalize ${titleClassName}`}
    >
      {children}
    </h1>
  )
}
