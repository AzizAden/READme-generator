const inquirer = require('inquirer');
const fs = require('fs');

// Question prompts to get user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Hello, may I have your name please?',
      name: 'name',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'What is your project about?',
      name: 'description',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'How do we install your application?',
      name: 'installation',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'How do we use your project?',
      name: 'usage',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'list',
      message: 'What licenses do you want to use?',
      choices: ['MIT', 'BSD', 'ISC', 'GPL', 'Apache'],
      name: 'license',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'Who contributed to this project?',
      name: 'contributors',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'What are your test instructions?',
      name: 'test',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
      validate: (input) => (input ? true : 'You need to input a value'),
    },
 
    // Using the createNewFile function and passing the data through it
    createNewFile('ReadMe.md', ReadMeTemplate)
  );

// Function that takes a filename and data as parameters and uses them to write a file
function createNewFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('ReadMe file successfully generated');
  });
}
