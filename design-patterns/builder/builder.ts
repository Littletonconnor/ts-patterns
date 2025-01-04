/**
 * BUILDER PATTERN
 *
 * The Builder Pattern is used to construct complex objects step-by-step. It can be
 * especially useful when:
 *
 * 1. You have a class with many optional parameters.
 * 2. You need greater clarity than having a single long constructor with many arguments.
 * 3. You want a fluent interface (chaining methods).
 * 4. You prefer immutability on the final product (the 'build' method can return a new object).
 *
 * In this example, we define a UserBuilder that constructs a "User" object.
 *
 * EXAMPLE USAGE:
 * ---------------------------------------------------------------------------------
 *
 * Instead of calling a constructor with multiple optional parameters:
 * new User("Alice", 30, "alice@example.com", ...)
 *
 * We do this:
 * const user = new UserBuilder()
 *    .setName("Alice")
 *    .setAge(30)
 *    .setEmail("alice@example.com")
 *    .build();
 *
 * console.log(user);
 * // => { name: "Alice", age: 30, email: "alice@example.com" }
 *
 * WHY THIS PATTERN IS USEFUL:
 *
 * 1) Clarity: Instead of reading/writing a constructor call with many parameters,
 *    method chaining makes your code self-documenting (it's clear what each parameter is).
 *
 * 2) Flexibility: You can decide which fields to set without needing multiple overloaded
 *    constructors for different parameter combinations.
 *
 * 3) Readability & Maintainability: Easy to add or remove optional parameters in the future
 *    without breaking existing constructor calls.
 */

interface User {
  name: string;
  age: number;
  email?: string;
}

class UserBuilder {
  private name: string = "";
  private age: number = 0;
  private email?: string;

  /**
   * Set the user's name.
   * @param name - The full name of the user
   * @returns {this} So you can chain calls like: builder.setName(...).setAge(...)
   */
  setName(name: string): this {
    this.name = name;
    return this;
  }

  /**
   * Set the user's age.
   * @param age - The age of the user
   * @returns {this}
   */
  setAge(age: number): this {
    this.age = age;
    return this;
  }

  /**
   * Set the user's email address.
   * @param email - The email address of the user
   * @returns {this}
   */
  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  /**
   * Finalizes and returns the constructed User object.
   * @returns {User}
   */
  build(): User {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  }
}

export { UserBuilder };
