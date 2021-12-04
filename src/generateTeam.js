const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(team) {
    let cards = [];

    for (let i = 0; i < team.length; i++) {
        const teamArray = team[i];

        switch(teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.gitHub);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
                cards.push(generateInternCard(intern));
                break;
        }
    }

    return cards.join(``);
}

let generateManagerCard = (Manager) => {
    return `
    <div class='card m-1 shadow' style='width: 18rem'>
    <div class='card-header'>
        <h3 class='card-title'>${Manager.getName()}</h3>
        <h6 class='card-text'>${Manager.getRole()}</h6>
    </div>
    <div class='card-body'>
        <ul class='list-group list-group-flush'>
            <li class='list-group-item'>ID: ${Manager.getId()}</li>
            <li class='list-group-item'>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class='list-group-item'>Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `
}

let generateEngineerCard = (Engineer) => {
    return `
    <div class='card m-1 shadow' style='width: 18rem'>
    <div class='card-header'>
        <h3 class='card-title'>${Engineer.getName()}</h3>
        <h6 class='card-text'>${Engineer.getRole()}</h6>
    </div>
    <div class='card-body'>
        <ul class='list-group list-group-flush'>
            <li class='list-group-item'>ID: ${Engineer.getId()}</li>
            <li class='list-group-item'>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()} </a></li>
            <li class='list-group-item'>gitHub: <a href="https://github.com/${Engineer.getGitHub()}" target="_blank">${Engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
    `
}

let generateInternCard = (Intern) => {
    return `
    <div class='card m-1 shadow' style='width: 18rem'>
        <div class='card-header'>
            <h3 class='card-title'>${Intern.getName()}</h3>
            <h6 class='card-text'>${Intern.getRole()}</h6>
        </div>
        <div class='card-body'>
            <ul class='list-group list-group-flush'>
                <li class='list-group-item'>ID: ${Intern.getId()}</li>
                <li class='list-group-item'>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class='list-group-item'>School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

function generateTeam(team) {
    console.log(team);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>My Team</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid mb-5 bg-dark bg-gradient" style='height: 100px'>
      <div class="container">
        <h1 class="display-4 text-center text-white">My Team</h1>
      </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
    ${generateCards(team)}
    </div>
    </body>
    </html>`
}

module.exports = generateTeam;