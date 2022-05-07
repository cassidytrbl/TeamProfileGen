const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const manager = require("./employees/Manger");
const engineer = require("./employees/Engineer");
const intern = require("./employees/Intern");
const engineerCard = require("./src/engineerCard");
const internCard = require("./src/internCard");
const Manager = require("./employees/Manger");

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
      const employeeRole = choice.role;
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
      {
        type: "input",
        name: "officeNum",
        message: "Enter your Office Number:",
      },
    ])
    .then(function (response) {
      const newManager = new manager(
        response.name,
        response.id,
        response.email,
        response.officeNum
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
      addNewEmployee();
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
      internArray.push(newIntern);
      addNewEmployee();
    });
}

function addNewEmployee() {
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
      if (secondChoice.newEmployee === "Yes") {
        initPromptLoop();
      } else {
        generateHTML(managerArray, engineerArray, internArray);
      }
    });
}

function generateHTML(managerArray, engineerArray, internArray) {
  var employeeArray = [managerArray, engineerArray, internArray];
  console.log(employeeArray);
  // for (var i = 0; i < employeeArray.length; i++) {
  const output = "./dist/index.html";

  function generateMgnrCrd(managerArray) {
    const managerCard = managerArray
      .map((mgnrcrd) => {
        return `<div class ="w3-quarter Manager">
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
  function generateEngiCrd(engineerArray) {
    const engineerCard = engineerArray
      .map((engicrd) => {
        return `<div class="w3-quarter Engineer">
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
    const internCard = internArray
      .map((itrncrd) => {
        return `<div class="w3-quarter Intern">
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
        ${generateMgnrCrd(managerArray)}
        ${generateEngiCrd(engineerArray)}
        ${generateItrnCrd(internArray)}
    </body>   
    </html>
    `;
  // }
}
initPromptLoop();
