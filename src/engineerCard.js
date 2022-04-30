function engineerCard(engicrd) {
  return `<div class="w3-quarter" id="Engineer">
    <h4>${engicrd.getName()}</h4>
    <h4>${engicrd.getRole()}</h4>
    <h5>${engicrd.getID()}</h5>
    <h5>${engicrd.getEmail()}</h5>
    <h5>${engicrd.getGithub()}</h5>
    </div>`;
}
module.exports = engineerCard;
