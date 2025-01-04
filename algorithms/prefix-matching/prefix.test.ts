import { describe, it, expect } from "vitest";
import { prefix } from "./prefix";

describe("prefix", () => {
  it("should return false when prefix > str", () => {
    const str = "Con";
    const p = "Connor";
    expect(prefix(str, p)).toEqual(false);
  });

  it("should return false when str is empty", () => {
    const str = "";
    const p = "Connor";
    expect(prefix(str, p)).toEqual(false);
  });

  it("should return false when prefix is empty", () => {
    const str = "Connor";
    const p = "";
    expect(prefix(str, p)).toEqual(false);
  });

  it("should return false when prefix is not part of str", () => {
    const str = "Connor";
    const p = "Cona";
    expect(prefix(str, p)).toEqual(false);
  });

  it("should handle capitalization correctly", () => {
    const str = "Connor";
    const p = "con";
    expect(prefix(str, p)).toEqual(false);
  });

  it("should return true when prefix is a prefix", () => {
    const str = "Connor";
    const p = "Con";
    expect(prefix(str, p)).toEqual(true);
  });

  it("should return true prefix and string match", () => {
    const str = "Connor";
    const p = "Connor";
    expect(prefix(str, p)).toEqual(true);
  });
});
