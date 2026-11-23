import Link from "next/link";

interface NavbarProps {
  /** Si se proporciona, la barra es un input controlado de búsqueda en tiempo real. */
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  /** Contenido bajo la barra de búsqueda (p. ej. CategoryFilter). */
  children?: React.ReactNode;
}

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const pillClass =
  "mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3.5 text-[15px] shadow-md";

export default function Navbar({ searchValue, onSearchChange, children }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white px-5 pb-3 pt-5 shadow-sm lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        <Link href="/" className="hidden text-2xl font-bold text-rose-500 lg:block">
          airbnb
        </Link>
        {onSearchChange ? (
          <label className={`${pillClass} focus-within:ring-2 focus-within:ring-rose-400`}>
            <SearchIcon />
            <span className="sr-only">Buscar alojamientos</span>
            <input
              type="search"
              value={searchValue ?? ""}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Empieza a buscar"
              className="w-full bg-transparent font-semibold outline-none placeholder:text-neutral-900"
            />
          </label>
        ) : (
          <Link href="/" className={`${pillClass} justify-center font-semibold`}>
            <SearchIcon />
            Empieza a buscar
          </Link>
        )}
        <span className="hidden w-24 lg:block" />
      </div>
      {children && <div className="mx-auto mt-4 max-w-7xl">{children}</div>}
    </header>
  );
}
