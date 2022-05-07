const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const manager = require("./employees/Manager");
const engineer = require("./employees/Engineer");
const intern = require("./employees/Intern");
const engineerCard = require("./src/engineerCard");
const internCard = require("./src/internCard");
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
      {
        type: "input",
        name: "githubUserName",
        message: "Enter your GitHub Username:",
      },
    ])
    .then(function (response) {
      const newEngineer = new engineer(
        response.name,
        response.id,
        response.email,
        response.githubUserName
      );
      engineerArray.push(newEngineer);
      addEmployee();
    });
}

function initInternQuestions() {
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
      {
        type: "input",
        name: "githubUserName",
        message: "Enter your GitHub Username:",
      },
    ])
    .then(function (response) {
      const newIntern = new intern(
        response.name,
        response.id,
        response.email,
        response.githubUserName
      );
      engineerArray.push(newIntern);
      addEmployee();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add new Employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then(function (secondChoice) {
      if (secondChoice.NewEmployee === "Yes") {
        initPromptLoop();
      } else {
        generateHTML(engineerArray, internArray);
      }
    });
}

function generateMgnrCrd(managerArray) {
  const managerCard = managerArray
    .map((element) => {
      return `<div class ="w3-quarter" id="Engineer">
    <h4>${mgnrcrd.getName()}</h4>
    <h4>${mgnrcrd.getRole()}</h4>
    <h5>${mgnrcrd.getID()}</h5>
    <h5>${mgnrcrd.getEmail()}</h5>
    <h5>${mgnrcrd.getGithub()}</h5>
    </div>`;
    })
    .join("");
  return managerCard;
}

function generateHTML(engineerArray, internArray) {
  var employeeArray = [engineerArray, internArray];
  for (var i = 0; i < employeeArray.length; i++) {
    const output = "./dist/index.html";
    console.log(employeeArray);

    function generateEngiCrd(engineerArray) {
      const engineerCard = engineerArray
        .map((element) => {
          return `<div class="w3-quarter" id="Engineer">
        <h4>${engicrd.getName()}</h4>
        <h4>${engicrd.getRole()}</h4>
        <h5>${engicrd.getID()}</h5>
        <h5>${engicrd.getEmail()}</h5>
        <h5>${engicrd.getGithub()}</h5>
        </div>`;
        })
        .join("");
      return engineerCard;
    }
    function generateItrnCrd(internArray) {
      const internCard = internCard
        .map((element) => {
          return `<div class="w3-quarter" id="Engineer">
        <h4>${itrncrd.getName()}</h4>
        <h4>${itrncrd.getRole()}</h4>
        <h5>${itrncrd.getID()}</h5>
        <h5>${itrncrd.getEmail()}</h5>
        <h5>${itrncrd.getGithub()}</h5>
        </div>`;
        })
        .join("");
      return internCard;
    }
    const string = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <style>
        body,h1,h2,h3,h4,h5 {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        .w3-bar-block .w3-bar-item {
            padding: 25px;
        }
        </style>
    </head>
    <body>
        <div class="w3-top">
            <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
                <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()"></div>
                <div class="w3-right w3-padding-16"></div>
                <div class="w3-center w3-padding-16">My Team</div>
        </div>
    `;
  }
}
