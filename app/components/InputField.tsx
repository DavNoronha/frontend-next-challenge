
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type?: string
  inputClassName?: string
}

export default function InputField({ label, name, type = "text", inputClassName = "", ...props }: InputFieldProps) {
  console.log(inputClassName);
  return (
    <label htmlFor={name} className="flex flex-col w-full text-xs font-normal gap-1 leading-4">
      <span>{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        className={`flex w-full px-4 py-2 h-9 text-sm border border-[#505050] bg-black/20 text-[#AAA] ${inputClassName} input-field`}
        {...props}
      />
    </label>
  )
}
