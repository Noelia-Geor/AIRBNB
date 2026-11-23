"use client";

import { useState } from "react";
import GuestCounter from "@/components/sections/GuestCounter";
import { formatPrice } from "@/lib/data";
import type { Property } from "@/types";

export default function BookingCard({ property }: { property: Property }) {
  const [guests, setGuests] = useState(Math.min(2, property.guests));
  const [booked, setBooked] = useState(false);

  const reserve = () => setBooked(true);
  const label = booked ? "Reserva solicitada ✓" : "Reservar";
  const buttonClass =
    "rounded-full bg-gradient-to-r from-rose-500 to-pink-700 px-8 py-3.5 text-lg font-semibold text-white shadow-lg disabled:opacity-80";

  return (
    <>
      <aside
        aria-label="Reservar"
        className="hidden rounded-3xl border border-neutral-200 p-6 shadow-lg lg:sticky lg:top-8 lg:block lg:self-start"
      >
        <p className="text-2xl font-semibold">
          {formatPrice(property.pricePerTotal)} <span className="text-base font-normal">en total</span>
        </p>
        <p className="mt-1 text-sm text-neutral-500">{property.dates}</p>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 p-4">
          <div>
            <p className="text-xs font-semibold uppercase">Huéspedes</p>
            <p className="text-sm text-neutral-500">Máximo {property.guests}</p>
          </div>
          <GuestCounter value={guests} max={property.guests} onChange={setGuests} />
        </div>
        <button type="button" onClick={reserve} disabled={booked} className={`${buttonClass} mt-5 w-full`}>
          {label}
        </button>
        <p className="mt-2 text-center text-xs text-neutral-500">No se te cobrará nada aún</p>
      </aside>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white lg:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <div>
            <p className="font-semibold underline">{formatPrice(property.pricePerTotal)} en total</p>
            <p className="text-sm">{property.dates}</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
              Huéspedes
              <GuestCounter value={guests} max={property.guests} onChange={setGuests} compact />
            </div>
          </div>
          <div className="text-center">
            <button type="button" onClick={reserve} disabled={booked} className={`${buttonClass} px-6`}>
              {label}
            </button>
            <p className="mt-1 text-xs text-neutral-500">No se te cobrará nada aún</p>
          </div>
        </div>
      </div>
    </>
  );
}
