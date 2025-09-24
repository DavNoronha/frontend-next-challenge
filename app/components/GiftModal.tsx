import React from "react"
import InputField from "@/app/components/InputField"
import OutlinedBtn from "@/app/components/OutlinedBtn"

interface formData {
  senderName: string
  recipientName: string
  recipientEmail: string
  message: string
  price: number
}

interface GiftModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: formData) => void
}


import { useState } from "react";

const GiftModal: React.FC<GiftModalProps> = ({ open, onClose, onSubmit }) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (recipientEmail !== confirmEmail) {
      setEmailError(true);
      return;
    }
  
    setEmailError(false);
  
    const form = e.currentTarget;
    const formData = new FormData(form);

    onSubmit({
      senderName: formData.get("senderName") as string,
      recipientName: formData.get("recipientName") as string,
      recipientEmail: formData.get("recipientEmail") as string,
      message: formData.get("message") as string,
      price: 2500,
    });
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-[600px] bg-[#252525] flex flex-col justify-center items-center backdrop-blur modal-border p-4">
        <form
          className="w-full h-full flex flex-col gap-6 justify-between items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-extrabold mb-4">Gift Details</h2>
          <div className="flex w-full gap-4">
            <InputField
              label="Sender Name*"
              name="senderName"
              required
            />
            <InputField
              label="Recipient Name*"
              name="recipientName"
              required
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-full">
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
          </div>
          <label htmlFor="message" className="flex flex-col w-full text-xs gap-1">
            <span>Message</span>
            <textarea
              name="message"
              rows={2}
              className="flex w-full mb-2 p-2 border text-sm resize-none border border-[#505050] bg-black/20 text-[#AAA]"
            />
          </label>
          <div className="flex w-full gap-4">
            <OutlinedBtn
              flat
              btnClassName="py-2 px-8 flex-1"
              onClick={() => { onClose(); setEmailError(false); setRecipientEmail(""); setConfirmEmail(""); }}
            >
              <span>Cancel</span>
            </OutlinedBtn>
            <OutlinedBtn
              type="submit"
              btnClassName="py-2 px-8 flex-1"
              primary
            >
              <span>Confirm</span>
            </OutlinedBtn>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GiftModal
