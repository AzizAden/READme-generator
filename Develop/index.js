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
  ])
  .then(({
    name,
    title,
    description,
    installation,
    usage,
    license,
    contributors,
    test,
    github,
    email,
  }) => {
    // Creating the layout of the Readme page
    const ReadMeTemplate = `# ${title}
![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blueviolet&style=plastic)

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

### Description:
${description}

### Installation:
To run this program, you need the following packages: ${installation}

### Usage:
Example of how to use this program: ${usage}

### License:
This project is licensed under: ${license}

### Contributors:
${contributors}

### Test:
To test, run the following command: ${test}

### Questions:
If you have any questions, contact ${name} on [GitHub](https://github.com/${github}) or [Email](mailto:${email})`;

    // Using the createNewFile function and passing the data through it
    createNewFile('ReadMe.md', ReadMeTemplate);
  });

// Function that takes a filename and data as parameters and uses them to write a file
function createNewFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('ReadMe file successfully generated');
  });
}
