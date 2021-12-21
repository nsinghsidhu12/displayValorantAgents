const agentName = document.querySelector("#agentName");
const agentImage = document.querySelector("#agentImage");
const agentRoleImage = document.querySelector("#agentRoleImage");
const agentAbilOneImage = document.querySelector("#agentAbilOneImage");
const agentAbilTwoImage = document.querySelector("#agentAbilTwoImage");
const agentAbilThreeImage = document.querySelector("#agentAbilThreeImage");
const agentUltImage = document.querySelector("#agentUltImage");
const agentAbilText = document.querySelector("#agentAbilText");
const agentRole = document.querySelector("#agentRole");
const agentDesc = document.querySelector("#agentDesc");

class DisplayUI {
  AgentData(agent) {
    agentName.innerHTML = `${agent.displayName}`;
    agentImage.src = `${agent.bustPortrait}`;
    agentRoleImage.src = `${agent.role.displayIcon}`;
    agentAbilOneImage.src = `${agent.abilities[0].displayIcon}`;
    agentAbilTwoImage.src = `${agent.abilities[1].displayIcon}`;
    agentAbilThreeImage.src = `${agent.abilities[2].displayIcon}`;
    agentUltImage.src = `${agent.abilities[3].displayIcon}`;
    agentAbilText.innerHTML = `${agent.description}`;
    agentRole.innerHTML = `${agent.role.displayName}`
    agentDesc.innerHTML = `${agent.role.description}`;
    this.ImageClickEvents(agent);
  }

  ImageClickEvents(agent) {
    this.Desc(agent);
    this.AbilOne(agent);
    this.AbilTwo(agent);
    this.AbilThree(agent);
    this.AbilUlt(agent);
  }

  Desc(agent) {
    agentRoleImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.description}`;
    })
  }

  AbilOne(agent) {
    agentAbilOneImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[0].description}`;
    })
  }

  AbilTwo(agent) {
    agentAbilTwoImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[1].description}`;
    })
  }

  AbilThree(agent) {
    agentAbilThreeImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[2].description}`;
    })
  }

  AbilUlt(agent) {
    agentUltImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[3].description}`;
    })
  }
}