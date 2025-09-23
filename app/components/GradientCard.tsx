"use client";

interface GradientCardProps {
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
}

export default function GradientCard({ width = 240, height = 120, children }: Partial<GradientCardProps>) {
  return (
    <div
      className={`bg-gradient-to-r from-[#000000] via-[#00000070] to-[#00000000] shadow-lg flex items-center justify-center`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {children}
    </div>
  );
}

// background: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 70%);