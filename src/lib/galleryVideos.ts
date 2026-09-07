import type { ReviewVideoProject } from "./reviewVideos";

/** New year promotion video — edit video ID in videos[] */
export const GALLERY_PROMOTION_VIDEO: ReviewVideoProject = {
  id: "new-year-promotion-2026",
  title: "Promotions",
  videos: ["l26oQaGBskk"],
};

/**
 * YouTube project embeds for the gallery page — edit videos[] per project.
 * Testimonial-only clips stay on the Reviews page and are omitted here.
 */
export const GALLERY_VIDEO_PROJECTS: ReviewVideoProject[] = [
  {
    id: "complete-basement-renovation",
    title: "Complete basement Renovation",
    videos: ["8rvPhBm1mo8", "d90U6tv0JtU", "OLpVtJWZDdg"],
  },
  {
    id: "full-bathroom-renovation",
    title: "Full Bathroom Renovation",
    videos: ["VpU0K7fnrAY"],
  },
  {
    id: "retaining-wall",
    title: "Retaining wall",
    videos: ["9KakXUv9-kE"],
  },
  {
    id: "full-basement-transformation",
    title: "Full basement transformation",
    // Skip 08Ks5xBkHNY (Mike testimonial — Reviews page)
    videos: ["uDI5DCx2Fl4", "X4SXVcduADY"],
  },
  {
    id: "home-exterior-upgrade-fairfield",
    title: "Home Exterior Upgrade",
    videos: ["VGCl00gR_pY"],
  },
  {
    id: "garage-restore-paint-west-haven",
    title: "Garage Makeover",
    videos: ["5nTWmLdlK3o"],
  },
  {
    id: "custom-closet-monroe",
    title: "Custom Closet : Monroe, Connecticut",
    videos: ["cftN8lzsoeQ"],
  },
  {
    id: "apartment-relayout-new-haven",
    title: "Apartment Re-Layout & Renovation",
    videos: ["ksDoozeoqh4"],
  },
  {
    id: "coop-apartment-renovation",
    title: "Co-op apartment Renovation",
    // Skip _eEQVb19zHA (Lucas testimonial — Reviews page)
    videos: ["TO9giHibYL4"],
  },
  {
    id: "bathroom-renovation-wilton",
    title: "Bathroom Renovation",
    // Skip xhyHDnt_G8g (Marie-Paul testimonial — Reviews page)
    videos: ["vpFlLodGcWI"],
  },
  {
    id: "full-home-lighting",
    title: "Full Home Lighting Installation",
    // Skip 2NTfW0PZAIo (Maryse testimonial — Reviews page)
    videos: ["1XRrNeVIdZU"],
  },
  {
    id: "vinyl-fences-west-haven",
    title: "Vinyl Fences Installation",
    videos: ["XXwx92Zxows"],
  },
  {
    id: "bathroom-remodel",
    title: "Bathroom Remodel",
    // Skip XTKenyMkdks (Rosemary testimonial — Reviews page)
    videos: ["Sshs4ik5Bik"],
  },
  {
    id: "ada-bathroom-construction",
    title: "ADA BATHROOM CONSTRUCTION",
    // Skip af5JYQe6ltY (Chris Yoon testimonial — Reviews page)
    videos: ["EXIut76IUDU", "hg34-f2Qfok"],
  },
];

/**
 * Gallery Project Stories categories.
 * Commercial is reserved for genuine non-residential work only.
 */
export type GalleryVideoCategory =
  | "Whole-Home & Interior"
  | "Bathrooms"
  | "Exterior & Property"
  | "Specialty & Systems"
  | "Commercial";

export const GALLERY_VIDEO_FILTERS = [
  "All",
  "Whole-Home & Interior",
  "Bathrooms",
  "Exterior & Property",
  "Specialty & Systems",
  "Commercial",
] as const;

export type GalleryVideoFilter = (typeof GALLERY_VIDEO_FILTERS)[number];

/** Explicit project → category map (every GALLERY_VIDEO_PROJECTS id must appear). */
export const GALLERY_PROJECT_CATEGORY: Record<string, GalleryVideoCategory> = {
  "complete-basement-renovation": "Whole-Home & Interior",
  "full-basement-transformation": "Whole-Home & Interior",
  "garage-restore-paint-west-haven": "Whole-Home & Interior",
  "custom-closet-monroe": "Whole-Home & Interior",
  "apartment-relayout-new-haven": "Whole-Home & Interior",
  "coop-apartment-renovation": "Whole-Home & Interior",
  "full-bathroom-renovation": "Bathrooms",
  "bathroom-renovation-wilton": "Bathrooms",
  "bathroom-remodel": "Bathrooms",
  // Genuine commercial ADA build-out (not a residential bath remodel)
  "ada-bathroom-construction": "Commercial",
  "retaining-wall": "Exterior & Property",
  "home-exterior-upgrade-fairfield": "Exterior & Property",
  "vinyl-fences-west-haven": "Exterior & Property",
  "full-home-lighting": "Specialty & Systems",
};

/**
 * Preferred featured clip id (`${projectId}-${index}`) per filter.
 * Ensures category switches spotlight a strong video for that set.
 */
export const GALLERY_FEATURED_BY_FILTER: Record<GalleryVideoFilter, string> = {
  All: "complete-basement-renovation-0",
  "Whole-Home & Interior": "complete-basement-renovation-0",
  Bathrooms: "full-bathroom-renovation-0",
  "Exterior & Property": "home-exterior-upgrade-fairfield-0",
  "Specialty & Systems": "full-home-lighting-0",
  Commercial: "ada-bathroom-construction-0",
};

export type GalleryShowcaseVideo = {
  id: string;
  youtubeId: string;
  title: string;
  category: GalleryVideoCategory;
  projectId: string;
  /** Optional clip label when a project has multiple videos */
  partLabel?: string;
};

function categoryForProject(projectId: string): GalleryVideoCategory {
  const mapped = GALLERY_PROJECT_CATEGORY[projectId];
  if (!mapped) {
    throw new Error(`Gallery project missing category map: ${projectId}`);
  }
  return mapped;
}

/** Flattened showcase entries — one entry per YouTube ID, no drops. */
export const GALLERY_SHOWCASE_VIDEOS: GalleryShowcaseVideo[] = GALLERY_VIDEO_PROJECTS.flatMap(
  (project) => {
    const category = categoryForProject(project.id);
    const title = project.title ?? "Project Video";
    return project.videos.map((youtubeId, index) => ({
      id: `${project.id}-${index}`,
      youtubeId,
      title,
      category,
      projectId: project.id,
      partLabel: project.videos.length > 1 ? `Part ${index + 1}` : undefined,
    }));
  },
);

/** Sort filtered list so the preferred featured clip is first. */
export function orderGalleryVideosForFilter(
  videos: readonly GalleryShowcaseVideo[],
  filter: GalleryVideoFilter,
): GalleryShowcaseVideo[] {
  const featuredId = GALLERY_FEATURED_BY_FILTER[filter];
  const list =
    filter === "All" ? [...videos] : videos.filter((v) => v.category === filter);
  const featuredIndex = list.findIndex((v) => v.id === featuredId);
  if (featuredIndex <= 0) return list;
  const [featured] = list.splice(featuredIndex, 1);
  return [featured!, ...list];
}
