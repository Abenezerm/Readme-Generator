const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./Util/generateMarkdown.js');

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please Enter the title of your project:"
  },
  {
    type: "input",
    name: "describtion",
    message: "Provide a short summary of your application, (what it does, who it's for...etc):"
  },
  {
    type: "input",
    name: "instillation",
    message: "Provide detailed instructions for installing the application:"
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain how to use the application:"
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "Enter your collaborators username and their GitHub profile url, add a '=' between name and url, seperate each new collaborator with a comma (if none, just press enter):",
  },
  {
    type: 'confirm',
    name: 'license',
    message: 'Would you like to add a License to this application',
  },
  {
    type: 'list',
    name: 'chosenlicense',
    message: 'Which license would you like to add to your project',
    choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', ],
    when: function (answers){
      return answers.license
    }


  }
];

inquirer.prompt(questions).then((data) => {
  const filename = `README.md`;
  const content = generateMarkdown.generateMarkdown(data);
  fs.writeFile(filename, content, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
})
