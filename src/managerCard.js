function managerCard(mgnrcrd) {
  return `<div class="w3-quarter" id="Engineer">
        <h4>${mgnrcrd.getName()}</h4>
        <h4>${mgnrcrd.getRole()}</h4>
        <h5>${mgnrcrd.getID()}</h5>
        <h5>${mgnrcrd.getEmail()}</h5>
        <h5>${mgnrcrd.getGithub()}</h5>
        </div>`;
}
module.exports = managerCard;
