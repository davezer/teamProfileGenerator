const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const fs = require('fs');


// const renderHTML = require('./src/generateHTML');

let teamArr = [];


// manager function questions
const managerQuestions = () => {
    inquirer.prompt([

        {
            type:'input',
            name: 'name',
            message: 'What is the Manager\'s name?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the Manager\'s ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager\'s email?' 
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber){
                    return true;
                } else {
                    console.log('You must enter an office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        teamArr.push(manager)
        switch(managerAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(teamArr));
        }
    });
}

// engineer function questions
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?' 
        },
 
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username? (Required)",
            validate: gitHub => {
                if (gitHub) {
                    return true;
                } else {
                    console.log('You must enter a username!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.gitHub)
        teamArr.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(teamArr));

        }
    })
};

// intern function questions
const internQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?' 
        },

        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend? (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('You must enter a school!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        teamArr.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(teamArr))
        }
    })
};

managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('File Saved!')
    });
};
