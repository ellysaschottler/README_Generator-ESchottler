// Packages needed for this application
const inquirer = require('inquirer');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why and how of your project.  What did you learn? What problem does this project solve?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide step by step directions to install your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instruct how to use this project, include screenshots:'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Type your screenshot file path:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the project contributors along with their GitHub profile links. List any third party assets or tutorials.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have written tests for your application indicate how to run them here:'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Type in your email address so that users can contact you with questions:'
    },
    {
        type: 'input',
        name: 'questionsGitHub',
        message: 'Type in your GitHub profile link so that users can contact you with questions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Add a license:',
        choices: 
            [
            "Apache License 2.0", 
            "GNU General Public License v3.0", 
            "MIT License", 
            "BSD 2-Clause", 
            "BSD 3-Clause", 
            "Boost Software License 1.0", 
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0"
            ]
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const generateMarkdown = ({projectTitle, description, installation, usage, screenshot, contributing, tests, questionsEmail, questionsGitHub, license}) =>
 `
 # ${projectTitle}

 ## Description
 
 ${description}
 
 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 - [License](#license)
 
 ## Installation
 
 ${installation}
 
 ## Usage
 
 ${usage}

 ${screenshot}
 
 ## Contributing
 
 ${contributing}
 
 ## Tests
 
 ${tests}
 
 ## Questions
 
 If you have any questions about this application, please reach me at ${questionsEmail}.  You can also find my GitHub profile at ${questionsGitHub}
 
 ## License
 
 ${license}

 `;