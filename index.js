// other files being read from projects
const Employee = require('./lib/Employee');

const Questions = require ('./lib/Questions');
const Manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const HTMLTemplate = require('./dist/generateHTML');

// installed packages
const inquirer = require('inquirer');
const fs = require ('fs');

// starting prompt
function writePrompt() {
    console.log("is this working")
    questions;
};

// the questions to be prompted .... ***DON'T FORGET TO MOVE THIS TO QUESTIONS.JS***
function questions() {
    inquirer.prompt([
        {
            type: "input",
            name: "teamname",
            message: "Please enter the name of the team!",
            validate: (value) => {
                if (value) { return true }
                else { return "Team name Required" }
            }
        },
        {
            type: "input",
            name: "name",
            message: "Please enter Employee's Full Name!",
            validate: (value) => {
                if (value) { return true }
                else { return "Role Required" }
            }
        },
        {
            type: "list",
            name: "role",
            message: `Please enter role!`,
            choices: [
                "Engineer",
                "Manager",
                "Intern",
            ],
        },
        {
            type: "input",
            name: "id",
            message: "Please enter Employee's ID!",
            validate: (value) => {
                if (value) { return true }
                else { return "ID Required" }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Employee email?",
        }
    ])
        // questions to add role depending on the choice selected
        .then(function ({ name, role, id, email }) {
            inquirer.prompt([
                {
                    type: "input",
                    name: "officenumber",
                    message: "Please enter office number",
                    when:  ({role}) => role === "Manager",
                    validate: (value) => {
                        if (value) { return true }
                        else { return "Office number Required" }
                    }
                },
                {
                    type: "input",
                    name: "officenumber",
                    message: "Please enter office number",
                    when:  ({role}) => role === "Manager",
                    validate: (value) => {
                        if (value) { return true }
                        else { return "Office number Required" }
                    }
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter Github Username",
                    validate: (value) => {
                        if (value) { return true }
                        else { return "Github Username Required" }
                    }
                }, {
                    type: "input",
                    name: "github",
                    message: "Please enter Github Username",
                    validate: (value) => {
                        if (value) { return true }
                        else { return "Github Username Required" }
                    }
                }


            ])
        })

};


writePrompt;



// in order to read and write the new file 