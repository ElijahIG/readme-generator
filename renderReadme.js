const renderReadme = 
({
    title,
    work,
    instructions,
    credits,
    install,
    license,
    git,
    email,
    issues,
}) => {
    let badge = "";
switch (license) {
  case 'The MIT License':
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case 'The GPL License':
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
  case 'Apache License':
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
}

    return `# ${title}
${badge}
* [How it works](#work)
* [Install](#install)
* [Credits](#credits)
* [License](#license)
# How it works 
${work}
## Install
${install}
## Instructions
${instructions}
## Credits
${credits}
## License 
${license}
## Reporting issues and making contributions 
${issues}
# Contact
* Github :${git}
* E-mail :${email}`;
}
module.exports = renderReadme