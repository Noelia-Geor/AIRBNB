import Link from "next/link";

export default function RoomNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">Alojamiento no encontrado</h1>
      <Link href="/catalog" className="rounded-xl bg-neutral-900 px-5 py-2.5 font-medium text-white">
        Volver al catálogo
      </Link>
    </div>
  );
}
