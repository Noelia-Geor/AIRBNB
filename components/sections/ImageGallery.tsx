"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import GalleryControls from "@/components/sections/GalleryControls";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const last = images.length - 1;

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)));

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Fotos de ${alt}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      className="relative aspect-[4/5] overflow-hidden bg-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-rose-400 sm:aspect-[4/3] lg:rounded-3xl"
    >
      <div className="relative h-full">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-transform duration-300 ${
              i === index ? "translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`${alt} - foto ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(min-width: 1152px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <GalleryControls index={index} last={last} onChange={go} />

      <span
        aria-live="polite"
        className="absolute bottom-10 right-4 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-semibold text-white lg:bottom-4"
      >
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
