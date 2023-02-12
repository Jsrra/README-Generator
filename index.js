const inquirer = require(`inquirer`)
const fs = require(`fs`)

// const { title, motivation, why, problemSolved, learned } = obj

const generateHTML = ({ title, motivation, why, problemSolved, learned }) =>
    `# ${title}
    
## Description
-${motivation}
-${why}
-${problemSolved}
-${learned}
    
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
    ])
    .then((response) => {
        const htmlPageContent = generateHTML(response);

        fs.writeFile(`README.md`, htmlPageContent, (err) =>
            err ? console.log(err) : console.log(`Successfully created README.md!`));

    });
    // <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
    //   <ul class="list-group">
    //     <li class="list-group-item">My GitHub username is ${github}</li>
    //     <li class="list-group-item">LinkedIn: ${linkedin}</li>
    //   </ul>
    // </div>