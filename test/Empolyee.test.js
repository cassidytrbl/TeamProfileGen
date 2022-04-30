const Employee = require("../employees/Employee");
// console.log(Employee);
test("Can create Employee", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("Can set name with arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
