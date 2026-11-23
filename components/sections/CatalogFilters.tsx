import { formatPrice } from "@/lib/data";

interface CatalogFiltersProps {
  regions: string[];
  region: string;
  maxPrice: number;
  maxAvailable: number;
  onRegionChange: (region: string) => void;
  onMaxPriceChange: (price: number) => void;
}

export default function CatalogFilters({
  regions,
  region,
  maxPrice,
  maxAvailable,
  onRegionChange,
  onMaxPriceChange,
}: CatalogFiltersProps) {
  return (
    <aside className="flex shrink-0 flex-col gap-5 lg:w-60">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Destino
        <select
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}
          className="rounded-xl border border-neutral-300 bg-white px-3 py-2.5 font-normal"
        >
          <option value="">Todos</option>
          {regions.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Precio máximo: {formatPrice(maxPrice)}
        <input
          type="range"
          min={0}
          max={maxAvailable}
          step={10}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="accent-rose-500"
        />
      </label>
    </aside>
  );
}
