const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.School = school;
  }
  getRole() {
    return Intern;
  }
  getSchool() {
    return this.School;
  }
}
module.exports = Intern;
