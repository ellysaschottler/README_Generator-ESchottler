# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)


User Story:
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the 
-title of my project and 
-*sections entitled 
    -Description, 
    *Table of Contents, 
    -Installation, 
    -Usage, 
    -License, 
    -Contributing, 
    -Tests, 
    -Questions
WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

# <projectTitle>

## Description

<description>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

<installation>

## Usage

<usage>

## Contributing

<contributing>

## Tests

<tests>

## Questions

If you have any questions about this application, please reach me at <questionsEmail>.  You can also find my GitHub profile at <questionsGitHub>

## License

<license>


<!-- 
test inputs
 projectTitle = "TestProject"
 description = "This is a test project to see if the README Generator Code is working"
 installation = "Install this at your own risk"
 usage = "This is for creating a README for your project"
 screenshot = "/assets/images/screenshot.png"
 contributing = "This project was created with the starter code from https://github.com/coding-boot-camp/potential-enigma"
 tests = "There are no tests at this time"
 questionsEmail = "fakeemail@gmail.com"
 questionsGitHub = "https://github.com/ellysaschottler"
 license = "MIT License" 
 -->