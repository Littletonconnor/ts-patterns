import { describe, it, expect } from "vitest";
import { quickSort } from "./quick-sort";

describe("quickSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const input = [3, 7, 1, 2, 9, 5];
    const expected = [1, 2, 3, 5, 7, 9];
    expect(quickSort(input)).toEqual(expected);
  });

  it("should handle an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    expect(quickSort(input)).toEqual(input);
  });
});
