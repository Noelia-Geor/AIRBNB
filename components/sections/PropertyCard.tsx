import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/ui/FavoriteButton";
import { formatPrice, formatRating } from "@/lib/data";
import type { Property } from "@/types";

export default function PropertyCard({
  property,
  priority = false,
  className = "",
}: {
  property: Property;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link href={`/rooms/${property.id}`} className={`group block ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-200">
        <Image
          src={property.image}
          alt={property.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 60vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {property.guestFavorite && (
          <span className="absolute left-3 top-3 rounded-xl bg-white/90 px-2.5 py-1 text-xs font-semibold shadow">
            Recomendación del viajero
          </span>
        )}
        <FavoriteButton className="absolute right-3 top-3" />
      </div>
      <div className="mt-3 text-[15px] leading-snug">
        <h3 className="font-semibold text-neutral-900">{property.title}</h3>
        <p className="text-neutral-500">
          {property.dates} · {property.host}
        </p>
        <p className="text-neutral-500">
          {formatPrice(property.pricePerTotal)} en total · ★ {formatRating(property.rating)}
        </p>
      </div>
    </Link>
  );
}
