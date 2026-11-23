import type { Host } from "@/types";

export default function HostInfo({ host }: { host: Host }) {
  return (
    <section aria-labelledby="host-title" className="border-t border-neutral-200 py-8">
      <h2 id="host-title" className="sr-only">
        Anfitrión
      </h2>
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xl font-semibold text-white"
        >
          {host.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">Anfitrión: {host.name}</p>
          <p className="text-sm text-neutral-500">
            {host.isSuperhost && "Superanfitrión · "}
            {host.reviewsCount} evaluaciones
            {host.responseRate !== undefined && ` · ${host.responseRate} % de respuesta`}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 rounded-xl border border-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-100"
      >
        Contactar con el anfitrión
      </button>
    </section>
  );
}
