import Image from "next/image";
import AmenitiesGrid from "@/components/sections/AmenitiesGrid";
import BookingCard from "@/components/sections/BookingCard";
import HostInfo from "@/components/sections/HostInfo";
import PropertyHeader from "@/components/sections/PropertyHeader";
import type { Property } from "@/types";

export default function RoomContent({ property }: { property: Property }) {
  return (
    <div className="relative -mt-6 rounded-t-3xl bg-white px-6 pt-8 lg:mt-0 lg:grid lg:grid-cols-[1fr_22rem] lg:gap-12 lg:px-0 lg:pt-8">
      <div className="min-w-0">
        <PropertyHeader property={property} />

        <ul className="flex flex-col gap-6 py-8">
          {property.highlights.map((highlight) => (
            <li key={highlight.title}>
              <h2 className="font-semibold">{highlight.title}</h2>
              <p className="text-neutral-500">{highlight.description}</p>
            </li>
          ))}
        </ul>

        {property.description && (
          <p className="border-t border-neutral-200 py-8 text-neutral-700">{property.description}</p>
        )}
        {property.hostProfile && <HostInfo host={property.hostProfile} />}
        {property.amenities && <AmenitiesGrid amenities={property.amenities} />}

        <section className="-mx-6 border-t border-neutral-200 pt-6 lg:mx-0">
          {property.rooms.slice(0, property.bedrooms).map((room) => (
            <figure key={room.name} className="mb-8">
              <figcaption className="px-6 py-4 text-2xl font-semibold lg:px-0">{room.name}</figcaption>
              <div className="relative aspect-[3/2] lg:overflow-hidden lg:rounded-2xl">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1152px) 700px, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </section>
      </div>

      <BookingCard property={property} />
    </div>
  );
}
