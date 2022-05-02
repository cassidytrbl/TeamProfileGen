const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const manager = require("./employees/Manager");
const engineer = require("./employees/Engineer");
const intern = require("./employees/Intern");
const engineerCard = require("./src/engineerCard");
const internCard = require("./src/internCard");
