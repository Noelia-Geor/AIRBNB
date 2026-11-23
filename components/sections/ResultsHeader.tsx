import type { SortOption } from "@/types";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevancia" },
  { value: "price-asc", label: "Precio: de menor a mayor" },
  { value: "price-desc", label: "Precio: de mayor a menor" },
  { value: "rating", label: "Mejor valorados" },
];

interface ResultsHeaderProps {
  total: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function ResultsHeader({ total, sort, onSortChange }: ResultsHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-semibold" aria-live="polite">
        {total} {total === 1 ? "alojamiento" : "alojamientos"}
      </h1>
      <label className="flex items-center gap-2 text-sm font-medium">
        <span className="hidden sm:inline">Ordenar por</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          aria-label="Ordenar resultados"
          className="rounded-xl border border-neutral-300 bg-white px-3 py-2.5 font-normal"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
