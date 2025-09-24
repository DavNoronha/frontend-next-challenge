'use client'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

  const handleClose = () => {
    onClose()
  }

  if (isOpen) {
    return (
      <div
        className="p-4 mt-[524px]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-1"></div>

        <div className="relative bg-[#252525] text-black flex flex-col w-full h-full max-w-600 max-h-408 z-2 modal">
          <div className="flex justify-end p-2">
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
