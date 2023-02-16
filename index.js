const inquirer = require(`inquirer`)
const fs = require(`fs`);
const { features } = require("process");

// const { title, motivation, why, problemSolved, learned } = obj

const generateHTML = ({ title, gitHub, email, motivation, why, problemSolved, learned, installation, usage, collaborators, thirdParty, tutorials, license, features, contribute, tests }) =>
    `# ${title}
${gitHub}
${email}

## Table Of Contents
- [Description](#Description)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Description
-${motivation}
-${why}
-${problemSolved}
-${learned}

## Installation
${installation}

## Usage
${usage}

## Credits 
${collaborators}
${thirdParty}
${tutorials}

## License
${license}

## Features
${features}

## How to Contribute
${contribute}

## Tests
${tests}
 `;

inquirer
    .prompt([
        {
            type: `input`,
            name: `title`,
            message: `What is the title of your project?`
        },
        {
            type: `input`,
            name: `gitHub`,
            message: `What is your GitHub Username?`
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your email?`
        },
        {
            type: `input`,
            name: `motivation`,
            message: `What was your motivation?`
        },
        {
            type: `input`,
            name: `why`, 
            message: `Why did you build this?`
        },
        {
            type: `input`,
            name: `problemSolved`,
            message: `What problem does it solve?`
        },
        {
            type: `input`,
            name: `learned`,
            message: `What did you learn?`
        },
        {
            type: `input`,
            name: `installation`,
            message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Provide instructions and examples for use. Include screenshots as needed.`
        },
        {
            type: `input`,
            name: `collaborators`,
            message: `List your collaborators, if any, with links to their GitHub profiles.`
        },
        {
            type: `input`,
            name: `thirdParty`,
            message: `If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.`
        },
        {
            type: `input`,
            name: `tutorials`,
            message: `If you followed tutorials, include links to those here as well.`
        },
        {
            type: `list`,
            name: `license`,
            message: `If you followed tutorials, include links to those here as well.`,
            choices: [`None`, `Apache License 2.0`, `GNU General Public License v3.0`, `MIT License`, `BSD 2-Clause "Simplified License`, `BSD 3-Clause "New" or "Revised" License`, `Boost Software License 1.0`, `Creative Commons Zero v1.0 Universal`, `Eclipse Public License 2.0`, `GNU Affero General Public License v3.0`, `GNU General Public License v2.0`, `GNU Lesser General Public License v2.1`, `Mozilla Public License 2.0`, `The Unlicense`]
        },
        {
            type: `input`,
            name: `contribute`,
            message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.`
        },
        {
            type: `input`,
            name: `tests`,
            message: `Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
        },
    ])
    .then((response) => {
        const htmlPageContent = generateHTML(response);

        fs.writeFile(`README.md`, htmlPageContent, (err) =>
            err ? console.log(err) : console.log(`Successfully created README.md!`));

    });
