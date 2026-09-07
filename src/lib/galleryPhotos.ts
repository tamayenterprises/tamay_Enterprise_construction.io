/**
 * Gallery Photo Highlights metadata — titles from GALLERY_PHOTO_SLOTS,
 * categories/alt derived from existing titles + asset inspection.
 * Do not invent locations or project scope beyond known titles.
 */

export type GalleryPhotoCategory =
  | "Kitchen"
  | "Bathroom"
  | "Interior"
  | "Exterior"
  | "Commercial"
  | "Detail";

export type GalleryPhotoHighlight = {
  slotKey: string;
  title: string;
  category: GalleryPhotoCategory;
  alt: string;
  src: string;
};

const PHOTO_META: Record<
  string,
  { title: string; category: GalleryPhotoCategory; alt: string; file: string }
> = {
  "gallery.photo1": {
    title: "Modern Kitchen Renovation",
    category: "Kitchen",
    alt: "Modern kitchen with taupe wood-grain cabinets, white countertops, mosaic backsplash, and stainless appliances",
    file: "/gallery/photos/photo-1.png",
  },
  "gallery.photo2": {
    title: "Luxury Bathroom Vanity Installation",
    category: "Bathroom",
    alt: "Luxury bathroom with floating wood vanity, white vessel sink, beige stone tile, and wall-hung fixtures",
    file: "/gallery/photos/photo-2.png",
  },
  "gallery.photo3": {
    title: "Contemporary Bathroom Remodel",
    category: "Bathroom",
    alt: "Contemporary bathroom with floating textured vanity, wood countertop, vessel sink, and dark gray tile walls",
    file: "/gallery/photos/photo-3.png",
  },
  "gallery.photo4": {
    title: "Custom Kitchen Island Build",
    category: "Kitchen",
    alt: "Custom kitchen island with white quartz counters, charcoal cabinetry, walnut accents, and stainless appliances",
    file: "/gallery/photos/photo-4.png",
  },
  "gallery.photo5": {
    title: "Tamay Logistics Fleet",
    category: "Commercial",
    alt: "Tamay Enterprises branded commercial van with navy and gold wrap parked on a city street",
    file: "/gallery/photos/photo-5.png",
  },
  "gallery.photo6": {
    title: "New Home Exterior Project",
    category: "Exterior",
    alt: "Finished home exterior at dusk with white board-and-batten siding, stone accents, and geometric driveway",
    file: "/gallery/photos/photo-6.png",
  },
  "gallery.photo7": {
    title: "Furniture Assembly On-Site",
    category: "Detail",
    alt: "On-site furniture assembly of a white modular shelving unit on a tiled patio",
    file: "/gallery/photos/photo-7.png",
  },
  "gallery.photo8": {
    title: "Upholstery Repair & Assembly",
    category: "Detail",
    alt: "Upholstery repair and furniture assembly craftsmanship detail",
    file: "/gallery/photos/photo-8.png",
  },
  "gallery.photo9": {
    title: "Precision Wall Installation",
    category: "Interior",
    alt: "Precision wall installation detail in a finished interior space",
    file: "/gallery/photos/photo-9.png",
  },
  "gallery.photo10": {
    title: "Commercial Furniture Setup",
    category: "Commercial",
    alt: "Commercial furniture setup with drawer alignment and metal frame installation in a renovated interior",
    file: "/gallery/photos/photo-10.png",
  },
  "gallery.photo11": {
    title: "Bedroom Frame Assembly",
    category: "Detail",
    alt: "Bedroom frame assembly craftsmanship detail",
    file: "/gallery/photos/photo-11.png",
  },
  "gallery.photo12": {
    title: "Vanity Installation Service",
    category: "Bathroom",
    alt: "Bathroom vanity installation service showing finished vanity and fixture detail",
    file: "/gallery/photos/photo-12.png",
  },
};

/** Ordered Photo Highlights list — all 12 existing Gallery photo slots. */
export const GALLERY_PHOTO_HIGHLIGHTS: GalleryPhotoHighlight[] = Object.entries(PHOTO_META).map(
  ([slotKey, meta]) => ({
    slotKey,
    title: meta.title,
    category: meta.category,
    alt: meta.alt,
    src: meta.file,
  }),
);
