const inq = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const engineers = [];
const managers = [];
const interns = [];

const managerQ = [{
    type: "input",
    name: "manname",
    message: "What is your name?"
}, {
    type: "number",
    name: "manid",
    message: "What is your ID?",
}, {
    type: "input",
    name: "manemail",
    message: "What is your e-mail?",
}, {
    type: "number",
    name: "manoffice",
    message: "What is your office number?"
}]

const engineerQ = [{
    type: "input",
    name: "enname",
    message: "What is your name?"
}, {
    type: "number",
    name: "enid",
    message: "What is your ID?"
}, {
    type: "input",
    name: "enemail",
    message: "What is your e-mail?"
}, {
    type: "input",
    name: "engitHub",
    message: "What is your Github?"
}];

const internQ = [{
    type: "input",
    name: "intname",
    message: "What is this intern's name?"
}, {
    type: "number",
    name: "intid",
    message: "What is your ID?"
}, {
    type: "input",
    name: "intemail",
    message: "What is your e-mail?"
}, {
    type: "input",
    name: "intschool",
    message: "What is your school?"
}];


function whatRole() {
    inq.prompt(
        [{
        type: "list",
        name: "choice",
        message: "What employee role do you wish to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more roles needed"
        ]
    }]
    ).then(function (response) 
    {
        if (response.choice === "Manager") {
            askManager();
        }
        if (response.choice === "Engineer") {
            askEngineer();
        }
        if (response.choice === "Intern") {
            askIntern();
        }
        else {
            createHTML();
        }
    })
}

function askEngineer() {
    inq.prompt(engineerQ)
        .then(function (data) {
            const engineerInfo = new Engineer(data.enname, data.enid, data.enemail, data.engitHub);

            engineerArray.push(engineerInfo);
            engineers.push(data);
            whatRole();
        })
}

function askIntern() {
    inq.prompt(internQ)
        .then(function (data) {
            interns.push(data);
            whatRole();
        })
}

function askManager() {
    inq.prompt(managerQ)
        .then(function (data) {
            managers.push(data);
            whatRole();
        })

}

