/**
 * A simple Builder pattern example:
 *
 * Imagine constructing a "User" object with optional fields.
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

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  build(): User {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  }
}

export { UserBuilder };
