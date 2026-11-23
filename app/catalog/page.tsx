import type { Metadata } from "next";
import CatalogView from "@/components/sections/CatalogView";
import Navbar from "@/components/layout/Navbar";
import { properties } from "@/lib/data";

export const metadata: Metadata = { title: "Catálogo - Airbnb Clone" };

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <CatalogView properties={properties} />
    </>
  );
}
