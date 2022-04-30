const Intern = require("../employees/Intern");
test("Can create Intern", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test("Can set name with arguments", () => {
  const name = "Alice";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});
