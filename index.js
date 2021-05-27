const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
var path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "employees.html");

const render = require("./src/Template.js");


const employees = [];


const employeeQuestions = {
    // getting the questions for the Manager promt
    Manager: [
        {
            type: "input",
            name: "name",
            message: "Please type the Manager's name?",

        },
        {
            type: "input",
            name: "id",
            message: "Please type the Manager's id?",

        },
        {
            type: "input",
            name: "email",
            message: "Please type the Manager's email address?",

        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please type the Manager's office number?",

        },
        {
            type: "list",
            name: "addNew",
            message: "Add another employee?",
            choices: ["Yes", "No"]
        }
    ],
    // getting the questions for the Engineer promt
    Engineer: [
        {
            type: "input",
            name: "name",
            message: "Please type the Engineer's name?",

        },
        {
            type: "input",
            name: "id",
            message: "Please type the Engineer's id?",

        },
        {
            type: "input",
            name: "email",
            message: "Please type the Engineer's email address?",

        },
        {
            type: "input",
            name: "github",
            message: "Please type the Engineer's GitHub username?",
        },
        {
            type: "list",
            name: "addNew",
            message: "Add another employee?",
            choices: ["Yes", "No"]
        }
    ],
    // getting the questions for the Intern promt
    Intern: [
        {
            type: "input",
            name: "name",
            message: "Please type the intern's name?",

        },
        {
            type: "input",
            name: "id",
            message: "Please type the intern's id?",

        },
        {
            type: "input",
            name: "email",
            message: "Please type the intern's email address?",

        },
        {
            type: "input",
            name: "school",
            message: "Please type the school the intern attending?",

        },
        {
            type: "list",
            name: "addNew",
            message: "Add another employee?",
            choices: ["Yes", "No"]
        }
    ]
};
// asking the user to choose which employee they will create a card for 
const selectEmployee = [
    {
        type: "list",
        name: "employeeType",
        message: "please choose the employee's role from the options below.",
        choices: ["Manager","Engineer","Intern"]
    }
]



function addEmployee() {
    inquirer.prompt(selectEmployee)
        .then(answer => {
            

            if (answer.employeeType === "Manager") {
                    inquirer.prompt(employeeQuestions.Manager)
                        .then(answer => {
                            // generates a save based off of the users input  
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                );

                            //Pushing manager into an array
                            employees.push(manager);
                            if (answer.addNew === "Yes") {
                                // restarts function if user inputs to add an additoinal employee
                                addEmployee();
                            } else {
                                // else it will generate the HTML page 
                                generate();
                            }
                        }); 

            } if (answer.employeeType === "Engineer") {
                inquirer.prompt(employeeQuestions.Engineer)
                    .then(answer => {
                        // generates a save based off of the users input 
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                         //Pushing Engineer into an array
                        employees.push(engineer);
                        if (answer.addNew === "Yes") {
                            // restarts function if user inputs to add an additoinal employee
                            addEmployee();
                        } else {
                             // else it will generate the HTML page 
                            generate();
                        };
                    });

            } if (answer.employeeType === "Intern") {
                inquirer.prompt(employeeQuestions.Intern)
                    .then(answer => {
                        // generates a save based off of the users input  
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );
                       //Pushing Intern into an array
                        employees.push(intern);
                        if (answer.addNew === "Yes") {
                            // restarts function if user inputs to add an additoinal employee
                            addEmployee();
                        } else {
                             // else it will generate the HTML page 
                            generate();
                        };
                    });
            };
        });
};

addEmployee();

function generate() {
    fs.writeFileSync(outputPath, render(employees), "utf-8");
}