const { PORT } = require("../index"); // Import the app and valRef1

describe("Server", () => {
  it("valRef1 has the correct value", () => {
    expect(PORT).toBe(3001);
  });
});

test("simple test", () => {
  expect(1 + 1).toBe(2);
});
