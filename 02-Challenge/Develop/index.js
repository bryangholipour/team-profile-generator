const inquirer = require('inquirer');
const fs = require('fs');
const ans = []
let numLoops = 0;
let fileName = `${ans.name}.json`

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
            name: 'user',
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
            type: 'input',
            name: 'github',
            message: 'Give your github:',
        },
        {
            type: 'list',
            name: 'keepGoing',
            message: 'would you to add another employee?',
            choices: ['Add another employee','QUIT']
        }
    ]).then(ans=>{
        if(ans.keepGoing==='Add another employee'){
            numLoops++;
            //calling the function again to restart the loop
            questions();
        } else {
            //escape clause, if user chooses quit
            let fileName = `${ans.description}.json`
            fs.writeFile(`${ans.name}.html`, generateMD(ans), (err) => {
                if (err) {
                    throw err
                    }
                })
        }
    })
}

    questions()
    
    
    
    
    
    
    
    
    
    // ]).then(({user,keepgoing})=>{
    //     ans.push(user);
    //     if (keepgoing==='QUIT'){
    //         fs.writeFile(`team.html`, generateMD(ans), (err) => {
    //             if (err) {
    //                 throw err
    //                 }
    //             })
    //         } else {
    //         questions();
    //         }
    //     })
    // };
    // questions(); 
            // numLoops++;
            
       
        

        
        
//       ]).then(({user,keepGoing})=>{
//     names.push(user);
//     if(keepGoing==="no"){
//         fs.writeFile(`roster.json`,JSON.stringify(names,null,4),(err)=>{
//             if(err){
//                 throw err
//             }
//             console.log("data saved!")
//         })
//     } else {
//         addName();
//     }
//   })
// };

// addName();
    
    
    
    
    
    
    



    // .then((answers) => {
        // let fileName = `${answers.description}.json`

        // fs.writeFile(`${answers.name}.html`, generateMD(answers), (err) => {
        //     if (err) {
        //         throw err
        //         }
        //     })
            
 

var generateMD = (ans) => {
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
    
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">My Team</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
      </ul>
    </div>
  </nav>
        
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <h2 class="card-title">${ans.user}</h2>
              <h2>${ans.typeOf}</h2>
              <p>Employee Number: ${ans.employeeNumber}</p>
              <p>Office Number: ${ans.officeNumber}</p>
            </div>
            <div class="card-action">
              <a href="${ans.email}">Email: ${ans.email}</a>
              <a href="${ans.github}">Github: ${ans.github}</a>
            </div>
          </div>
        </div>
      </div>`
    )}