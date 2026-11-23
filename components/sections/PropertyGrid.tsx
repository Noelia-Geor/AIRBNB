import Link from "next/link";
import PropertyCard from "@/components/sections/PropertyCard";
import type { Property } from "@/types";

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  href?: string;
  isLoading?: boolean;
  /** "carousel" = fila con scroll horizontal; "grid" = cuadrícula responsiva. */
  variant?: "carousel" | "grid";
  skeletonCount?: number;
}

function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`} aria-hidden>
      <div className="aspect-square rounded-3xl bg-neutral-200" />
      <div className="mt-3 h-4 w-4/5 rounded bg-neutral-200" />
      <div className="mt-2 h-3 w-3/5 rounded bg-neutral-200" />
      <div className="mt-2 h-3 w-2/5 rounded bg-neutral-200" />
    </div>
  );
}

const carouselItem = "w-[44vw] min-w-[170px] max-w-[260px] shrink-0 snap-start";

export default function PropertyGrid({
  properties,
  title,
  href = "/catalog",
  isLoading = false,
  variant = "carousel",
  skeletonCount = 4,
}: PropertyGridProps) {
  const isCarousel = variant === "carousel";
  const containerClass = isCarousel
    ? "flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:px-10 [&::-webkit-scrollbar]:hidden"
    : "grid grid-cols-2 gap-x-4 gap-y-8 px-5 md:grid-cols-3 lg:px-10 xl:grid-cols-4";
  const itemClass = isCarousel ? carouselItem : "";

  return (
    <section className="py-4" aria-busy={isLoading}>
      {title && (
        <div className="mb-4 flex items-center justify-between gap-4 px-5 lg:px-10">
          <h2 className="text-[22px] font-semibold leading-tight text-neutral-900">{title}</h2>
          <Link
            href={href}
            aria-label={`Ver todo: ${title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200"
          >
            →
          </Link>
        </div>
      )}
      <div className={containerClass}>
        {isLoading
          ? Array.from({ length: skeletonCount }, (_, i) => <CardSkeleton key={i} className={itemClass} />)
          : properties.map((p, i) => (
              <PropertyCard key={p.id} property={p} priority={i < 2} className={itemClass} />
            ))}
      </div>
    </section>
  );
}
