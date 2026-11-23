interface GalleryControlsProps {
  index: number;
  last: number;
  onChange: (index: number) => void;
}

export default function GalleryControls({ index, last, onChange }: GalleryControlsProps) {
  if (last < 1) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Foto anterior"
        disabled={index === 0}
        onClick={() => onChange(index - 1)}
        className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 shadow hover:bg-white disabled:opacity-40 sm:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Foto siguiente"
        disabled={index === last}
        onClick={() => onChange(index + 1)}
        className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 shadow hover:bg-white disabled:opacity-40 sm:flex"
      >
        ›
      </button>
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-1.5 lg:bottom-4" aria-hidden>
        {Array.from({ length: last + 1 }, (_, i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </>
  );
}
