"use client";

import { redirect } from 'next/navigation';

import { FormEvent, useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  redirect('/store/apple-gift-card');
  return null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const test = async (type: string, formData?: { recipientEmail: string; message: string, recipientName: string, senderName: string, price: number }) => {
    const payload = {
      purchaseFor: type,
      message: formData?.message || "",
      recipientEmail: formData?.recipientEmail || "",
      recipientName: formData?.recipientName || "",
      senderName: formData?.senderName || "",
      price: formData?.price || 11,
    };

    try {
      const request = await fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await request.json();

      if (response.checkoutUrl) {
        window.location.href = response.checkoutUrl; // redireciona pro stripe
      } else {
        alert("Erro ao criar sessão de checkout");
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      recipientEmail: formData.get("recipientEmail") as string,
      message: formData.get("message") as string,
      recipientName: formData.get("recipientName") as string,
      senderName: formData.get("senderName") as string,
      price: 50
    };

    test("gift", data);
  }

  return (
    <div className="">
      {/* Modal para presente */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
          <h2 className="text-xl font-bold">Enviar como presente</h2>

          <label htmlFor="recipientEmail">E-mail do presenteado</label>
          <input
            type="email"
            name="recipientEmail"
            className="border p-2 rounded"
            required
          />
          <label htmlFor="recipientName">Nome do presenteado</label>
          <input
            type="text"
            name="recipientName"
            className="border p-2 rounded"
            required
          />
          <label htmlFor="senderName">Nome de quem enviou</label>
          <input
            type="text"
            name="senderName"
            className="border p-2 rounded"
            required
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            className="border p-2 rounded"
            rows={3}
          />

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Comprar presente
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>

      {/* Página principal */}
      <div className="flex gap-4 items-center flex-col">
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          onClick={() => test("self")}
        >
          Comprar
        </button>

        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          onClick={() => setIsModalOpen(true)}
        >
          Comprar presente
        </button>
      </div>
    </div>
  );
}
