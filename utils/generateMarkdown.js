var licenseBadge
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
  var licenseBadge = `https://img.shields.io/badge/license-${license}-brightgreen`
  return licenseBadge
  }else{
    var licenseBadge = ""
    return licenseBadge
  }

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    var licenseLink = `<a href="https://opensource.org/licenses/${license}">${license}</a>`
    return licenseLink
  } else{
    var licenseLink = ""
    return licenseLink
  }

}



function renderLicenseSection(license, licenseBadge, licenseLink) {
  if (license){
    var licenseSection = `This project is under license of ${licenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
//above functions will be used within generateMarkdown() and this will be exported into index
function generateMarkDown(title, description, license) {
  renderLicenseBadge()
  renderLicenseLink ()
  return `# ${answers.title} ## Description ${answers.description} ## Licence ${answers.license} <a>`+ licenseBadge + `</a>
`

}

module.exports = {generateMarkDown};



