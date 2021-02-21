class Readme {
  constructor(
    github,
    projectTitle,
    description,
    installation,
    usageInstruct,
    contribution,
    test,
    license
  ) {
    this.github = github;
    this.projectTitle = projectTitle;
    this.description = description;
    this.installation = installation;
    this.usageInstruct = usageInstruct;
    this.contribution = contribution;
    this.test = test;
    this.license = license;
  }

  grenrateTile() {
    return `# ${this.projectTitle}`;
  }

  generateDescription() {
    if (this.description !== "") {
      return `    
## Description 

*The what, why, and how:* 
    
${this.description}
    
    `;
    } else {
      return "";
    }
  }

  gernrateTable() {
    let table = `
## Table of Contents`;

    if (this.installation !== "") {
      table += `
* [Installation](#installation)`;
    }

    if (this.usageInstruct !== "") {
      table += `
* [Usage](#usage)`;
    }

    if (this.contribution !== "") {
      table += `
* [Contributing](#contributing)`;
    }

    if (this.tests !== "") {
      table += `
* [Tests](#tests)`;
    }

    return table;
  }

  generateInstallation() {
    if (this.installation !== "") {
      return `

## Installation:

*Steps required to install project and how to get the development environment running:*

${this.installation};
    `;
    } else {
      return ``;
    }
  }

  gererateUsage() {
    if (this.usageInstruct !== "") {
      return `
## Usage

*Instructions and examples for use:*

${this.usageInstruct}

    `;
    } else {
      return ``;
    }
  }

  gernerateTest() {
    if (this.test !== "") {
      return `
## Tests

*Tests for application and how to run them:*
  
${this.test}
      
`;
    } else {
      return ``;
    }
  }

  gernerateLicense() {
    if (this.license !== "") {
      return `
## License
![License](https://img.shields.io/badge/License-${this.license}%202.0-blue.svg)

`;
    } else {
      return ``;
    }
  }

  gernerateQuestions() {
    return `
## Questions?
    
For any questions, please contact me with the information below:

github.com/${this.github}
    `;
  }

  grenrateContrubution() {
    if (this.contribution !== " ") {
      return `
## Contrubution

`;
    } else {
      return ``;
    }
  }

  grenrateReadme() {
    return (
      this.grenrateTile() +
      this.generateDescription() +
      this.gernrateTable() +
      this.generateInstallation() +
      this.gererateUsage() +
      this.grenrateContrubution() +
      this.gernerateTest() +
      this.gernerateLicense() +
      this.gernerateQuestions()
    );
  }
}

module.exports = Readme;
