import type { Amenity, Host, Property } from "@/types";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const IMAGES = {
  terrace: "photo-1564013799919-ab600027ffc6",
  pool: "photo-1613490493576-7fde63acd811",
  loft: "photo-1522708323590-d24dbb6b0267",
  beach: "photo-1502672260266-1c1ef2d93688",
  apartment: "photo-1600210492486-724fe5c67fb0",
  villa: "photo-1512917774080-9991f1c4c750",
  house: "photo-1600585154340-be6161a56a0c",
  hotel: "photo-1566073771259-6a8506099945",
  bedroomA: "photo-1560448204-e02f11c3d0e2",
  bedroomB: "photo-1505693416388-ac5ce068fe85",
  bedroomC: "photo-1522771739844-6a9f6d5f14af",
};

const highlights = [
  {
    title: "En la montaña",
    description:
      "Una casa privada en una ladera, rodeada de montañas, con unas vistas que los huéspedes califican de espectaculares.",
  },
  {
    title: "Alojamiento con zona de estar exterior privada y piscina",
    description: "Piscina privada, barbacoa de carbón y tumbonas para disfrutar todo el día.",
  },
];

const rooms = (a: string, b: string, c: string) => [
  { name: "Dormitorio 1", image: img(a, 1000) },
  { name: "Dormitorio 2", image: img(b, 1000) },
  { name: "Dormitorio 3", image: img(c, 1000) },
];

const amenities: Amenity[] = [
  { id: "pool", name: "Piscina privada", icon: "🏊" },
  { id: "wifi", name: "Wifi", icon: "📶" },
  { id: "kitchen", name: "Cocina equipada", icon: "🍳" },
  { id: "bbq", name: "Barbacoa de carbón", icon: "🔥" },
  { id: "ac", name: "Aire acondicionado", icon: "❄️" },
  { id: "parking", name: "Aparcamiento gratuito", icon: "🅿️" },
  { id: "tv", name: "Televisión", icon: "📺" },
  { id: "washer", name: "Lavadora", icon: "🧺" },
  { id: "terrace", name: "Terraza con vistas", icon: "🌅" },
  { id: "pets", name: "Se admiten mascotas", icon: "🐾" },
];

const hosts: Host[] = [
  { id: "h1", name: "Inés", responseRate: 100, reviewsCount: 48, isSuperhost: true },
  { id: "h2", name: "Carlos", responseRate: 96, reviewsCount: 112, isSuperhost: true },
  { id: "h3", name: "Marta", responseRate: 90, reviewsCount: 27, isSuperhost: false },
];

const base = {
  dates: "27–29 nov",
  host: "Anfitrión particular",
  guestFavorite: true,
  description:
    "Un alojamiento tranquilo y luminoso, ideal para desconectar. Disfruta de espacios amplios, buenas vistas y todo lo necesario para una estancia cómoda.",
  amenities,
  highlights,
  rooms: rooms(IMAGES.bedroomA, IMAGES.bedroomB, IMAGES.bedroomC),
};

const baseProperties: Property[] = [
  {
    ...base,
    id: "1",
    categories: ["ciudades"],
    title: "Habitación en Las Palmas de Gran Canaria",
    type: "Habitación",
    location: "Las Palmas de Gran Canaria",
    region: "Gran Canaria",
    pricePerTotal: 88,
    rating: 4.83,
    reviews: 41,
    image: img(IMAGES.terrace),
    images: [IMAGES.terrace, IMAGES.apartment, IMAGES.loft].map((i) => img(i, 1000)),
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
  },
  {
    ...base,
    id: "2",
    categories: ["montanas", "villas"],
    title: "Villa Inés",
    type: "Vivienda",
    location: "San Bartolomé de Tirajana",
    region: "Gran Canaria",
    pricePerTotal: 574,
    rating: 5.0,
    reviews: 7,
    image: img(IMAGES.pool),
    images: [IMAGES.pool, IMAGES.villa, IMAGES.house, IMAGES.terrace].map((i) => img(i, 1000)),
    guests: 12,
    bedrooms: 4,
    beds: 7,
    baths: 2,
  },
  {
    ...base,
    id: "3",
    categories: ["playas"],
    title: "Casa con vistas al mar",
    type: "Casa",
    location: "Maspalomas",
    region: "Gran Canaria",
    pricePerTotal: 312,
    rating: 4.9,
    reviews: 98,
    image: img(IMAGES.beach),
    images: [IMAGES.beach, IMAGES.house, IMAGES.villa].map((i) => img(i, 1000)),
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
  },
  {
    ...base,
    id: "4",
    categories: ["playas", "ciudades"],
    title: "Loft luminoso junto a la playa",
    type: "Loft",
    location: "Arrecife",
    region: "Lanzarote",
    pricePerTotal: 164,
    rating: 4.72,
    reviews: 76,
    image: img(IMAGES.loft),
    images: [IMAGES.loft, IMAGES.apartment].map((i) => img(i, 1000)),
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
  },
  {
    ...base,
    id: "5",
    categories: ["playas"],
    title: "Apartamento en Playa Blanca",
    type: "Apartamento",
    location: "Playa Blanca",
    region: "Lanzarote",
    pricePerTotal: 198,
    rating: 4.88,
    reviews: 120,
    image: img(IMAGES.apartment),
    images: [IMAGES.apartment, IMAGES.loft].map((i) => img(i, 1000)),
    guests: 4,
    bedrooms: 2,
    beds: 3,
    baths: 1,
  },
  {
    ...base,
    id: "6",
    categories: ["villas", "playas"],
    title: "Villa de lujo con piscina",
    type: "Villa",
    location: "Costa Teguise",
    region: "Lanzarote",
    pricePerTotal: 640,
    rating: 4.95,
    reviews: 45,
    image: img(IMAGES.villa),
    images: [IMAGES.villa, IMAGES.pool, IMAGES.house].map((i) => img(i, 1000)),
    guests: 10,
    bedrooms: 5,
    beds: 8,
    baths: 4,
  },
  {
    ...base,
    id: "7",
    categories: ["rurales", "montanas"],
    title: "Casa rural entre viñedos",
    type: "Casa rural",
    location: "La Geria",
    region: "Lanzarote",
    pricePerTotal: 255,
    rating: 4.81,
    reviews: 33,
    image: img(IMAGES.house),
    images: [IMAGES.house, IMAGES.terrace].map((i) => img(i, 1000)),
    guests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 2,
  },
  {
    ...base,
    id: "8",
    categories: ["ciudades"],
    title: "Hotel boutique con spa",
    type: "Hotel",
    location: "Puerto del Carmen",
    region: "Lanzarote",
    pricePerTotal: 289,
    rating: 4.67,
    reviews: 210,
    image: img(IMAGES.hotel),
    images: [IMAGES.hotel, IMAGES.pool].map((i) => img(i, 1000)),
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
  },
];

export const properties: Property[] = baseProperties.map((p, i) => ({
  ...p,
  hostProfile: hosts[i % hosts.length],
}));

export const getProperty = (id: string) => properties.find((p) => p.id === id);

export const getRegions = () => [...new Set(properties.map((p) => p.region))];

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const matchesSearch = (property: Property, query: string) => {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const haystack = normalize(
    [property.title, property.type, property.location, property.region].join(" "),
  );
  return terms.every((term) => haystack.includes(term));
};

export const formatPrice = (value: number) => `${value.toLocaleString("es-ES")} €`;

export const formatRating = (value: number) => value.toFixed(value === 5 ? 1 : 2).replace(".", ",");
