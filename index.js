const inquirer = require(`inquirer`)
const fs = require = (`fs`)

// const { title, motivation, why, problemSolved, learned } = obj

const generateHTML = ({ title, motivation, why, problemSolved, learned }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">${title}</h1>
        <h3>Provide a short description explaining the what, why and how of your project.</h3>
      <p class="">${motivation}</p>
      <p class="">${why}</p>
      <p class="">${problemSolved}</p>
      <p class="">${learned}</p>
      
     
  </header>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is your name?`
        },
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

        fs.writeFile(`index.html`, htmlPageContent, (err) =>
            err ? console.log(err) : console.log(`Successfully created index.html!`));

    });
    // <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
    //   <ul class="list-group">
    //     <li class="list-group-item">My GitHub username is ${github}</li>
    //     <li class="list-group-item">LinkedIn: ${linkedin}</li>
    //   </ul>
    // </div>