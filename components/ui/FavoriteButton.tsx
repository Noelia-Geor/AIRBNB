"use client";

import { useState } from "react";

export default function FavoriteButton({
  className = "",
  label = "Añadir a favoritos",
}: {
  className?: string;
  label?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        setActive((v) => !v);
      }}
      className={`flex h-9 w-9 items-center justify-center rounded-full ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-6 w-6 ${active ? "fill-rose-500 stroke-rose-500" : "fill-black/40 stroke-white"}`}
        strokeWidth={2}
      >
        <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5 6.4 5c2 0 3.6 1.1 4.6 2.6h2C14 6.1 15.600 5 17.600 5 21 5 22.800 8.600 21.500 11.800 19.500 16.400 12 21 12 21z" />
      </svg>
    </button>
  );
}
