// other files being read from projects
const Employee = require('./lib/Employee');

const Engineer = require('./lib/Engineer');
const questions = require('./lib/Questions');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const HTMLTemplate = require('./dist/generateHTML');

// installed packages
const inquirer = require('inquirer');
const fs = require('fs');

function startQuestion() {
    inquirer.prompt(questions)
        // *********
        .then((answers) => {
            console.log("answers", answers);
            let teamMembers = [{}]
            let newEmployee;
            if (answers.role === "Manager") {
                newEmployee = new Manager(answers.name, answers.email, answers.id, answers.officenumber, answers.role)
            } else if (answers.role === "Engineer") {
                newEmployee = new Engineer(answers.name, answers.email, answers.id, answers.github, answers.role)
                console.log('answers', answers);
            } else {
                newEmployee = new Intern(answers.name, answers.email, answers.id, answers.school, answers.role)
            }
            teamMembers.push(newEmployee)
            // when done, run the writefile function passing generateFile(teamMembers)
            // teamMembers[engineer object, manager object, intern object]
        });

}
// starting prompt
function writePrompt() {
    startQuestion();
    console.log("is this working")
    // generateFile();
};
function generateFile(data) {
fs.writeFile('generate.html', HTMLTemplate(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}


writePrompt();



// in order to read and write the new file 