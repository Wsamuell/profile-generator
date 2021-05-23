// other files being read from projects
const Employee = require('./lib/Employee');

const Questions = require('./lib/Questions');
const Manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const HTMLTemplate = require('./dist/generateHTML');

// installed packages
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/Questions');

function startQuestion() {
    inquirer.prompt(questions)
    // *********
        .then(HTMLTemplate({name, role, id, email, officenumber, addNew, github, school}) {

        })

}

// starting prompt
function writePrompt() {
    console.log("is this working")
    startQuestion();
};

writePrompt();



// in order to read and write the new file 