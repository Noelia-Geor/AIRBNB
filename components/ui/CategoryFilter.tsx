"use client";

import type { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function CategoryFilter({ categories, activeId, onChange }: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Categorías"
      className="flex gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((c) => {
        const active = c.id === activeId;
        return (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(c.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-medium shadow-md transition-colors ${
              active ? "bg-neutral-900 text-white" : "bg-white hover:bg-neutral-100"
            }`}
          >
            <span aria-hidden>{c.emoji}</span>
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
