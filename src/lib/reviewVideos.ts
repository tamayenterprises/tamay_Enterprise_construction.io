/** YouTube video IDs — edit to add more testimonial embeds */
export type ReviewVideoProject = {
  id: string;
  /** One, two, or three+ YouTube IDs per project */
  videos: string[];
  /** Client name heading above the video */
  title?: string;
  /** Display name for compact video cards */
  clientName?: string;
};

export const REVIEW_VIDEO_PROJECTS: ReviewVideoProject[] = [
  {
    id: "joe-testimonial",
    videos: ["h6SrSb-LzBQ"],
    title: "Joe Testimonial",
    clientName: "Joe",
  },
  {
    id: "commercial-bridgeport",
    videos: ["JGxUJl-r2Nk"],
    title: "Abir - testimonial",
    clientName: "Abir",
  },
  {
    id: "ada-commercial-bathrooms-ny",
    videos: ["af5JYQe6ltY"],
    title: "Chris Yoon - testimonial",
    clientName: "Chris Yoon",
  },
  {
    id: "coop-department-remodeling",
    videos: ["_eEQVb19zHA"],
    title: "Lucas de valdivia - testimonial",
    clientName: "Lucas de Valdivia",
  },
  {
    id: "wilton-bathroom-remodeling",
    videos: ["xhyHDnt_G8g"],
    title: "MARIE-PAUL - testimonial",
    clientName: "Marie-Paul",
  },
  {
    id: "west-haven-department-remodeling",
    videos: ["XTKenyMkdks"],
    title: "Rosemary - testimonial",
    clientName: "Rosemary",
  },
  {
    id: "hamden-lights-installation",
    videos: ["2NTfW0PZAIo"],
    title: "Maryse - testimonial",
    clientName: "Maryse",
  },
  {
    id: "hamden-ceiling-restoration",
    videos: ["NLQKQ6vYPeI"],
    title: "Brian & sarah - testimonial",
    clientName: "Brian & Sarah",
  },
  {
    id: "bridgeport-basement-remodeling",
    videos: ["08Ks5xBkHNY"],
    title: "MIKE ADARKWAH - testimonial",
    clientName: "Mike Adarkwah",
  },
  {
    id: "glastonbury-testimonial",
    videos: ["z3yUrFNa3WM"],
    title: "Erik Heller Testimonial",
    clientName: "Erik Heller",
  },
];
