import type { Category } from "@/types";

export const ALL_CATEGORY_ID = "all";

export const CATEGORIES: Category[] = [
  { id: ALL_CATEGORY_ID, name: "Todo", emoji: "🌍" },
  { id: "playas", name: "Playas", emoji: "🏖️" },
  { id: "montanas", name: "Montañas", emoji: "⛰️" },
  { id: "ciudades", name: "Ciudades", emoji: "🏙️" },
  { id: "villas", name: "Villas", emoji: "🏰" },
  { id: "rurales", name: "Casas rurales", emoji: "🏕️" },
];

/** Retardo de la carga asíncrona simulada, en milisegundos. */
export const MOCK_LOAD_DELAY_MS = 900;
