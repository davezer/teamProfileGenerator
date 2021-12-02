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
    return ``
}

let generateEngineerCard = (Engineer) => {
    return ``
}

let generateInternCard = (Intern) => {
    return ``
}

function generateTeam(team) {
    console.log(team);
    return ``
}

module.exports = generateTeam;