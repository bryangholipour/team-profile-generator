const inquirer = require('inquirer');
const fs = require('fs');
let numLoops = 0;

const questions = ()=>{;
inquirer
    .prompt([
        {
            type: 'list',
            name: 'typeOf',
            message: 'What type of employee is this?',
            choices: ['Manager','Engineer','Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'Give your first name:',
        },
        {
            type: 'input',
            name: 'employeeNumber',
            message: 'Give your employee ID:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Give your email address:',
        },
        {
            type: 'list',
            name: 'keepGoing',
            message: 'would you to add another employee?',
            choices: ['Add another employee','QUIT']
        }
    ]).then(answers=>{
        if(ans.keepGoing==='Add another employee'){
            numLoops++;
            //calling the function again to restart the loop
            questions();
        } else {
            //escape clause, if user chooses quit
            let fileName = `${answers.description}.json`
            fs.writeFile(`${answers.name}.html`, generateMD(answers), (err) => {
                if (err) {
                    throw err
                    }
                })
        }
    })
}

    questions()
    // })


    // .then((answers) => {
        let fileName = `${answers.description}.json`

        // fs.writeFile(`${answers.name}.html`, generateMD(answers), (err) => {
        //     if (err) {
        //         throw err
        //         }
        //     })
            
 

var generateMD = (answers) => {
    return (
        ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Landing Page</title>
        <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
    
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${answers.name}</span>
              <h2>${answers.typeOf}</h2>
              <p>${answers.employeeNumber}</p>
            </div>
            <div class="card-action">
              <a href="${answers.email}">${answers.email}</a>
              <a href="${answers.officeNumber}">${answers.officeNumber}</a>
            </div>
          </div>
        </div>
      </div>`
    )}