export default function GuestCounter({
  value,
  max,
  onChange,
  compact = false,
}: {
  value: number;
  max: number;
  onChange: (value: number) => void;
  compact?: boolean;
}) {
  const button = "flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400 disabled:opacity-30";

  return (
    <div className="flex items-center gap-3" role="group" aria-label="Número de huéspedes">
      <button type="button" aria-label="Menos huéspedes" disabled={value <= 1} onClick={() => onChange(value - 1)} className={button}>
        −
      </button>
      <span className="min-w-[1.5ch] text-center font-medium" aria-live="polite">
        {value}
        {!compact && <span className="sr-only"> huéspedes</span>}
      </span>
      <button type="button" aria-label="Más huéspedes" disabled={value >= max} onClick={() => onChange(value + 1)} className={button}>
        +
      </button>
    </div>
  );
}
