const Manager = require("../employees/Manger");
test("Can create Manager", () => {
  const e = new Manager();
  expect(typeof e).toBe("object");
});

test("Can set name with arguments", () => {
  const name = "Alice";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});
