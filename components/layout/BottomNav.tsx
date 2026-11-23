"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Explorar", href: "/", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" /></> },
  { label: "Favoritos", href: "/catalog", icon: <path d="M12 21s-7.500-4.600-9.500-9.200C1.200 8.600 3 5 6.400 5c2 0 3.600 1.100 4.600 2.600h2C14 6.100 15.600 5 17.600 5 21 5 22.800 8.600 21.500 11.800 19.500 16.400 12 21 12 21z" /> },
  { label: "Iniciar sesión", href: "#", icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6 18c1.500-2.500 3.500-3.500 6-3.500s4.500 1 6 3.500" /></> },
];

export default function BottomNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/rooms")) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-neutral-200 bg-white pb-2 pt-2 lg:hidden">
      {items.map((item, i) => {
        const active = i === 0 ? pathname === "/" : item.href === pathname;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 text-xs ${active ? "text-rose-500" : "text-neutral-500"}`}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {item.icon}
            </svg>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
