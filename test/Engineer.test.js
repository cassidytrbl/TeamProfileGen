const Engineer = require("../employees/Engineer");
test("Can create Engineer", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});

test("Can set name with arguments", () => {
  const name = "Alice";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});
