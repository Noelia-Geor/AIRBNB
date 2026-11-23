"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CategoryFilter from "@/components/ui/CategoryFilter";
import NoResults from "@/components/ui/NoResults";
import PropertyGrid from "@/components/sections/PropertyGrid";
import { ALL_CATEGORY_ID, CATEGORIES, MOCK_LOAD_DELAY_MS } from "@/constants";
import { matchesSearch, properties as mockProperties } from "@/lib/data";
import type { Property } from "@/types";

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY_ID);

  // Simula la petición asíncrona a una API de propiedades.
  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(mockProperties);
      setIsLoading(false);
    }, MOCK_LOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(
    () =>
      properties.filter(
        (p) =>
          (activeCategory === ALL_CATEGORY_ID || p.categories.includes(activeCategory)) &&
          matchesSearch(p, search),
      ),
    [properties, activeCategory, search],
  );

  const sections = useMemo(() => {
    const byRegion = new Map<string, Property[]>();
    for (const p of filtered) byRegion.set(p.region, [...(byRegion.get(p.region) ?? []), p]);
    return [...byRegion.entries()];
  }, [filtered]);

  const reset = () => {
    setSearch("");
    setActiveCategory(ALL_CATEGORY_ID);
  };

  return (
    <>
      <Navbar searchValue={search} onSearchChange={setSearch}>
        <CategoryFilter categories={CATEGORIES} activeId={activeCategory} onChange={setActiveCategory} />
      </Navbar>

      <main className="mx-auto max-w-7xl flex-1 pt-4">
        {isLoading ? (
          <>
            <PropertyGrid isLoading properties={[]} title="Cargando alojamientos…" />
            <PropertyGrid isLoading properties={[]} />
          </>
        ) : sections.length === 0 ? (
          <NoResults onReset={reset} />
        ) : (
          sections.map(([region, items], i) => (
            <PropertyGrid
              key={region}
              properties={items}
              title={i === 0 ? `Disponibles en ${region} este fin de semana` : `Alojamientos populares en ${region}`}
            />
          ))
        )}
      </main>
    </>
  );
}
