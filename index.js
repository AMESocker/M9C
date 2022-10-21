// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
// const questions = [];

//----prompt section format of inquirer----
inquirer
.prompt([
    {
        type: "input",
        message: 'What is the title of the Project?',
        name: 'titleOfProject',
    },
    {
        type: "input",
        message: "Please enter a description of the project.",
        name: 'description',
    },
    {
        type: "name",
        message:'Enter a table of contents.',
        name: 'tableOfContents',
    },
    {
        type: "input",
        message: 'What is needed to install to run this application?',
        name: 'installation',
    },
    {
        type: "input",
        message:'What is the usage?',
        name: 'usage',
    },
    {
        type: "input",
        message: 'What is the license used?',
        name: 'license',
    },
    {
        type: "input",
        message: 'Who are the contributors github accounts of this project?',
        name: 'contributing',
    },
    {
        type: "input",
        message: 'What tests are needed?',
        name: 'tests',
    },
    {
        type:"input",
        message: 'What is your e-mail?',
        name: 'questions',
    },
])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
