import type { Metadata } from "next";
import RoomDetail from "@/components/sections/RoomDetail";
import { getProperty, properties } from "@/lib/data";

type RoomPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const property = getProperty((await params).id);
  return { title: property ? `${property.title} - Airbnb Clone` : "Alojamiento no encontrado" };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  return <RoomDetail key={id} id={id} />;
}
