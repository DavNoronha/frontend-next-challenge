"use client";

export const dynamic = "force-dynamic";

import RedeemPage from "@/app/components/RedeemPage";

export default function MyOrders({ params }: { params: { id: string } }) {
  return (
    <RedeemPage orderId={params.id} />
  );
}