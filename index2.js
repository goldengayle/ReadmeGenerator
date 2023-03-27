const inquirer = require('inquirer');
//const generateMarkDown = require('./utils/generateMarkdown.js');
const fs = require('fs');
var licenseBadge

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
     {
       type: 'input',
       name: 'usage',
       message: 'What information do you need to use this project?',
     },
     {
       type: 'input',
       name: 'contribution',
       message: 'What are the contribution guidelines?',
     },
     {
       type: 'input',
       name: 'test',
       message: 'What are the test instructions?',
     },
     {
       type: 'list',
       name: 'license',
       message: 'What license are you using',
       choices: ['MIT', 'Apache'],
     },
     {
       type: 'input',
       name: 'github',
       message: 'What is your github username?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is your email address',
     }
]

/*const promptUser = () => {
    return inquirer.prompt(questions)
}*/

/*function renderLicenseBadge(license) {
    if(license){
    var licenseBadge = `https://img.shields.io/badge/license-${license}-brightgreen`


    }else{
      var licenseBadge=''
    }
  
  }*/


function generateaMarkDown({ title, description, installation, usage, contributions, test, license, github, email }) {
    return `# ${title}
#
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributions](#contributions)
[Test Instructions](#test-instructions)
[License](#license)
[Questions](#questions)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributions
${contributions}
## Test Instructions
${test}
## Licence 
![${license} License](https://img.shields.io/badge/license-${license}-brightgreen)
## Questions
[${email}](mailto:${email})
[${github}](https://github.com/${github})
`


}


const init = () => {
    inquirer.prompt(questions)
        .then((answers) => fs.writeFile('log.md', generateaMarkDown(answers), (err) => {
            err ? console.error(err) : console.log(`response logged!`)
        }))
}

init();
