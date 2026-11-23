"use client";

import { useState } from "react";
import type { Amenity } from "@/types";

const INITIAL_VISIBLE = 6;

export default function AmenitiesGrid({ amenities }: { amenities: Amenity[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? amenities : amenities.slice(0, INITIAL_VISIBLE);

  return (
    <section aria-labelledby="amenities-title" className="border-t border-neutral-200 py-8">
      <h2 id="amenities-title" className="mb-5 text-xl font-semibold">
        Lo que ofrece este alojamiento
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((a) => (
          <li key={a.id} className="flex items-center gap-3">
            <span aria-hidden className="text-2xl">
              {a.icon}
            </span>
            {a.name}
          </li>
        ))}
      </ul>
      {amenities.length > INITIAL_VISIBLE && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 rounded-xl border border-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-100"
        >
          {expanded ? "Mostrar menos" : `Mostrar las ${amenities.length} comodidades`}
        </button>
      )}
    </section>
  );
}
