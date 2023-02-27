// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Ask prompt questions for the Manager input
const questionManagger = [
  {
    type: "input",
    name: "managerName",
    message: "Enter Manager Name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter Manager Id:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter Email Address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter Office Number",
  },
];

// function to run the prompt, get answers back, and store in a manager instance of the manager class.
function init() {
  inquirer.prompt(questionManagger).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );

    // Display a success message and return to the main menu
    console.log(`Success. Added ${manager.getName()} to database.`);
    console.log(answers);
  });
}

// calls the prompt function
init();

