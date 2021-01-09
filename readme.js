const inquirer = require("inquirer");
const fs = require("fs");
const renderReadme = require("./renderReadme");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "What is your app for?",
      name: "work",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "How do you use the app?",
      name: "instructions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "Any credits?",
      name: "credits",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "How do you install your app?",
      name: "install",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
      choices: [
        "The MIT License",
        "The GPL License",
        "Apache License",
        "N/A",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "Github username:",
      name: "git",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "E-mail:",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "How can people contribute and report issues",
      name: "issues",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
  ])
  .then(
    (answers) => {
      const template = renderReadme(answers);
    createNewFile("./output/README.md", template);
    }
  )
  .catch((err) => console.log(err));

function createNewFile(fileName, data) {
  fs.writeFile(
    fileName,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Your README has been generated");
    }
  );
}
