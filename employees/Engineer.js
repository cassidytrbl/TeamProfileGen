const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.Github = Github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.Github;
  }
}
`<h2>Hello ${variableName}</h2>`;
module.exports = Engineer;
