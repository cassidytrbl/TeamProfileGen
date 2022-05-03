const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const manager = require("./employees/Manager");
const engineer = require("./employees/Engineer");
const intern = require("./employees/Intern");
const engineerCard = require("./src/engineerCard");
const internCard = require("./src/internCard");

let managerArray = [];
let engineerArray = [];
let internArray = [];

function initPromptLoop() {
  inquirer
    .prompt({
      type: "list",
      message: "What is your title?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then((choice) => {
      const employeeRole = choice.position;
      if (employeeRole === "Manager") {
        initManagerQuestions();
      } else if (employeeRole === "Engineer") {
        initEngineerQuestions();
      } else if (employeeRole === "Intern") {
        initInternQuestions();
      }
    });
}

function initManagerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your ID number:",
      },
    ])
    .then(function (response) {
      const newManager = new manager(
        response.name,
        response.id,
        response.email
      );
      managerArray.push(newManager);
      addNewEmployee();
    });
}

function initEngineerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID number:",
    },
  ]);
}
