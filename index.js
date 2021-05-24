// other files being read from projects
const Employee = require('./lib/Employee');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// installed packages
const inquirer = require('inquirer');
const fs = require('fs');

// location to store all the questions objects
let completedTeam = [];

// general start up questions
function startQuestion() {
    inquirer.prompt([
        {
            type: "input",
            name: "teamname",
            message: "Please enter A new Team Name!",
            validate: (value) => {
                if (value) { return true }
                else { return "Team Name Required" }
            }
        },
    ]).then((answers) => {
        const teamName = answers.teamname;
        newManager();
        completedTeam.push(teamName);
    })

};

// Manager questions to be displayed
function newManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Manager's Full Name!",
            validate: (value) => {
                if (value) { return true }
                else { return "Name Required" }
            }
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
            validate: (value) => {
                if (value) { return true }
                else { return "Email Required" }
            }
        },
        {
            type: "input",
            name: "officenumber",
            message: "Please enter office number",
            validate: (value) => {
                if (value) { return true }
                else { return "Office number Required" }
            }
        },

    ]).then((answers) => {
        const role = "Manager"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const officenumber = answers.officenumber;
        const employee = new Manager(name, id, email, officenumber, role);
        newGuy();
        completedTeam.push(employee);

    })

};
// Ask if the Manger would like to add a new employee
function newGuy() {
    inquirer.prompt([
        {
            type: "list",
            name: "newemployee",
            message: 'Would you like to add a new Employee?',
            choices: [
                "Add an Engineer",
                "Add a Manager",
                "Add an Intern",
                "All Done for now!",
            ],
        },
    ]).then((answers) => {
        switch (answers.newemployee) {
            case "Add an Engineer":
                newEngineer();
                break;

            case "Add a Manager":
                newManager();
                break;

            case "Add an Intern":
                newIntern();
                break;

            case "All Done for now!":
                roundUp();
                break;
        }
    })
};

// New Engineer being prompted
function newEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Engineer's Full Name!",
            validate: (value) => {
                if (value) { return true }
                else { return "Name is Required" }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter Engineer's ID!",
            validate: (value) => {
                if (value) { return true }
                else { return "ID Required" }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Employee email?",
            validate: (value) => {
                if (value) { return true }
                else { return "Email Required" }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter Github username",
            validate: (value) => {
                if (value) { return true }
                else { return "Github Username Required" }
            }
        },
    ]).then((answers) => {
        const role = "Engineer"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const github = answers.github;
        const employee = new Engineer(name, id, email, github, role);
        newGuy();
        completedTeam.push(employee);

    })
};

//  New Intern being prompted
function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Intern's Full Name!",
            validate: (value) => {
                if (value) { return true }
                else { return "Name is Required" }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter Intern's ID!",
            validate: (value) => {
                if (value) { return true }
                else { return "ID Required" }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Employee email?",
            validate: (value) => {
                if (value) { return true }
                else { return "Email Required" }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter school name",
            validate: (value) => {
                if (value) { return true }
                else { return "Github Username Required" }
            }
        },
    ]).then((answers) => {
        const role = "Intern"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const employee = new Intern(name, id, email, school, role);
        newGuy();
        completedTeam.push(employee);
    });
}


//  Employee's are now rounded up, its time to generate the HTML for the User
function roundUp() {
    const generateHTML = []
    const startHTML =

        `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header class="container-fluid">
            <h1> ${completedTeam[0]} </h1>
        </header>
        <section class="container">
            <article class="card-deck">
`
    generateHTML.push(startHTML);
    for (let i = 1; i < completedTeam.length; i++) {

        let employeeCard = `
        <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header"><br> ${completedTeam[i].role} <br></div>
        <div class="card-body text-info">
        <h5 class="card-title"> ${completedTeam[i].name} </h5>
    <ul class="list-group">
        <li class="list-group-item">ID: ${completedTeam[i].id} </li>
        <li class="list-group-item">Email: <br> <a href="mailto:${completedTeam[i].email}">${completedTeam[i].email}</a></li>
`
        if (completedTeam[i].officenumber) {
            employeeCard += `
    <li class="list-group-item">Office Number: ${completedTeam[i].officenumber} </li>
    </ul >`

        } else if (completedTeam[i].github) {
            employeeCard += `
    <li class="list-group-item">Github: <a href="https://github.com/${completedTeam[i].github}">${completedTeam[i].github}</a> </li>
    </ul >`
        } else if (completedTeam[i].school){
            employeeCard += `
    <li class="list-group-item">School Name: ${completedTeam[i].school} </li>
    </ul >`
        }
        employeeCard += `
        </div >
        </div >
        `
        generateHTML.push(employeeCard);

    }

    const stopHTML =
        `
             </article >
        </section >
    
    </body >
    
    </html >
            `

    generateHTML.push(stopHTML);


    fs.writeFile(`./dist/team.html`, generateHTML.join(""), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
startQuestion();
