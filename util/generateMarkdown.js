//a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GNU GPL v3':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'Mozilla Public License 2.0':
     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    default:
      return '';
  }
}

//a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `##License
Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)`;
    case 'GNU GPL v3':
      return `## License
Licensed under the [GNU GPL v3](https://choosealicense.com/licenses/lgpl-3.0/)`;
    case 'Mozilla Public License 2.0':
     return `## License
Licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
    case 'Apache License 2.0':
      return `## License
Licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    default:
      return '';
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenceType) {
  return licenseBandL = [renderLicenseBadge(licenceType), renderLicenseLink(licenceType)];
}

function manageContributers(contributers){
  const users = []
  if (contributers == undefined){
    return '';
  }else{
    const people = contributers.split(',');
    for (i = 0; i < people.length; i++){
      let nameandLink = people[i].split('=')
      users.push(`[${nameandLink[0]}](${nameandLink[1]})`)
    }
    return `## Credits
Contributers :${users}`;
  }
}

function generateMarkdown(data) {

  const licenseSection  = renderLicenseSection(data.license, data.chosenlicense )
  const creditsSection =  manageContributers(data.collaborators)


  return `# ${data.title}
${licenseSection[0]}
## Description
${data.describtion}
## Table of contents
*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)
## Installation
${data.instillation}
## Usage
${data.usage}
${creditsSection}
${licenseSection[1]}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseBadge
  };
