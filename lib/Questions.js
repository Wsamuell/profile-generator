const inquirer = require('inquirer');

const questions = [
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
        message: "Please enter Employee's role!",
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
        name: "github",
        message: "Please enter Github Username",
        validate: (value) => {
            if (value) { return true }
            else { return "Github Username Required" }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter Employee email?",
    },

]
module.exports = questions;

