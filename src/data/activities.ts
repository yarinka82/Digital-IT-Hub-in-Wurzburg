export type Activities = {
  id: string;
  title: string;
  description: string;
  fotoUrl: string;
  alt: string;
  link?: string;
};

export const activities: Activities[] = [
  {
    id: "1",
    title: "Workshops",
    description:
      "Praktische Trainings, Hackathons und Coding-Sessions für alle IT-Begeisterten.",
    fotoUrl: "/images/workshop.jpg",
    alt: "",
    link: "/workshops",
  },
  {
    id: "2",
    title: "Projekte",
    description:
      "Gemeinsame Open-Source-Projekte, Softwareentwicklung und digitale Innovationen.",
    fotoUrl: "/images/projects.jpg",
    alt: "",
    link: "/projekts",
  },
  {
    id: "3",
    title: "Events & Networking",
    description:
      "Treffen, Konferenzen und Networking-Events für Austausch und Zusammenarbeit.",
    fotoUrl: "/images/events.jpg",
    alt: "",
    link: "/events",
  },
];
