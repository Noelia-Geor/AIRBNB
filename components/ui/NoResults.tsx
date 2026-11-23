interface NoResultsProps {
  message?: string;
  onReset?: () => void;
}

export default function NoResults({
  message = "No hay alojamientos que coincidan con tu búsqueda.",
  onReset,
}: NoResultsProps) {
  return (
    <div className="mx-5 my-6 rounded-3xl bg-neutral-50 p-10 text-center lg:mx-10">
      <p className="mb-4 text-neutral-600">{message}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl bg-neutral-900 px-5 py-2.5 font-medium text-white"
        >
          Quitar filtros
        </button>
      )}
    </div>
  );
}
