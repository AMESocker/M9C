// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// const badges = require("badges"); not an npm
const { Console } = require('console');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
//----prompt section format of inquirer----
inquirer
    .prompt([
    {
        type: "input",
        message: 'What is the title of the Project?',
        name: 'title',
    },
    {
        type: "input",
        message: "Please enter a description of the project.",
        name: 'description',
    },
    {
        type: "input",//Defaults
        message: 'What is needed to install to run this application?',
        name: 'installation',
    },
    {
        type: "input",
        message:'What is the app usage?',
        name: 'usage',
    },
    {//----List
        type: "list",
        message: 'What is the license used?',
        name: 'license',
        choices:['MIT','CC','GNU GPL v3','ISC','Apache 2.0','BSD 3-Clause','Eclipse Public License 1.0','Mozilla Public License 2.0','Artistic License 2.0']
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

//Create a function to write README file
// function writeToFile(fileName, data) {}

    .then((data) => {
        fs.writeFile('GeneratedREADME.md',generateMarkdown(data),(err)=> {
            err ? console.error(err) : console.log("Roads? Where we're going, we don't need roads.")
                }
    )
    })
function generateBadges (){};
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(generateMarkdown);
