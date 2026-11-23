"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import ImageGallery from "@/components/sections/ImageGallery";
import RoomContent from "@/components/sections/RoomContent";
import FavoriteButton from "@/components/ui/FavoriteButton";
import { MOCK_LOAD_DELAY_MS } from "@/constants";
import { getProperty } from "@/lib/data";
import type { Property } from "@/types";

type State = { status: "loading" } | { status: "missing" } | { status: "ready"; property: Property };

function RoomSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse pb-32 lg:px-10 lg:pt-6" aria-busy aria-label="Cargando alojamiento">
      <div className="aspect-[4/5] bg-neutral-200 sm:aspect-[4/3] lg:rounded-3xl" />
      <div className="space-y-4 px-6 pt-8">
        <div className="mx-auto h-8 w-2/3 rounded bg-neutral-200 lg:mx-0" />
        <div className="mx-auto h-4 w-4/5 rounded bg-neutral-200 lg:mx-0" />
        <div className="mx-auto h-4 w-3/5 rounded bg-neutral-200 lg:mx-0" />
        <div className="h-24 rounded-2xl bg-neutral-200" />
      </div>
    </div>
  );
}

export default function RoomDetail({ id }: { id: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  // Simula la petición asíncrona del alojamiento por id.
  useEffect(() => {
    const timer = setTimeout(() => {
      const property = getProperty(id);
      setState(property ? { status: "ready", property } : { status: "missing" });
    }, MOCK_LOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, [id]);

  if (state.status === "loading") return <RoomSkeleton />;
  if (state.status === "missing") notFound();

  const { property } = state;

  return (
    <div className="mx-auto max-w-6xl bg-white pb-32 lg:px-10 lg:pb-16 lg:pt-6">
      <div className="relative">
        <ImageGallery images={property.images} alt={property.title} />
        <div className="absolute inset-x-0 top-0 flex justify-between p-4">
          <Link
            href="/"
            aria-label="Volver"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg shadow"
          >
            ←
          </Link>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Compartir"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow"
            >
              ⇪
            </button>
            <FavoriteButton className="!h-10 !w-10 bg-white/80 shadow" />
          </div>
        </div>
      </div>

      <RoomContent property={property} />
    </div>
  );
}
