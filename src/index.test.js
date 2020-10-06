import hello from ".";

describe("it should say hello", () => {
  it("should greet 'Jhon Doe'", () => {
    expect(hello()).toBe("Hello, Jhon Doe");
  });

  it("should greet 'Daniel'", () => {
    expect(hello("Daniel")).toBe("Hello, Daniel");
  });
});
