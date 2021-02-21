// TODO: Include packages needed for this application

const Readme = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
var fs = require("fs");

const checkInput = (input) => {
  if (input.length < 1) {
    return "input too short";
  }else{
    return true;
  }
  
};

const questions = [
  {
    name: "github",
    type: "input",
    message: "What is your Github account?",
    validate: checkInput,
  },

  {
    name: "projectTitle",
    type: "input",
    message: "What is your project name?",
    vaildate: checkInput,
  },
  {
    name: "description",
    type: "input",
    message: "Enter project description",
  },
  {
    name: "installation",
    type: "input",
    message: "installation instructions",
  },
  {
    name: "usageInstruction",
    type: "input",
    message: "Usage instructions",
  },
  {
    name: "contribution",
    type: "input",
    message: "controbution guuidlines",
    default:  " ",
  },

  {
    name: "test",
    type: "input",
    message: "test instructions",
  },
  {
    name: "license",
    type: "input",
    message: "enter license",
  },
];

function start() {
  inquirer.prompt(questions).then((ans) => {
    var obj = new Readme(
      ans.github,
      ans.projectTitle,
      ans.description,
      ans.installation,
      ans.usageInstruction,
      ans.usageInstruction,
      ans.contribution,
      ans.test,
      ans.license
    );

    let readme = obj.grenrateReadme();

    fs.writeFile(`README.md`, readme, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
}

function init() {
  start();
}

init();
