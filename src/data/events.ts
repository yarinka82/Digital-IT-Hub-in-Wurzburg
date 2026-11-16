export const events = [
  {
    id: "1",
    type: "workshop",
    title: "Them Events",
    description:
      "test test test test test test test test test test test test test test test",
    date: "20.11.2026",
    time: "16:30",
    place: "Wurcburg, datenstrasse 16",
  },
  {
    id: "2",
    type: "workshop",
    title: "Them2 Networking",
    description:
      "test test test test test test test test test test test test test test test",
    date: "26.11.2026",
    time: "12:30",
    place: "Wurcburg, datenstrasse 16",
  },
  {
    id: "3",
    type: "event",
    title: "Them workshop",
    description:
      "test test test test test test test test test test test test test test test",
    date: "20.11.2026",
    time: "16:30",
    place: "Wurcburg, datenstrasse 16",
    get link() {
      return `/workshops/${this.id}`;
    },
  },
  {
    id: "4",
    type: "event",
    title: "Them2 workshop",
    description:
      "test test test test test test test test test test test test test test test",
    date: "26.11.2026",
    time: "12:30",
    place: "Wurcburg, datenstrasse 16",
    get link() {
      return `/workshops/${this.id}`;
    },
  },
  {
    id: "5",
    type: "project",
    image: "/public/images/projects.jpg",
    title: "Name projecte",
    description: "новий проект.....",
    date: "20.11.2026",
  },
  {
    id: "6",
    type: "project",
    image: "/public/images/projects.jpg",
    title: "Name projecte 2",
    description: "новий проект 2.....",
    date: "20.11.2026",
  },
];
