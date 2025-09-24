"use client";

export const dynamic = "force-dynamic";

import RedeemPage from "@/app/components/RedeemPage";

export default function YourGift({ params }: { params: { id: string } }) {
  return (
    <RedeemPage orderId={params.id} />
  );
}