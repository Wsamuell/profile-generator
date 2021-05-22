// other files being read from projects

const Questions = require ('./lib/Questions');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Questions = require('./lib/Questions');
const intern = require('./lib/Intern');

// installed packages
const inquirer = require ('inquirer')
const fs = require ('fs');
const { watchFile } = require('node:fs');

// get the questions to pull using inquire prompt

inquirer.prompt(Questions)
.then((
    answers
) => {
    const DisplayHTML = HTMLTemplate(answers);
    writeFile('index.html', DisplayHTML)
})


// in order to read and write the new file 