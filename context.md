# Contexto del Proyecto: Airbnb Frontend Clone

## 🎯 Descripción General

Proyecto de clonación del frontend de Airbnb utilizando **Next.js** y **Tailwind CSS**. El objetivo es crear una experiencia de usuario funcional y atractiva que permita explorar, buscar y visualizar propiedades de alojamiento.

---

## 👥 Perfil del Usuario Objetivo

**Persona: Viajero en busca de alojamiento**

- **Edad:** 25-55 años
- **Comportamiento:** Busca explorar destinos, comparar propiedades, revisar reseñas y hacer reservas
- **Dispositivos:** Desktop y mobile
- **Meta Principal:** Encontrar y reservar un alojamiento que cumpla con sus necesidades (precio, ubicación, comodidades, fechas disponibles)
- **Secundaria:** Comparar múltiples opciones, leer opiniones de otros huéspedes, visualizar galería de fotos y detalles de la propiedad

---

## 📄 Vistas del Proyecto

### 1. **Inicio (Home) - `/`**

#### Descripción
Página de bienvenida principal que atrae y guía al usuario. Presenta una búsqueda destacada, categorías de destinos populares, propiedades recomendadas y una experiencia intuitiva.

#### Funcionalidad
- Búsqueda prominente (ubicación, fechas, huéspedes)
- Carrusel/grid de destinos populares
- Sección de propiedades destacadas o recomendadas
- Call-to-action hacia el catálogo
- Navegación clara hacia otras secciones

#### Componentes Principales
| Componente | Función |
|-----------|---------|
| `Navbar` | Encabezado con logo, navegación y opciones de usuario |
| `SearchBar` | Barra de búsqueda avanzada con filtros (ubicación, fechas, huéspedes) |
| `HeroSection` | Imagen de fondo con texto introductorio y llamada a acción |
| `CategoryCard` | Tarjetas de categorías/destinos (Playas, Montañas, Ciudades, etc.) |
| `PropertyGrid` | Galería de propiedades recomendadas con imágenes y ratings |
| `Footer` | Pie de página con links útiles y información |

---

### 2. **Catálogo (Listings) - `/catalog`**

#### Descripción
Página de búsqueda y filtrado de propiedades. Muestra un listado completo de propiedades con opciones avanzadas de filtrado y ordenamiento.

#### Funcionalidad
- Listado grid o de tarjetas de propiedades
- Filtros laterales (rango de precio, tipo de propiedad, comodidades, rating, etc.)
- Opciones de ordenamiento (precio, rating, más recientes)
- Búsqueda y filtrado en tiempo real
- Paginación o scroll infinito
- Mapa interactivo (opcional) con ubicación de propiedades

#### Componentes Principales
| Componente | Función |
|-----------|---------|
| `SearchBar` | Búsqueda persistente con filtros básicos |
| `FilterSidebar` | Panel lateral con filtros (precio, tipo, comodidades, calificación) |
| `PropertyCard` | Tarjeta individual de propiedad con imagen, precio, rating y ubicación |
| `PropertyGrid` | Contenedor de grid responsivo para múltiples tarjetas |
| `SortOptions` | Selector de ordenamiento (precio asc/desc, rating, etc.) |
| `Pagination` | Controles de paginación o indicador de scroll infinito |
| `MapView` | (Opcional) Mapa con pins de propiedades |
| `NoResults` | Mensaje cuando no hay resultados que coincidan con filtros |

---

### 3. **Detalle de Habitación (Room Details) - `/rooms/[id]`**

#### Descripción
Página detallada de una propiedad específica. Muestra información completa, galería de imágenes, amenidades, reseñas de huéspedes y opciones de reserva.

#### Funcionalidad
- Galería de fotos (carousel o grid expandible)
- Información detallada de la propiedad (descripción, ubicación, reglas, etc.)
- Lista completa de comodidades/amenidades
- Información del anfitrión
- Reseñas y ratings de huéspedes anteriores
- Widget de reserva (disponibilidad, cálculo de precio, fechas)
- Mapa con ubicación exacta
- Botón de contacto/mensaje al anfitrión

#### Componentes Principales
| Componente | Función |
|-----------|---------|
| `Navbar` | Encabezado con logo y navegación |
| `ImageGallery` | Galería de fotos con vista previa y modal de expansión |
| `PropertyHeader` | Título, ubicación, rating general y favoritos |
| `Description` | Texto descriptivo completo de la propiedad |
| `AmenitiesList` | Listado de comodidades con iconos |
| `HostCard` | Información del anfitrión (foto, nombre, respuesta rate, reseñas) |
| `ReviewsSection` | Reseñas de huéspedes con ratings y comentarios |
| `PricingWidget` | Calculadora de precio con selector de fechas y botón de reserva |
| `MapComponent` | Mapa embebido mostrando ubicación de la propiedad |
| `ContactButton` | Botón para contactar al anfitrión |
| `BookingForm` | Formulario de selección de fechas y confirmación |

---

## 🏗️ Componentes Reutilizables

Componentes que atraviesan múltiples vistas:

| Componente | Ubicación | Uso |
|-----------|----------|-----|
| `Navbar` | Global | Navegación principal en todas las páginas |
| `Footer` | Global | Pie de página en todas las páginas |
| `Button` | Global | Botones de acción (CTA, reservar, filtrar, etc.) |
| `Card` | Múltiples | Contenedor base para propiedades, reseñas, etc. |
| `RatingBadge` | Catálogo, Detalle | Muestra calificación (ej: 4.9 ⭐) |
| `PriceDisplay` | Catálogo, Detalle | Formato consistente de precios |
| `Modal` | Global | Diálogos modales (imágenes expandidas, confirmaciones) |
| `Spinner/Loader` | Global | Indicador de carga |
| `SearchBar` | Inicio, Catálogo | Búsqueda de propiedades |

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js (React)
- **Estilos:** Tailwind CSS
- **Componentes:** Componentes funcionales con hooks
- **Estado:** React Context / Zustand (si es necesario)
- **Enrutamiento:** Next.js App Router o Pages Router
- **APIs:** Integración con endpoint de propiedades (simulada o real)

---

## 📊 Flujo de Usuario Esperado

```
1. Usuario llega a inicio (/)
   ↓
2. Busca o selecciona categoría
   ↓
3. Se redirige a catálogo (/catalog) con filtros aplicados
   ↓
4. Explora propiedades, ajusta filtros
   ↓
5. Hace clic en una propiedad
   ↓
6. Ve detalles en /rooms/[id]
   ↓
7. Revisa fotos, amenidades, reseñas, pricing
   ↓
8. Realiza reserva (mockup o formulario)
```

---

## 📝 Notas de Desarrollo

- Mantener diseño **responsive** (mobile-first)
- Componentes deben ser **reutilizables** y **modularizados**
- Usar **Tailwind CSS** para toda la estilización
- Implementar **estados de carga** y **manejo de errores**
- Consideraciones de **accesibilidad (a11y)** en componentes interactivos
- Preparar componentes para **integración futura con APIs reales**
