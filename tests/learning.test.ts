import { describe, expect, test } from "vitest";
import { filterGroups, groups, levelFor, questions, score } from "@/lib/learning";

describe("placement test", () => {
  test("has ten questions, each with one correct option that exists", () => {
    expect(questions).toHaveLength(10);
    for (const q of questions) expect(q.options[q.answer]).toBeDefined();
  });

  test("scores the number of correct answers and ignores unanswered ones", () => {
    const allRight = questions.map((q) => q.answer);
    expect(score(allRight)).toBe(10);
    expect(score([])).toBe(0);
    expect(score([questions[0]!.answer, null])).toBe(1);
  });

  test("maps scores to levels", () => {
    expect(levelFor(0)).toBe("A1");
    expect(levelFor(4)).toBe("A2");
    expect(levelFor(6)).toBe("B1");
    expect(levelFor(8)).toBe("B2");
    expect(levelFor(10)).toBe("C1");
  });
});

describe("filterGroups", () => {
  test("returns every group without filters", () => {
    expect(filterGroups(groups, {})).toHaveLength(groups.length);
  });

  test("filters by language, level and time of day together", () => {
    const result = filterGroups(groups, { language: "Spanish", level: "A1", part: "evening" });
    for (const g of result) {
      expect(g.language).toBe("Spanish");
      expect(g.level).toBe("A1");
      expect(g.startMinutes).toBeGreaterThanOrEqual(17 * 60);
    }
  });

  test("returns an empty list when nothing matches", () => {
    expect(filterGroups(groups, { language: "German", level: "C1", part: "morning" })).toEqual([]);
  });
});
