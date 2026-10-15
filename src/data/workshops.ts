export const workshops = [
  {
    id: "1",
    title: "Them workshop",
    description: "sdgjldsjglksdjgljskl",
    date: "20.11.2026",
    time: "16:30",
    place: "Wurcburg, datenstrasse 16",
    get link() {
      return `/workshops/${this.id}`;
    },
  },
  {
    id: "2",
    title: "Them2 workshop",
    description: "sdgjldsjglksdjgljskl",
    date: "26.11.2026",
    time: "12:30",
    place: "Wurcburg, datenstrasse 16",
    get link() {
      return `/workshops/${this.id}`;
    },
  },
];
