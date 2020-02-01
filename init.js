const inq = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");

const engineers = [];
const managers = [];
const interns = [];
const cards = [];


const managerQ = [{
    type: "input",
    name: "name",
    message: "What is your name?"
}, {
    type: "number",
    name: "id",
    message: "What is your ID?",
}, {
    type: "input",
    name: "email",
    message: "What is your e-mail?",
}, {
    type: "number",
    name: "office",
    message: "What is your office number?"
}]

const engineerQ = [{
    type: "input",
    name: "name",
    message: "What is your name?"
}, {
    type: "number",
    name: "id",
    message: "What is your ID?"
}, {
    type: "input",
    name: "email",
    message: "What is your e-mail?"
}, {
    type: "input",
    name: "github",
    message: "What is your Github?"
}];

const internQ = [{
    type: "input",
    name: "name",
    message: "What is this intern's name?"
}, {
    type: "number",
    name: "id",
    message: "What is your ID?"
}, {
    type: "input",
    name: "email",
    message: "What is your e-mail?"
}, {
    type: "input",
    name: "school",
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
    ).then(function (response) {
        if (response.choice === "Manager") {
            askManager();
        }
        if (response.choice === "Engineer") {
            askEngineer();
        }
        if (response.choice === "Intern") {
            askIntern();
        }
        if (response.choice === "No more roles needed") {
            var newArray = managers.concat(engineers);
            var bigArray = newArray.concat(interns);

            employeeCards(bigArray);
            
            
            
        }
    })
}

function askEngineer() {
    inq.prompt(engineerQ)
        .then(function (data) {
            let title = "Engineer";
            const engineerInfo = new Engineer(data.name, data.id, data.email, data.github, title);

            engineers.push(engineerInfo);
            whatRole();
        })
}

function askIntern() {
    inq.prompt(internQ)
        .then(function (data) {
            let title = "Intern";
            const internInfo = new Intern(data.name, data.id, data.email, data.school, title);
            interns.push(internInfo);
            whatRole();
        })
}

function askManager() {
    inq.prompt(managerQ)
        .then(function (data) {
            let title = "Manager";
            const managerInfo = new Manager(data.name, data.id, data.email, data.office, title);
            managers.push(managerInfo);
            whatRole();
        })

}

function employeeCards(newerArray) {

  
    for (i=0; i<newerArray.length; i++) 
{
    cards.push(`<div class="card-body"> 
    <p><b> Name: ${newerArray[i].name} </b>
    <hr>
    <br> <B>Title:</b> ${newerArray[i].title}
    <br>
        <b>Email:</b> ${newerArray[i].email}
        <br>
        <b>School:</b> ${newerArray[i].school}
        <br>
        <b>Id:</b> ${newerArray[i].id}
        <br>
        <b>Office:</b> ${newerArray[i].office} 
        <br>
        <b>Github:</b> ${newerArray[i].github}
        </p></div>`)
}

const webpage = createHTML(cards);
fs.writeFileSync("jobs.html", webpage);


}



function createHTML(bigArray) {

    return `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Weather</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap File -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/style/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>

    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery.js"></script>

    <script src="https://unpkg.com/moment"></script>
</head>

<body>
    <div class="jumbotron jumbotron-fluid pinkbkg pt-0" style="height:100px">
        <div class="container text-center pinkbkg pt-3 mt-0" style="height:100px">
            <h1 class="display-8 pt-0">Employees</h1>
            <p class="currentTime text"></p>
        </div>
    </div>
    <div class="container happyface">
        <div class="row">
            <div class="col-md-12 forecastbox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb8FbZACDXqHt_BViBGXz9BwqN_srX6c9jsNvmBSXeWSjqebYk">
                
            <div class="container-fluid jobs">
                <div class="row joblist">
                ${bigArray}
                </div>
                    
            </div>

        </div>
       
    </div>


    <script>
        var date = moment().format("dddd, MMMM Do YYYY");
        var currentDate = moment().format("hh:mm a, dddd, MMMM Do YYYY")

        $(".currentdate").text(date);
        $(".currentTime").text(currentDate);
        
       
    </script>


</body>

</html>
  `;
}

whatRole();
