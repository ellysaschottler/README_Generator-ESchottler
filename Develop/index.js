// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
            "Eclipse Public License 2.0",
            "GNU Affero General PUblick License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General PUblic License v2.1",
            "Mozilla Public LIcense 2.0",
            "The Unlicense"
            ]
    }
];



// Function to write README file

inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    fs.writeFile('README.md', readmePageContent), (err) =>
    err ? console.log(err) : console.log('Your README has been created!')
})




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const generateREADMEMarkdown = ({projectTitle, description, installation, usage, screenshot, contributing, tests, questionsEmail, questionsGitHub, license}) =>
 `
 # ${projectTitle}
 ![The San Juan Mountains are beautiful!](https://img.shields.io/badge/License:-${license}-blue)


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

 ![Screenshot](${screenshot})
 
 ## Contributing
 
 ${contributing}
 
 ## Tests
 
 ${tests}
 
 ## Questions
 
 If you have any questions about this application, please reach me at ${questionsEmail}.  You can also find my GitHub profile at ${questionsGitHub}
 
 ## License
 
 This application is covered under ${license}

 `;


 const readmePageContent = generateREADMEMarkdown(answers)