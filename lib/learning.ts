export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type Language = "English" | "Spanish" | "German";
export type PartOfDay = "morning" | "afternoon" | "evening";

export type Question = { prompt: string; options: string[]; answer: number };

export const questions: Question[] = [
  { prompt: "She ___ from Canada.", options: ["are", "is", "be", "am"], answer: 1 },
  { prompt: "I ___ to the gym every Monday.", options: ["goes", "going", "go", "gone"], answer: 2 },
  { prompt: "Yesterday we ___ a great film.", options: ["see", "seen", "have seen", "saw"], answer: 3 },
  { prompt: "There isn't ___ milk left in the fridge.", options: ["some", "any", "many", "a"], answer: 1 },
  { prompt: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "would stay", "stayed"], answer: 1 },
  { prompt: "I have lived here ___ 2019.", options: ["for", "since", "from", "during"], answer: 1 },
  { prompt: "The report ___ by Friday.", options: ["must finish", "must be finished", "must finishing", "must have finish"], answer: 1 },
  { prompt: "If I ___ more time, I would learn the piano.", options: ["have", "had", "will have", "would have"], answer: 1 },
  { prompt: "She denied ___ the email.", options: ["to send", "send", "sending", "sent"], answer: 2 },
  { prompt: "Hardly ___ the house when it started to rain.", options: ["I had left", "had I left", "I left", "did I leave"], answer: 1 },
];

export function score(answers: (number | null | undefined)[]): number {
  return questions.reduce((total, q, i) => total + (answers[i] === q.answer ? 1 : 0), 0);
}

export function levelFor(points: number): Level {
  if (points <= 2) return "A1";
  if (points <= 4) return "A2";
  if (points <= 6) return "B1";
  if (points <= 8) return "B2";
  return "C1";
}

export const levelInfo: Record<Level, { name: string; text: string }> = {
  A1: { name: "Beginner", text: "You can start from the basics: introductions, numbers, everyday phrases." },
  A2: { name: "Elementary", text: "You handle simple conversations. Next comes the past tense and longer answers." },
  B1: { name: "Intermediate", text: "You get by in most situations. The course works on fluency and fewer pauses." },
  B2: { name: "Upper intermediate", text: "You speak with confidence. We polish accuracy, idioms and work topics." },
  C1: { name: "Advanced", text: "You are close to fluent. Advanced groups focus on nuance, debate and writing." },
};

export type Group = {
  id: string;
  language: Language;
  level: Level;
  days: string;
  startMinutes: number;
  teacher: string;
  seatsLeft: number;
  starts: string;
};

export const groups: Group[] = [
  { id: "en-a1-1", language: "English", level: "A1", days: "Mon and Wed", startMinutes: 18 * 60 + 30, teacher: "Maya Collins", seatsLeft: 3, starts: "Nov 2" },
  { id: "en-a2-1", language: "English", level: "A2", days: "Tue and Thu", startMinutes: 8 * 60, teacher: "Ben Ortega", seatsLeft: 5, starts: "Nov 3" },
  { id: "en-b1-1", language: "English", level: "B1", days: "Mon and Thu", startMinutes: 12 * 60 + 30, teacher: "Maya Collins", seatsLeft: 2, starts: "Nov 2" },
  { id: "en-b2-1", language: "English", level: "B2", days: "Tue and Fri", startMinutes: 19 * 60, teacher: "Ruth Adeyemi", seatsLeft: 4, starts: "Nov 6" },
  { id: "en-c1-1", language: "English", level: "C1", days: "Sat", startMinutes: 10 * 60, teacher: "Ruth Adeyemi", seatsLeft: 6, starts: "Nov 7" },
  { id: "es-a1-1", language: "Spanish", level: "A1", days: "Mon and Wed", startMinutes: 19 * 60, teacher: "Lucía Marín", seatsLeft: 4, starts: "Nov 2" },
  { id: "es-a1-2", language: "Spanish", level: "A1", days: "Sat", startMinutes: 9 * 60 + 30, teacher: "Diego Ruiz", seatsLeft: 6, starts: "Nov 7" },
  { id: "es-a2-1", language: "Spanish", level: "A2", days: "Tue and Thu", startMinutes: 18 * 60, teacher: "Lucía Marín", seatsLeft: 1, starts: "Nov 3" },
  { id: "es-b1-1", language: "Spanish", level: "B1", days: "Wed and Fri", startMinutes: 13 * 60, teacher: "Diego Ruiz", seatsLeft: 5, starts: "Nov 4" },
  { id: "de-a1-1", language: "German", level: "A1", days: "Tue and Thu", startMinutes: 7 * 60 + 30, teacher: "Jonas Weber", seatsLeft: 6, starts: "Nov 3" },
  { id: "de-a2-1", language: "German", level: "A2", days: "Mon and Wed", startMinutes: 17 * 60 + 30, teacher: "Jonas Weber", seatsLeft: 3, starts: "Nov 2" },
  { id: "de-b1-1", language: "German", level: "B1", days: "Sat", startMinutes: 11 * 60, teacher: "Anna Keller", seatsLeft: 4, starts: "Nov 7" },
];

export function partOfDay(minutes: number): PartOfDay {
  if (minutes < 12 * 60) return "morning";
  if (minutes < 17 * 60) return "afternoon";
  return "evening";
}

export function filterGroups(list: Group[], f: { language?: Language; level?: Level; part?: PartOfDay }): Group[] {
  return list.filter(
    (g) =>
      (!f.language || g.language === f.language) &&
      (!f.level || g.level === f.level) &&
      (!f.part || partOfDay(g.startMinutes) === f.part),
  );
}

export function formatTime(minutes: number): string {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}
