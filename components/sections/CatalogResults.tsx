import MapPlaceholder from "@/components/sections/MapPlaceholder";
import PropertyCard from "@/components/sections/PropertyCard";
import ResultsHeader from "@/components/sections/ResultsHeader";
import type { Property, SortOption } from "@/types";

interface CatalogResultsProps {
  properties: Property[];
  sort: SortOption;
  showMap: boolean;
  onSortChange: (sort: SortOption) => void;
  onReset: () => void;
  onToggleMap: () => void;
}

export default function CatalogResults({
  properties,
  sort,
  showMap,
  onSortChange,
  onReset,
  onToggleMap,
}: CatalogResultsProps) {
  return (
    <>
      <section className={`min-w-0 flex-1 ${showMap ? "hidden lg:block" : ""}`}>
        <ResultsHeader total={properties.length} sort={sort} onSortChange={onSortChange} />
        {properties.length === 0 ? (
          <div className="rounded-3xl bg-neutral-50 p-10 text-center">
            <p className="mb-4 text-neutral-600">No hay alojamientos que coincidan con los filtros.</p>
            <button type="button" onClick={onReset} className="rounded-xl bg-neutral-900 px-5 py-2.5 font-medium text-white">
              Quitar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>

      <MapPlaceholder
        properties={properties}
        className={`${showMap ? "block" : "hidden"} h-[60vh] lg:sticky lg:top-40 lg:block lg:h-[calc(100vh-11rem)] lg:w-[24rem] lg:shrink-0 xl:w-[28rem]`}
      />

      <button
        type="button"
        onClick={onToggleMap}
        className="fixed bottom-20 left-1/2 z-20 -translate-x-1/2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg lg:hidden"
      >
        {showMap ? "Mostrar lista" : "Mostrar mapa"}
      </button>
    </>
  );
}
