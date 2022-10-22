// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license == MIT) {'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}else{
  'None'
}
 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License Used 
${data.license}
## Description 
${data.description}
## Table of Contents
- [Installation](##Installation)  
- [Contributors](##Contributors)  
- [More-Info](##More-Info)  
## Installation 
${data.installation}
## Data Usage
${data.usage}
## Contributors 
GitHub Account:[${data.contributing}](github.com/${data.contributing})
## Tests Needed 
${data.tests}
## More Info 
If you have any more questions please contact me at ${data.questions}
     

`;
}

module.exports = generateMarkdown;
