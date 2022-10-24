const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const ans = []
let numLoops = 0;

function manager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'getName',
            message: 'Enter the name of this project manager:',
        },
        {
            type: 'input',
            name: 'getId',
            message: 'Enter the managers employee ID:'
        },
        {
            type: 'input',
            name: 'getEmail',
            message: 'Enter the managers email address:'
        },
        {
            type: 'input',
            name: 'getOfficeNumber',
            message: 'Enter the managers office number:',
        },
        {
            type: 'list',
            name: 'keepGoing',
            message: 'would you to add another employee?',
            choices: ['Add another employee', 'QUIT']
        }
    ]).then(ans => {
        switch (ans.keepGoing) {
            case "Add another employee":
                employee();
                break;
        }
    })
}
const employee = () => {
    inquirer.prompt([
            {
                type: 'list',
                name: 'getRole',
                message: 'What type of employee is this?',
                choices: ['Engineer', 'Intern'],
            }
         ]).then(ans => {
            switch (ans.getRole) {
                case "Engineer":
                    engineer();
                    break;

                case ("Intern"):
                    intern();
                    break;
            }
         })
        }

const engineer = () => {
    inquirer.prompt([
            {
                type: 'input',
                name: 'getName',
                message: 'Enter this engineers name:',
            },
            {
                type: 'input',
                name: 'getId',
                message: 'Enter this engineers ID:',
            },

            {
                type: 'input',
                name: 'getEmail',
                message: 'Enter this engineers email address:',
            },
            {
                type: 'input',
                name: 'getGithub',
                message: 'Enter this engineers github:',
            },
            {
                type: 'list',
                name: 'keepGoing',
                message: 'would you to add another employee?',
                choices: ['Add another employee', 'QUIT']
            }
        ]).then(ans => {
            switch (ans.keepGoing) {
                case "Add another employee":
                    employee();
                    break;
            }
        })
    }
const intern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'getName',
            message: 'Enter this interns name:',
        },
        {
            type: 'input',
            name: 'getId',
            message: 'Enter this interns ID:',
        },

        {
            type: 'input',
            name: 'getEmail',
            message: 'Enter this interns email address:',
        },
        {
            type: 'input',
            name: 'getSchool',
            message: 'Enter this interns school:',
        },
        {
            type: 'list',
            name: 'keepGoing',
            message: 'would you to add another employee?',
            choices: ['Add another employee', 'QUIT']
        }
    ]).then(ans => {
        switch (ans.keepGoing) {
            case "Add another employee":
                employee();
                break;
        }
    })
}
    



manager();
