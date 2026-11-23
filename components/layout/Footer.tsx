"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  if (usePathname().startsWith("/rooms")) return null;

  return (
    <footer className="mt-8 border-t border-neutral-200 bg-neutral-50 px-5 py-8 pb-24 text-sm text-neutral-600 lg:px-10 lg:pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
        <p>© 2026 Airbnb Clone · Proyecto educativo</p>
        <p>Privacidad · Términos · Mapa del sitio</p>
      </div>
    </footer>
  );
}
