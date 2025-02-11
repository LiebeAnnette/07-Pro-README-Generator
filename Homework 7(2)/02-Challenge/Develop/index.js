// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter a title for your README.md file.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for using your application(s).",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list your collaborators and resources used in your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide tests for your application(s).",
    },
    {
        type: "list",
        name: "license",
        message: "Please provide the license that your application is covered under.",
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "None"]
    },
    {
        type: "input",
        name: "badges",
        message: "Please list the badges included with your project.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github profile?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
])
.then((data) => {
    writeToFile(`README-${data.title}.md`, generateMarkdown(data));
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
        { if (err) throw err;
            console.log("README file successfully created!")
        }
);
}


// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
