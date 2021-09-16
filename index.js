// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing intructions'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a use license',
            choices: ['none', 'MIT',  'BSD-2', 'BSD-3', 'Apache 2.0' ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ]

// function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data)
}

// function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Generating README...");
        return writeToFile('./dist/README.md', generateMarkdown(data));
    })
    .catch (err => console.log(err));
};

// Function call to initialize app
// console.log('at least this log shows up.')
init();

