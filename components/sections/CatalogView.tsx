"use client";

import { useMemo, useState } from "react";
import CatalogFilters from "@/components/sections/CatalogFilters";
import CatalogResults from "@/components/sections/CatalogResults";
import type { Property, SortOption } from "@/types";

const sorters: Record<SortOption, (a: Property, b: Property) => number> = {
  relevance: () => 0,
  newest: () => 0,
  "price-asc": (a, b) => a.pricePerTotal - b.pricePerTotal,
  "price-desc": (a, b) => b.pricePerTotal - a.pricePerTotal,
  rating: (a, b) => b.rating - a.rating,
};

export default function CatalogView({ properties }: { properties: Property[] }) {
  const maxAvailable = Math.max(...properties.map((p) => p.pricePerTotal));
  const regions = [...new Set(properties.map((p) => p.region))];

  const [region, setRegion] = useState("");
  const [maxPrice, setMaxPrice] = useState(maxAvailable);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [showMap, setShowMap] = useState(false);

  const results = useMemo(
    () =>
      properties
        .filter((p) => (!region || p.region === region) && p.pricePerTotal <= maxPrice)
        .sort(sorters[sort]),
    [properties, region, maxPrice, sort],
  );

  const reset = () => {
    setRegion("");
    setMaxPrice(maxAvailable);
    setSort("relevance");
  };

  return (
    <div className="mx-auto flex max-w-[100rem] flex-col gap-6 px-5 py-6 lg:flex-row lg:px-10">
      <CatalogFilters
        regions={regions}
        region={region}
        maxPrice={maxPrice}
        maxAvailable={maxAvailable}
        onRegionChange={setRegion}
        onMaxPriceChange={setMaxPrice}
      />
      <CatalogResults
        properties={results}
        sort={sort}
        showMap={showMap}
        onSortChange={setSort}
        onReset={reset}
        onToggleMap={() => setShowMap((value) => !value)}
      />
    </div>
  );
}
