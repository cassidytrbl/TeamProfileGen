function internCard(itrncrd) {
  return `<div class="w3-quarter" id="Engineer">
      <h4>${itrncrd.getName()}</h4>
      <h4>${itrncrd.getRole()}</h4>
      <h5>${itrncrd.getID()}</h5>
      <h5>${itrncrd.getEmail()}</h5>
      <h5>${itrncrd.getGithub()}</h5>
      </div>`;
}
module.exports = internCard;
