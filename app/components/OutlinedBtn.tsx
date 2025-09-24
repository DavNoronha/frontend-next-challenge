
interface OutlinedBtnProps {
  children: React.ReactNode
  primary?: boolean
  flat?: boolean
  type?: "button" | "submit" | "reset"
  btnClassName?: string
  onClick?: () => void
}

export default function OutlinedBtn({ children, flat = false, primary = false, btnClassName = "", onClick, type = "button" }: OutlinedBtnProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 px-4 py-2 ${flat ? "flat-btn" : primary ? "purchase-btn" : "border border-white outlined-btn"} cursor-pointer ${btnClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
