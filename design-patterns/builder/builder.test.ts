import { describe, it, expect } from "vitest";
import { UserBuilder } from "./builder";

describe("UserBuilder", () => {
  it("should build a user with required properties", () => {
    const user = new UserBuilder().setName("Alice").setAge(30).build();

    expect(user.name).toBe("Alice");
    expect(user.age).toBe(30);
    expect(user.email).toBeUndefined();
  });

  it("should build a user with all properties", () => {
    const user = new UserBuilder()
      .setName("Bob")
      .setAge(25)
      .setEmail("bob@example.com")
      .build();

    expect(user.name).toBe("Bob");
    expect(user.age).toBe(25);
    expect(user.email).toBe("bob@example.com");
  });
});
