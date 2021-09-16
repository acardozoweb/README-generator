// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
};

// function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === "none") {
    return "";
  } else {
    return `\n* [License] (#license)\n`
  }
};

// function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
  This app is covered under the ${license} license.`
  }
}

// function to generate markdown for README
let generateMarkdown = data => {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation] (#installation)

  * [Usage] (#usage)
  ${renderLicenseLink(data.license)}
  * [Contributions] (#contributions)

  * [Testing] (#testing)

  * [Questions] (#questions)

  ## Installation

  To install the program, run the following command:

  ${data.installation}
 

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}


  ## Contributions

  ${data.contribution}

  ## Testing
  To test the app, run the following command:
  
  ${data.test}
 

  ## Questions

  View more of my work at
  [${data.github}](https://github.com/${data.github}/)

  Email me with any questions at
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
