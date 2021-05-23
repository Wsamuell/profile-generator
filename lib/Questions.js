const inquirer = require('inquirer');

// the questions to be prompted .... ***DON'T FORGET TO MOVE THIS TO QUESTIONS.JS***
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
    },

    // questions to add role depending on the choice selected   

    // Manager
    {
        type: "input",
        name: "officenumber",
        message: "Please enter office number",
        when: ({ role }) => role === "Manager",
        validate: (value) => {
            if (value) { return true }
            else { return "Office number Required" }
        }
    },
    {
        type: "list",
        name: "addNew",
        message: "Would you like to enter new team member?",
        when: ({ role }) => role === "Manager",
        choices: [
            "Yes",
            "No"
        ],
    },

    // Engineer
    {
        type: "input",
        name: "github",
        message: "Please enter Github username",
        when: ({ role }) => role === "Engineer",
        validate: (value) => {
            if (value) { return true }
            else { return "Github Username Required" }
        }
    },

    // Intern
    {
        type: "input",
        name: "school",
        message: "Please enter school",
        when: ({ role }) => role === "Intern",
        validate: (value) => {
            if (value) { return true }
            else { return "school Required" }
        }
    },

];

module.exports = questions