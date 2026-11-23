/* Dominio */

export interface Coordinates {
  lat: number;
  lng: number;
}

export type PropertyType =
  | "Habitación"
  | "Vivienda"
  | "Casa"
  | "Casa rural"
  | "Loft"
  | "Apartamento"
  | "Villa"
  | "Hotel";

export interface Category {
  id: string;
  name: string;
  emoji: string;
  href?: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
}

export interface Room {
  name: string;
  image: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Host {
  id: string;
  name: string;
  avatar?: string;
  responseRate?: number;
  reviewsCount?: number;
  isSuperhost?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType | string;
  location: string;
  region: string;
  /** Ids de {@link Category} a los que pertenece el alojamiento. */
  categories: string[];
  coordinates?: Coordinates;
  dates: string;
  /** Etiqueta mostrada en las tarjetas, p. ej. "Anfitrión particular". */
  host: string;
  hostProfile?: Host;
  pricePerTotal: number;
  rating: number;
  reviews: number;
  guestFavorite: boolean;
  image: string;
  images: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  description?: string;
  amenities?: Amenity[];
  highlights: Highlight[];
  rooms: Room[];
  reviewsList?: Review[];
}

/* Búsqueda, filtros y ordenamiento */

export interface SearchParams {
  location: string;
  checkIn: string | null;
  checkOut: string | null;
  guests: number;
}

export interface FilterState {
  region: string;
  types: string[];
  minPrice: number;
  maxPrice: number;
  amenities: string[];
  minRating: number;
}

export type SortOption = "relevance" | "price-asc" | "price-desc" | "rating" | "newest";

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}

/* Reservas */

export interface BookingForm {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface BookingQuote {
  nights: number;
  subtotal: number;
  fees: number;
  total: number;
}

/* Respuestas de API (simulada o real) */

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationState;
}
