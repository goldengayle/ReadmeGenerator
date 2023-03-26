// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');
const fs = require('fs');




const generateHTML = (response) =>{
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
 ${response}
</body>
</html>`;
}

// TODO: Create an array of questions for user input

//description, installation instructions, usage information, contribution guidelines, and test instructions


const promptUser =() => {
return inquirer.prompt([
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

])}




/*.then((answers) =>{


  fs.writeFile
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//use markDown.generateMarkdown() to incorporate data from inquirer to make readme

// TODO: Create a function to initialize app
//include prompt and writefile */
const init=() => {
  promptUser()
  .then((answers) => {const readmeFile =   generateMarkDown.generateMarkDown(answers)})
  .then((writeFile ('log.md', readmeFile, (err) => {
  
  err ? console.error(err) : console.log('response logged!')})))}




// Function call to initialize app
init()
