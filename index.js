const inquirer = require('inquirer');
const fs = require('fs');


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
       name: 'contributions',
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
       message: 'What license are you using?',
       choices: ['MIT', 'Apache', 'GPL_3.0', 'None']
     },
     {
       type: 'input',
       name: 'github',
       message: 'What is your github username?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is your email address?',
     },
     {
        type: 'input',
        name: 'year',
        message: 'What is the current year?',
      }
]




function generateaMarkDown({ title, description, installation, usage, contributions, test, license, github, email, year }) {

if(license === 'MIT'){
    var licensetext = ' Copyright (C) ' + year + ' @' +github + ' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
} else if(license === 'Apache'){
    var licensetext= 'Copyright (C) ' + year + ' @' +github + ' Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0). Apache License Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
} else if (license ==="GPL_3.0"){
    var licensetext =' Copyright (C) ' + year + ' @' +github + ' This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.You should have received a copy of the GNU General Public License along with this program.  If not, see [https://www.gnu.org/licenses](https://www.gnu.org/licenses).'
} else if (license ==='None'){
    var licensetext ="This project is not licensed."
}

if (license ==="None"){
  var badge =""}
  else{
    var badge = "![" + license +" License](https://img.shields.io/badge/license-"+license+"-brightgreen)"}
    return `# ${title}
${badge}
## Table of Contents
+ [Description](#description)
+ [Installation](#installation)
+ [Usage](#usage)
+ [Contributions](#contributions)
+ [Test Instructions](#test-instructions)
+ [License](#license)
+ [Questions](#questions)
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
## License 
${licensetext}
## Questions
You can reach me by email at [${email}](mailto:${email}) or view my other projects on github at [${github}](https://github.com/${github}).


`


}


const init = () => {
    inquirer.prompt(questions)
        .then((answers) => fs.writeFile('newReadMe.md', generateaMarkDown(answers), (err) => {
            err ? console.error(err) : console.log(`response logged!`)
        }))
}

init();
