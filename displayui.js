const agentName = document.querySelector("#agentName");
const agentImage = document.querySelector("#agentImage");
const agentRole = document.querySelector("#agentRole");
const agentRoleDesc = document.querySelector("#agentRoleDesc");
const agentDesc = document.querySelector("#agentDesc");


class DisplayUI {
  AgentData(agent) {
    agentName.innerHTML = `${agent.displayName}`;
    agentImage.src = `${agent.bustPortrait}`;
    agentRole.innerHTML = `${agent.role.displayName}`;
    agentRoleDesc.innerHTML = `${agent.role.description}`;
    agentDesc.innerHTML = `${agent.description}`;
  }
}