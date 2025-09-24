import React from "react"
import InputField from "@/app/components/InputField"
import OutlinedBtn from "@/app/components/OutlinedBtn"
import { OrderPayload } from "@/app/types/api"

interface GiftModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: OrderPayload) => void
}


import { useState } from "react"

export default function GiftModal({ open, onClose, onSubmit }: GiftModalProps) {

  const [senderName, setSenderName] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailError, setEmailError] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (recipientEmail !== confirmEmail) {
      setEmailError(true)
      return
    }
  
    setEmailError(false)
  
    onSubmit({
      senderName,
      recipientName,
      recipientEmail,
      message,
      price: 1500,
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative md:w-[600px] w-full md:mx-0 mx-4 md:mt-0 mt-8 md:h-auto h-full bg-[#252525] flex justify-center items-center backdrop-blur modal-border p-4">
        <form
          className="w-full h-full md:gap-y-6 gap-y-4 gap-x-4 grid grid-cols-1 md:grid-cols-2 justify-between items-center md:mb-0 mb-2 overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-extrabold leading-[32px] md:col-span-2 text-center">Gift Details</h2>
          <InputField
            label="Sender Name*"
            name="senderName"
            required
            value={senderName}
            onChange={e => setSenderName(e.target.value)}
          />
          <InputField
            label="Recipient Name*"
            name="recipientName"
            required
            value={recipientName}
            onChange={e => setRecipientName(e.target.value)}
          />
          <div className="flex flex-col w-full self-start">
            <InputField
              label="Recipient Email*"
              name="recipientEmail"
              type="email"
              required
              value={recipientEmail}
              onChange={e => setRecipientEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <InputField
              label="Confirm Email*"
              name="confirmEmail"
              type="email"
              required
              value={confirmEmail}
              onChange={e => setConfirmEmail(e.target.value)}
              inputClassName={emailError ? "border-red-500" : ""}
            />
            {emailError && (
              <span className="text-red-500 text-xs mt-1">Invalid email</span>
            )}
            </div>
          <label htmlFor="message" className="flex flex-col md:col-span-2 w-full text-xs gap-1">
            <span>Message</span>
            <textarea
              name="message"
              rows={2}
              className="flex w-full p-2 border text-sm resize-none border border-[#505050] bg-black/20 text-[#AAA] input-field"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <OutlinedBtn
            flat
            btnClassName="py-2 px-8 flex-1 md:order-1 order-2 w-full max-h-10 h-10"
            onClick={() => {
              onClose()
              setEmailError(false)
              setSenderName("")
              setRecipientName("")
              setRecipientEmail("")
              setConfirmEmail("")
              setMessage("")
            }}
          >
            <span>Cancel</span>
          </OutlinedBtn>
          <OutlinedBtn
            type="submit"
            btnClassName="py-2 px-8 flex-1 h-10 md:order-2 w-full max-h-10 order-1"
            primary
          >
            <span>Confirm</span>
          </OutlinedBtn>
        </form>
      </div>
    </div>
  )
}
