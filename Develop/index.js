// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the project name?',
      },
      {
        type: 'input',
        name: 'Description',
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
        name: 'ContributionGuidelines',
        message: 'Please provide the contribution guidelines for your project',
      },
      {
        type: 'input',
        name: 'TestInstructions',
        message: 'Please provide the test instructions for your project',
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

const generateMarkdown = (userInput) => {
    
    return `
    # Project Name:
    ${userInput.name}

    ## License Type
    ${userInput.license}


    ## Table of Contents
    - [Description](#Description) 
    - [InstallationInstructions](#InstallationInstructions)
    - [ProjectUsage](#ProjectUsage)
    - [ContributionGuidelines](#ContributionGuidelines)
    - [TestInstructions](#TestInstructions)
    - [Questions](#Questions)
    

    ## Description
    ${userInput.Description}

    ## Installation Instructions
    ${userInput.InstallationInstructions}

    ## Project Usage
    ${userInput.ProjectUsage}

    ## Contribution Guidelines
    ${userInput.ContributionGuidelines}

    ## Test Instructions
    ${userInput.TestInstructions}

    ## Questions
        # Please reach out to me with additional questions via email or check out my Github page (as shown below)
    ${userInput.email}
    ${userInput.Github}
    
    `
}


// TODO: Create a function to write README file
const writeToFile = (markdown) => {
    //write output to README.md file
    fs.writeFile('README.md', markdown, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}

// TODO: Create a function to initialize app
function init() {
    promptUser ()
        .then((userInput)=>{
            const markdown = generateMarkdown(userInput)
            writeToFile(markdown)
        })
}

// Function call to initialize app
init();
