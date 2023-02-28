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

// An array to push the classes too, that are created in the prompts
const employeeArray = [];

// Ask prompt questions for the Manager input
const questionManager = [
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
  inquirer.prompt(questionManager).then((answers) => {
    // make a new class based on the prompt information
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );

    // Display a success message and return to the main menu
    console.log(`Success. Added ${manager.getName()} to database.`);
    // push manager class to employee array
    employeeArray.push(manager);
    console.log(manager);
  });
}

// function to run the prompt, get answers back, and store in an Engineer instance of the manager class.
function addEngineer() {
  const questionEngineer = [
    {
      type: "input",
      name: "engineerName",
      message: "Enter Engineer's Name:",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter Engineer's Id:",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter Engineer's Email Address:",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Enter Engineer's Github Username:",
    },
  ];

  inquirer.prompt(questionEngineer).then((answers) => {
    // creates a new class based on the answers
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );

    // Display a success message and return to the main menu
    console.log(`Success. Added ${engineer.getName()} to database.`);
    // Push engineer class to employee array
    employeeArray.push(engineer);
    console.log(answers);
  });
}
// addEngineer();

// function to run the prompt, get answers back, and store in a Intern instance of the manager class.
function addIntern() {
  const questionIntern = [
    {
      type: "input",
      name: "internName",
      message: "Enter Intern's Name:",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter Intern's Id:",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter Intern's Email Address:",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter Intern's School:",
    },
  ];

  inquirer.prompt(questionIntern).then((answers) => {
    // creates a new class based on the answers
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );

    // Display a success message and return to the main menu
    console.log(`Success. Added ${intern.getName()} to database.`);
    // push intern class to employee array
    employeeArray.push(intern);
    console.log(answers);
  });
}

// addIntern();

// calls the prompt function
init();

// console.log(employeeArray);
