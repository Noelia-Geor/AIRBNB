import { formatRating } from "@/lib/data";
import type { Property } from "@/types";

export default function PropertyHeader({ property }: { property: Property }) {
  const stats = [
    `${property.guests} viajeros`,
    `${property.bedrooms} dormitorios`,
    `${property.beds} camas`,
    `${property.baths} baños`,
  ].join(" · ");

  return (
    <header className="text-center lg:text-left">
      <h1 className="text-3xl font-semibold">{property.title}</h1>
      <p className="mt-4 text-neutral-500 lg:mt-2">
        Alojamiento entero: {property.type.toLowerCase()} en {property.location}, España
      </p>
      <p className="mt-1 text-neutral-500">{stats}</p>

      <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-neutral-200 pb-8 text-center lg:max-w-lg">
        <div>
          <p className="text-lg font-semibold">{formatRating(property.rating)}</p>
          <p className="text-xs text-amber-500" aria-hidden>
            ★★★★★
          </p>
        </div>
        <p className="border-x border-neutral-300 px-4 text-sm font-semibold">
          {property.guestFavorite ? (
            <>
              Recomendación
              <br />
              del viajero
            </>
          ) : (
            "Muy valorado"
          )}
        </p>
        <div>
          <p className="text-lg font-semibold">{property.reviews}</p>
          <p className="text-xs underline">evaluaciones</p>
        </div>
      </div>
    </header>
  );
}
