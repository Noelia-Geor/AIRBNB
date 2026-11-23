import { formatPrice } from "@/lib/data";
import type { Property } from "@/types";

const pinPositions = [
  "left-[20%] top-[21%]",
  "left-[57%] top-[74%]",
  "left-[18%] top-[59%]",
  "left-[55%] top-[44%]",
  "left-[16%] top-[29%]",
  "left-[53%] top-[14%]",
  "left-[14%] top-[67%]",
  "left-[51%] top-[52%]",
];

export default function MapPlaceholder({
  properties,
  className = "",
}: {
  properties: Property[];
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label="Mapa de alojamientos (próximamente)"
      className={`relative overflow-hidden rounded-3xl border border-neutral-200 bg-sky-50 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px]"
      />
      {properties.map((p, i) => (
        <span
          key={p.id}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow-md ${
            pinPositions[i % pinPositions.length]
          }`}
        >
          {formatPrice(p.pricePerTotal)}
        </span>
      ))}
      <p className="absolute inset-x-0 bottom-4 text-center text-sm font-medium text-neutral-600">
        Mapa interactivo · próximamente
      </p>
    </div>
  );
}
