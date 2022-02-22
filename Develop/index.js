// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
      },
      {
        type: 'input',
        name: 'InstallationInstructions',
        message: 'Provide installation instructions for your project',
      },
      {
        type: 'input',
        name: 'ProjectUsage',
        message: 'Provide information about the project usage',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'Please provide your GitHub username',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a licence type: ',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'None'
        ],
        default: 'None'
    },

    ])};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser ()
        .then((userInput)=>{
            console.log(userInput)
        })
}

// Function call to initialize app
init();
